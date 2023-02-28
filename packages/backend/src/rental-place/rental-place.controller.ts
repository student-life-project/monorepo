import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnsupportedMediaTypeResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import {
  EOrder,
  EUserType,
  IAuth0User,
  IPaginationParams,
} from '@student_life/common/dist';
// import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';
import { createReadStream } from 'fs';

import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { Auth } from '../authz/auth.decorator';
import { CharacteristicService } from '../characteristic/characteristic.service';
import { CommentService } from '../comment/comment.service';
import {
  asyncFilter,
  getFullPath,
  isSafeFileExtension,
  saveImageToStorage,
} from '../config/multer.config';
import { FilesUploadDto } from '../helper/dto/file-upload.dto';
import { UserNotAllowOrOwnerException } from '../helper/exceptions/user-not-allowed-to-update-data';
import { Gender, Reason, TypeSpace } from '../helper/types';
import { ImageService } from '../image/image.service';
import { CreateLikeDto } from '../like/dto/create-like.dto';
import { LikeService } from '../like/like.service';
import { RuleService } from '../rule/rule.service';
import { ServiceService } from '../service/service.service';
import { UserService } from '../user/user.service';
import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { UpdateRentalPlaceDto } from './dto/update-rental-place.dto';
import { RentalPlace } from './rental-place.schema';
import { RentalPlaceService } from './rental-place.service';
// import { PaginationMoogooseService } from '../pagination/Pagination.service';

interface ICreatePublication {
  title: string;
  reason: string;
  typeSpace: string;
  gender: string;
  price: string;
  availability: boolean;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  stateCode: string;
  reference: string;
  zone: string;
  rentalPlace: string;
  services: string[];
  rules: string[];
  security: string[];
}

@ApiTags('Rental Place')
@Controller('rental-place')
export class RentalPlaceController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly rentalPlaceService: RentalPlaceService,
    private readonly addressService: AddressService,
    private readonly imageService: ImageService,
    private readonly userService: UserService,
    private readonly likeService: LikeService,
    private readonly commentService: CommentService, // private readonly paginationService: PaginationMoogooseService<RentalPlace>,
    private readonly characteristicService: CharacteristicService,
    private readonly ruleService: RuleService,
    private readonly serviceService: ServiceService,
  ) {}

  @ApiCreatedResponse({
    description: 'Rental place creation just for admins or lessors',
    type: RentalPlace,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post()
  @Auth('create:rental-place')
  async create(
    @Body() createRentalPlaceDto: { publication: ICreatePublication }, // it comes as a string by default
    @Req() req: any,
  ) {
    /*
    {
    "gender": "Sin preferencia",
    "availability": true,
    "security": [
        "Alarma de incendios"
    ],
    "title": "casa ejemplo",
    "reason": "Quiero rentar",
    "typeSpace": "Lugar completo",
    "price": "50001",
    "street": "calle ejemplo",
    "state": "Jalisco",
    "city": "Guadalajara",
    "neighborhood": "colonia ejemplo",
    "reference": "referencias",
    "zone": "zona",
    "stateCode": "12345",
    "rentalPlace": "descripcion de vivienda",
    "services": [
        "Baño"
    ],
    "rules": [
        "No fumar"
    ],
    "images": [
        {
            "path": "1067687.jpg",
            "id": "1677564918840",
            "url": "blob:http://localhost:4000/7c9584d6-6dc2-4e81-89a2-16af7a196e2d"
        }
    ]
  }
    */
    /*
    {
      '{"publication":{"gender":"Sin preferencia","availability":true,"security":': { '"Alarma de incendios"': { '"Baño"': [Object] } } 
    }
   */
    const parsedCreateRentalPlaceDto = createRentalPlaceDto.publication;
    console.log('====================================');
    console.log('CREATE', req, parsedCreateRentalPlaceDto);
    console.log('====================================');
    const userInformation = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    console.log('====================================');
    console.log('USER_INFORMATION', userInformation);
    console.log('====================================');

    const addressInformation: CreateAddressDto = {
      street: parsedCreateRentalPlaceDto.street,
      state: parsedCreateRentalPlaceDto.state,
      city: parsedCreateRentalPlaceDto.city,
      cologne: parsedCreateRentalPlaceDto.neighborhood,
      stateCode: parsedCreateRentalPlaceDto.stateCode,
      reference: parsedCreateRentalPlaceDto.reference,
      // zone: parsedCreateRentalPlaceDto.zone,
      countryCode: 'MX',
      crossStreet: '',
      extNumber: '123',
      intNumber: '',
    };

    console.log('====================================');
    console.log('ADDRESS_INFORMATION', addressInformation);
    console.log('====================================');

    const addressId = await this.addressService
      .create(addressInformation)
      .catch((error) => {
        console.error(error);

        throw new UnprocessableEntityException(
          'unable to create an address for the rental place',
        );
      });
    console.log('====================================');
    console.log('ADDRESS_ID', addressId);
    console.log('====================================');
    const rentalPlaceInformation: CreateRentalPlaceDto = {
      title: parsedCreateRentalPlaceDto.title,
      reason: Reason[parsedCreateRentalPlaceDto.reason as keyof typeof Reason],
      typeSpace:
        TypeSpace[
          parsedCreateRentalPlaceDto.typeSpace as keyof typeof TypeSpace
        ],
      gender: Gender[parsedCreateRentalPlaceDto.gender as keyof typeof Gender],
      price: parsedCreateRentalPlaceDto.price,
      availability: parsedCreateRentalPlaceDto.availability,
      description: parsedCreateRentalPlaceDto.rentalPlace,
      address: addressId as CreateAddressDto,
      owner: userInformation?._id,
      approved: false,
    } as unknown as CreateRentalPlaceDto;
    console.log('====================================');
    console.log('RENTAL_PLACE_INFORMATION', rentalPlaceInformation);
    console.log('====================================');

    const createdPublication = await this.rentalPlaceService.create(
      rentalPlaceInformation,
    );
    console.log('====================================');
    console.log('created_publication', createdPublication);
    console.log('====================================');

    return createdPublication;
  }

  @ApiOkResponse({
    description: 'Find all the rental places',
    schema: {
      allOf: [
        {
          type: 'array',
          items: { $ref: getSchemaPath(RentalPlace) },
        },
      ],
    },
  })
  @Get()
  async findAll(@Query() queries: IPaginationParams & { price: string }) {
    // TODO make sure retrive all need info rentals GET check if made TOP RATE AND MOST COMMENTED limit to 5 ¡¡DISPONIBLES!! (si todos igual random entre los top on different request
    console.log(queries);

    let query = {};
    if (queries.price) {
      query = this.rentalPlaceService.priceFilter(query, queries.price);
    }

    queries.sortBy = 'price';
    queries.order = queries.order || EOrder.desc;

    // return this.rentalPlaceService.findAll();
    const a = await this.rentalPlaceService.find(query, queries);

    console.log('====================================');
    console.log('FIND_ALL', a);
    console.log('====================================');
    return a;
  }

  @ApiNotFoundResponse({
    description: 'Rental place does not exists',
    type: RentalPlace,
  })
  @ApiOkResponse({ description: 'Get a rental place by id' })
  @Get(':id')
  // @Auth('read:rental-place')
  async findOne(@Param('id') id: string) {
    // TODO make sure retrive all need info rentals/:id GET
    const rentalPlace = await this.rentalPlaceService.findById(id);

    if (!rentalPlace) {
      throw new NotFoundException('Rental place does not exists');
    }

    const rentalPlaceObj = rentalPlace.toObject();

    const [likesCount, commentsFinded, characteristics, rules, services] =
      await Promise.all([
        this.likeService.count(id),
        this.commentService.getByRentalPlaceId(id),
        this.characteristicService.findAll({
          _id: { $in: (rentalPlace as any).characteristics },
        }),
        this.ruleService.findAll({
          _id: { $in: (rentalPlace as any).rules },
        }),
        this.serviceService.findAll(),
      ]);

    return {
      ...rentalPlaceObj,
      likesCount,
      comments: commentsFinded.data,
      characteristics,
      rules,
      services,
    };
  }

  @ApiNotFoundResponse({
    description: 'Rental place does not exists',
    type: RentalPlace,
  })
  @ApiOkResponse({ description: 'Get a rental place by id' })
  @Get(':id/from-user')
  @Auth('read:rental-place')
  async findByOwner(
    @Param('id') id: string,
    @Req() req: Request & { user: IAuth0User },
  ) {
    console.log('====================================');
    console.log('HIIIIIIIIIII', req.user);
    console.log('====================================');

    const userData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const rentalPlace = await this.rentalPlaceService.findById(id);

    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');

    const rentalPlaceObj = rentalPlace.toObject();

    // TODO: uncomment once the update endpoint is finished
    /*
    if (rentalPlaceObj.owner !== userData?.id) {
      throw new UnauthorizedException(
        'The Rental place does not belong to the user',
      );
    }
    */

    (rentalPlaceObj as any).owner = userData;

    return rentalPlace;
  }

  @ApiOkResponse({
    description: 'Update a rental place',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Put(':id')
  @Patch(':id')
  // @Auth('update:rental-place')
  async update(
    @Param('id') id: string,
    @Body() updateRentalPlaceDto: UpdateRentalPlaceDto,
    @Req() req: any,
  ) {
    console.log('====================================');
    console.log('JJJJJJJJJJJJJJJJJJJJ');
    console.log('====================================');
    const rentalPlace = await this.rentalPlaceService.findById(id);
    console.log('====================================');
    console.log(
      'UPDATE_PUBLICATION',
      JSON.stringify(updateRentalPlaceDto),
      JSON.stringify(rentalPlace?.toJSON),
    );
    console.log('====================================');
    if (!rentalPlace) {
      throw new NotFoundException(
        'Rental Place does not exists, not able to Update',
      );
    }
    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      throw new UserNotAllowOrOwnerException();
    }
    // delete pass address and rates
    if (updateRentalPlaceDto.address) {
      await this.addressService.update(
        (updateRentalPlaceDto.address as UpdateAddressDto)._id || '',
        updateRentalPlaceDto.address as UpdateAddressDto,
      );
    }
    await this.likeService.deleteByPlaceId(id);
    if (updateRentalPlaceDto.likes) {
      const likesAdded = await this.likeService.createMany(
        updateRentalPlaceDto.likes,
      );

      updateRentalPlaceDto.likes.push(likesAdded as unknown as CreateLikeDto);
    }
    await this.rentalPlaceService.update(id, updateRentalPlaceDto);
    return rentalPlace;
  }

  @ApiOkResponse({
    description: 'Delete a rental place by id',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({ description: 'Rental place does not exists' })
  @Delete(':id')
  // @Auth('delete:rental-place')
  async remove(@Param('id') id: string, @Req() req: any) {
    const rentalPlace = await this.rentalPlaceService.findById(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');

    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      throw new UserNotAllowOrOwnerException();
    }
    // delete from disk last images
    this.rentalPlaceService.removeFiles(rentalPlace.images || []);
    // remove on mongo
    this.imageService.deleteByPlaceId(id);
    this.addressService.deleteByPlaceId(rentalPlace.address.id ?? '');
    this.likeService.deleteByPlaceId(id);
    this.commentService.deleteByPlaceId(id);
    const rentalPlaceDeleted = await this.rentalPlaceService.remove(id);

    return rentalPlaceDeleted;
  }

  @ApiOkResponse({
    description: 'Update a rental place',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @Patch(':id')
  // @Auth('comment:rental-place')
  async comment(
    @Param('id') id: string,
    // @Body() comment: AddCommentPlaceDto,
    @Req() req: any,
  ) {
    const rentalPlace = await this.findRental(id);
    this.isAllowed(rentalPlace.owner, req.user);
  }

  async findRental(id: string) {
    const rentalPlace = await this.rentalPlaceService.findById(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
    return rentalPlace;
  }

  async isAllowed(owner: string, user: any) {
    if (!this.userService.isUserAllowed(owner, user))
      throw new UserNotAllowOrOwnerException();
  }

  @ApiTags('File Upload')
  @ApiOperation({
    summary: 'upload a file',
    description: 'Test',
    operationId: 'operationid',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload rental place images',
    type: FilesUploadDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnsupportedMediaTypeResponse({ description: 'Unsopported' })
  @ApiNotFoundResponse({ description: 'Rental place does not exists' })
  @ApiOkResponse({ description: 'files succesfully' })
  @UseInterceptors(FilesInterceptor('files', 32, saveImageToStorage))
  @Patch(':id/upload')
  // @Auth('upload-image:rental-place')
  async uploadFile(
    @Param('id') id: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Req() req: any,
  ) {
    const fileNames = files?.map((file) => file.filename);

    if (!fileNames)
      throw new UnsupportedMediaTypeException('File must be a png, jpg/jpeg');

    // delete from disk last images
    const rentalPlace = await this.rentalPlaceService.findById(id);
    // validate rental place
    if (!rentalPlace) {
      this.rentalPlaceService.removeFiles(files);
      throw new NotFoundException('Rental place does not exists');
    }
    // validate has access to update
    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      this.rentalPlaceService.removeFiles(files);
      throw new UserNotAllowOrOwnerException();
    }

    this.rentalPlaceService.removeFiles(rentalPlace.images || []);
    this.imageService.deleteByPlaceId(id);

    // separate safe and unsafe files to prevent change extension vulnerability
    const safeFiles = await asyncFilter(
      files,
      async (file: Express.Multer.File) => {
        return isSafeFileExtension(file.filename);
      },
    );
    const unsafeFiles: Array<Express.Multer.File> = files.filter(
      (file) => !safeFiles.includes(file),
    );
    // remove unsafe files (files interseptor automatically save the file has an option to filter invalid file types but change extension vulnerability continues being an issue)
    this.rentalPlaceService.removeFiles(unsafeFiles);

    // prepare safe files to be saved
    const filesToSave = safeFiles.map((file) => {
      return {
        filename: file.filename,
        location: file.destination,
        mimetype: file.mimetype,
        fullpath: file.path,
        size: file.size,
        owner: id,
      };
    });
    // save files in mongo
    const filesCreated = await this.imageService.createMany(filesToSave);
    const placeToUpdate = await this.rentalPlaceService.findById(id);
    // attach them to the rental place
    this.rentalPlaceService.update(id, {
      ...placeToUpdate,
      images: filesCreated,
    } as unknown as UpdateRentalPlaceDto);

    if (unsafeFiles.length) {
      return {
        succed: files.length - unsafeFiles.length, // safe files quantity
        error: 'bad request', // error type
        message: `bad images ${unsafeFiles.length}`, // error message with unsafe files quantity
        data: unsafeFiles, // unsafe files data
      };
    }
    return 'files succesfully uploaded';
  }

  @ApiTags('File Upload')
  @Get('/images/:imagename')
  async getFiles(@Param('imagename') imageName: string, @Res() res: Response) {
    // return file as application/octet-stream
    const file = createReadStream(getFullPath(imageName));
    file.pipe(res);
  }
}
