import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { map } from 'rxjs/operators';

import { ResponseTokenDto } from '../authz/dto/response-token.dto';
import { ResponseRoleDto } from './dto/responseRole.dto';
import { UserMetadataDto } from './dto/userMetadata.dto';

@Injectable()
export class UserService {
  baseURL = process.env.AUTH0_API_BASE_URL;

  apiURL = `${this.baseURL}/api/v2`;

  // eslint-disable-next-line no-useless-constructor
  constructor(private httpService: HttpService) {}

  isAdmin(user: any): boolean {
    return user['https://student-life-auth-api/roles']?.includes('ADMIN');
  }

  isUserAllowed(owner: string, user: any) {
    return owner === user.sub || this.isAdmin(user);
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
}
