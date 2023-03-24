import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from '@student_life/common';
import { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { map } from 'rxjs/operators';

import { ResponseTokenDto } from '../authz/dto/response-token.dto';
import { ImageService } from '../image/image.service';
import { ResponseRoleDto } from './dto/responseRole.dto';
import { UserMetadataDto } from './dto/userMetadata.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  baseURL = process.env.AUTH0_API_BASE_URL;

  apiURL = `${this.baseURL}/api/v2`;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private httpService: HttpService,
    @InjectModel(User.name)
    private readonly UserModel: Model<UserDocument>,
    @Inject(ImageService.name)
    private readonly imageService: ImageService,
  ) {}

  isAdmin(user: any): boolean {
    return user['https://student-life-auth-api/roles']?.includes('ADMIN');
  }

  isUserAllowed(_owner: string, _user: any) {
    return true;
  }

  userIdURIencode(userId: string): string {
    return encodeURI(userId);
  }

  getToken(): Promise<ResponseTokenDto> {
    const url = `${this.baseURL}/oauth/token`;
    // @see https://rxjs.dev/deprecations/to-promise is depracadet on version 7 change to firstValueFrom or lastValueFrom
    return this.httpService
      .post(url, {
        client_id: process.env.AUTH0_API_CLIENT_ID,
        client_secret: process.env.AUTH0_API_CLIENT_SECRET,
        audience: process.env.AUTH0_API_AUDIENCE,
        grant_type: process.env.AUTH0_API_GRANT_TYPE,
      })
      .pipe(map((res) => res.data))
      .toPromise();
  }

  getRoles(token: ResponseTokenDto): Promise<ResponseRoleDto[]> {
    const url = `${this.apiURL}/roles`;
    return this.httpService
      .get(url, {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .pipe(map((res) => res.data))
      .toPromise();
  }

  updateUserRole(
    token: ResponseTokenDto,
    userId: string,
    roleId: string,
  ): Observable<AxiosResponse<any>> {
    const url = `${this.apiURL}/users/${this.userIdURIencode(userId)}/roles`;
    // debug axios request
    // this.httpService.axiosRef.interceptors.request.use(config => {
    //   console.log(config);
    //   return config;
    // });
    return this.httpService
      .post(
        url,
        {
          roles: [roleId],
        },
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        },
      )
      .pipe(map((res) => res.data));
  }

  updateUserMetadata(
    token: ResponseTokenDto,
    userId: string,
    userMetadata: UserMetadataDto,
  ) {
    const url = `${this.apiURL}/users/${this.userIdURIencode(userId)}`;
    return this.httpService
      .patch(
        url,
        {
          user_metadata: userMetadata,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        },
      )
      .pipe(map((res) => res.data));
  }

  async getUserByEmail(email: string): Promise<UserDocument | null> {
    const userData = await this.UserModel.findOne({ email })
      .populate('photo')
      .populate('reports')
      .populate('studentInfo')
      .populate('ownerInfo');

    return userData;
  }

  async isEmailRegistered(email: string): Promise<boolean> {
    const userData = await this.UserModel.findOne({ email });

    return userData !== null;
  }

  async registerUser(userData: any): Promise<UserDocument> {
    const registeredUser = await this.UserModel.create({
      email: userData.email,
      type: userData.type,
      birthDate: userData.birthDate,
      firstName: userData.firstName,
      password: '1',
      phoneNumber: userData.phoneNumber,
    });

    if (userData.photo && registeredUser) {
      const createdImage = await this.imageService.createImage({
        filename: 'profile_photo',
        fullpath: userData.image,
        location: '/',
        mimetype: 'picture',
        size: 100,
        owner: registeredUser._id,
      });

      await createdImage.save();

      registeredUser.photo = createdImage.toObject();
    }

    return registeredUser;
  }

  async getOrCreateUserByEmail(userDto: any): Promise<UserDocument | null> {
    const isUserRegistered = await this.isEmailRegistered(userDto.email);

    let userData = null;

    if (!isUserRegistered) {
      userData = await this.registerUser({
        email: userDto.email,
        firstName: userDto.firstName.toLowerCase(),
        image: userDto.picture,
        type: userDto.type,
        birthDate: userDto.birthDate,
        phoneNumber: '0',
      });
    } else {
      userData = await this.getUserByEmail(userDto.email);

      const imageData = await this.imageService.findByOwner(userData?._id);

      if (userData && imageData) {
        userData.photo = imageData.toObject();
      }
    }

    return userData;
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    const userData = await this.UserModel.findById(id)
      .populate('photo')
      .populate('reports')
      .populate('studentInfo')
      .populate('ownerInfo');

    return userData;
  }

  async updateUserProfile(id: string, data: IUser): Promise<IUser> {
    return this.UserModel.findByIdAndUpdate(
      id,
      data as any,
    ) as unknown as IUser;
  }
}
