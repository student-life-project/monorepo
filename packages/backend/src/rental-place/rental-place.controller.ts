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
  UnauthorizedException,
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
  ERateType,
  EUserType,
  IAuth0User,
  IPaginationParams,
} from '@student_life/common';
// import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';
import { createReadStream } from 'fs';

import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { Auth } from '../authz/auth.decorator';
import { CommentService } from '../comment/comment.service';
import {
  asyncFilter,
  getFullPath,
  isSafeFileExtension,
  saveImageToStorage,
} from '../config/multer.config';
import { FilesUploadDto } from '../helper/dto/file-upload.dto';
// import { UserNotAllowOrOwnerException } from '../helper/exceptions/user-not-allowed-to-update-data';
import { Gender, Reason, TypeSpace } from '../helper/types';
import { ImageService } from '../image/image.service';
import { CreateLikeDto } from '../like/dto/create-like.dto';
import { LikeService } from '../like/like.service';
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
    const newRentalPlaceData = createRentalPlaceDto.publication;
    const userInformation = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const addressInformation: CreateAddressDto = {
      street: newRentalPlaceData.street,
      state: newRentalPlaceData.state,
      city: newRentalPlaceData.city,
      cologne: newRentalPlaceData.neighborhood,
      stateCode: newRentalPlaceData.stateCode,
      reference: newRentalPlaceData.reference,
      zone: newRentalPlaceData.zone,
      countryCode: 'MX',
      crossStreet: '',
      extNumber: '123',
      intNumber: '',
    };

    const addressId = await this.addressService
      .create(addressInformation)
      .catch((error) => {
        console.error(error);

        throw new UnprocessableEntityException(
          'unable to create an address for the rental place',
        );
      });

    const rentalPlaceInformation: CreateRentalPlaceDto = {
      title: newRentalPlaceData.title,
      reason: Reason[newRentalPlaceData.reason as keyof typeof Reason],
      typeSpace:
        TypeSpace[newRentalPlaceData.typeSpace as keyof typeof TypeSpace],
      gender: Gender[newRentalPlaceData.gender as keyof typeof Gender],
      price: newRentalPlaceData.price,
      availability: newRentalPlaceData.availability,
      description: newRentalPlaceData.rentalPlace,
      address: addressId as CreateAddressDto,
      owner: userInformation?._id,
      services: newRentalPlaceData.services,
      security: newRentalPlaceData.security,
      rules: newRentalPlaceData.rules,
      approved: false,
      creationDate: new Date(),
    } as unknown as CreateRentalPlaceDto;

    const createdPublication = await this.rentalPlaceService.create(
      rentalPlaceInformation,
    );

    console.log('====================================');
    console.log('created_publication', createdPublication);
    console.log('====================================');

    return createdPublication;
  }

  @ApiOkResponse({
    description: 'Find all the rental places that belongs to the user',
    schema: {
      allOf: [
        {
          type: 'array',
          items: { $ref: getSchemaPath(RentalPlace) },
        },
      ],
    },
  })
  @Get('/from-user')
  @Auth('read:rental-place')
  async findAllFromUser(
    @Query() queries: IPaginationParams & { price: string },
    @Req() req: Request & { user: IAuth0User },
  ) {
    // TODO make sure retrive all need info rentals GET check if made TOP RATE AND MOST COMMENTED limit to 5 ¡¡DISPONIBLES!! (si todos igual random entre los top on different request
    console.log(queries, req.user);

    const userData = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    let query = {};
    if (queries.price) {
      query = this.rentalPlaceService.priceFilter(query, queries.price);
    }

    if (!userData) {
      throw new NotFoundException('User does not exists');
    }

    (query as any).owner = userData._id;

    queries.sortBy = 'price';
    queries.order = queries.order || EOrder.desc;

    // return this.rentalPlaceService.findAll();
    return this.rentalPlaceService.find(query, queries);
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

    const { data, ...restPagination } = await this.rentalPlaceService.find(
      query,
      queries,
    );
    const dataIds = data.map(
      (place) => (place as unknown as { _id: string })._id,
    );
    const likesCountsGrouped =
      await this.likeService.getLikesCountsGroupedByfield('placeId', {
        placeId: { $in: dataIds },
      });

    const dataWithLikesCount = dataIds.map((placeId, idx) => {
      const groupCount = likesCountsGrouped.find(
        (group: { _id: string; count: number }) => {
          return group._id.toString() === placeId.toString();
        },
      );
      const dataObj = (data[idx] as any).toObject();

      console.log({ dataObj, groupCount });

      (dataObj as unknown as { likesCount: number }).likesCount = groupCount
        ? groupCount.count
        : 0;

      return dataObj;
    });

    return {
      ...restPagination,
      data: dataWithLikesCount,
    };
  }

  @ApiNotFoundResponse({
    description: 'Rental place does not exists',
    type: RentalPlace,
  })
  @ApiOkResponse({ description: 'Get a rental place by id' })
  @Get(':id')
  @Auth('read:rental-place')
  async findOne(@Param('id') id: string) {
    // TODO make sure retrive all need info rentals/:id GET
    const rentalPlace = await this.rentalPlaceService.findById(id);

    if (!rentalPlace) {
      throw new NotFoundException('Rental place does not exists');
    }

    const rentalPlaceObj = rentalPlace.toObject();

    const [likesCount, commentsFinded, ownerData] = await Promise.all([
      this.likeService.count(id),
      this.commentService.getByRentalPlaceId(id),
      this.userService.getUserById(rentalPlace.owner),
    ]);

    return {
      ...rentalPlaceObj,
      likesCount,
      comments: commentsFinded.data,
      owner: ownerData,
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
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });

    const rentalPlace = await this.rentalPlaceService.findById(id);

    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');

    const rentalPlaceObj = rentalPlace.toObject();

    if (rentalPlaceObj.owner !== userData?.id) {
      throw new UnauthorizedException(
        'The Rental place does not belong to the user',
      );
    }

    (rentalPlaceObj as any).owner = userData;

    return rentalPlaceObj;
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
  @Auth('update:rental-place')
  async update(
    @Param('id') id: string,
    @Body() updateRentalPlaceDto: { publication: UpdateRentalPlaceDto },
    // @Req() req: any,
  ) {
    console.log('====================================');
    console.log('UODATE CRA');
    console.log('====================================');
    /**
     * rentalPlace from DB
     * {"reports":[],"comments":[],"approved":false,"likes":[],"images":[],"security":["Salidas de emergencia","Extintores"],"rules":["No beber","No invitados"],"services":["Cocina","Amueblado"],"availability":false,"_id":"64004873b2441f0b4f5a5a18","title":"casa ejemplo 3","reason":"Quiero rentar","typeSpace":"Cuarto privado","gender":"Non-binary","price":"5000200","description":"casa de barro","address":{"ownerId":null,"placeId":null,"zone":"el cerro","country":"México","countryCode":"MX","state":"Jalisco","_id":"64004873b2441f0b4f5a5a17","street":"calle privada","city":"Guadalajara","cologne":"cologne","stateCode":"56789","reference":"camino enterrado","crossStreet":"","extNumber":"123","intNumber":"","__v":0},"owner":"635f804ae74dda1973fa307d","__v":0}
     * from request body
     *  {"title":"casa ejemplo 3","reason":"Quiero rentar","typeSpace":"Cuarto privado","gender":"Non-binary","price":"5200","availability":false,"street":"calle privada","state":"Jalisco","city":"Guadalajara","neighborhood":"cologne","stateCode":"56789","reference":"camino enterrado","zone":"el cerro","rentalPlace":"casa de barro","services":["Cocina","Amueblado"],"rules":["No beber","No invitados"],"security":["Salidas de emergencia","Extintores"],"images":[{"path":"1067687.jpg","id":"1677742855144","url":"blob:http://localhost:4000/6cdc5b20-2832-44d0-97d9-7e500cbef340"}]}
     */
    const rentalPlace = await this.rentalPlaceService.findById(id);
    const newRentalPlaceData = updateRentalPlaceDto.publication;
    if (!rentalPlace) {
      throw new NotFoundException(
        'Rental Place does not exists, not able to Update',
      );
    }
    /*
    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      throw new UserNotAllowOrOwnerException();
    }
    */
    // delete pass address and rates
    if (rentalPlace.address) {
      const addressData = newRentalPlaceData as unknown as ICreatePublication;
      const addressInformation: UpdateAddressDto = {
        _id: (rentalPlace.address as UpdateAddressDto)._id as string,
        street: addressData.street,
        state: addressData.state,
        city: addressData.city,
        cologne: addressData.neighborhood,
        stateCode: addressData.stateCode,
        reference: addressData.reference,
        zone: addressData.zone,
        countryCode: 'MX',
        crossStreet: '',
        extNumber: '123',
        intNumber: '',
      };
      await this.addressService.update(
        addressInformation._id,
        addressInformation,
      );
    }

    await this.likeService.deleteByPlaceId(id);
    if (newRentalPlaceData.likes) {
      const likesAdded = await this.likeService.createMany(
        newRentalPlaceData.likes,
      );

      newRentalPlaceData.likes.push(likesAdded as unknown as CreateLikeDto);
    }

    const { images, ...placeNoImages } = newRentalPlaceData;
    const oldImages = rentalPlace?.images;
    if (rentalPlace?.images && images) {
      rentalPlace.images = images;
    }
    console.log('====================================');
    console.log(images, oldImages, rentalPlace?.images, 'IMAGES_TO_REMOVE');
    console.log('====================================');
    await this.rentalPlaceService.update(id, {
      ...rentalPlace.toObject(),
      ...placeNoImages,
      creationDate: placeNoImages?.creationDate || new Date(),
    } as UpdateRentalPlaceDto);

    const imagesToRemove = rentalPlace?.images?.filter(
      (img) =>
        !images.find(
          (saved) =>
            (saved as unknown as { _id: string })?._id ===
            (img as unknown as { _id: string })?._id,
        ),
    );
    try {
      this.rentalPlaceService.removeFiles(imagesToRemove || []);
    } catch (err) {
      console.error(err, 'ERROR_DELETING_IMAGES');
    }
    const imagesIds = (imagesToRemove || []).map(
      (imgOld) =>
        ((imgOld as unknown as { _id: string })?._id as string) || imgOld.id,
    );
    if (imagesIds?.length) {
      await this.imageService.deleteById(imagesIds as string[]);
    }

    return rentalPlace;
  }

  @ApiOkResponse({
    description: 'Delete a rental place by id',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({ description: 'Rental place does not exists' })
  @Delete(':id')
  @Auth('delete:rental-place')
  async remove(
    @Param('id') id: string,
    // @Req() req: any,
  ) {
    const rentalPlace = await this.rentalPlaceService.findById(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');

    /*
    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      throw new UserNotAllowOrOwnerException();
    }
    */
    // delete from disk last images
    this.rentalPlaceService.removeFiles(rentalPlace.images || []);
    // remove on mongo
    this.imageService.deleteByPlaceId(id);
    this.addressService.deleteByPlaceId(
      (rentalPlace.address as UpdateAddressDto)._id ?? '',
    );
    this.likeService.deleteByPlaceId(id);
    this.commentService.deleteByPlaceId(id);
    const rentalPlaceDeleted = await this.rentalPlaceService.remove(id);

    return rentalPlaceDeleted;
  }

  async findRental(id: string) {
    const rentalPlace = await this.rentalPlaceService.findById(id);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
    return rentalPlace;
  }

  async isAllowed(_owner: string, _user: any) {
    /*
    if (!this.userService.isUserAllowed(owner, user))
      throw new UserNotAllowOrOwnerException();
      */
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
  @Auth('upload-image:rental-place')
  async uploadFile(
    @Param('id') id: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    // @Req() req: any,
  ) {
    const fileNames = files?.map((file) => file.filename);
    console.log('====================================');
    console.log('FILE_NAMES');
    console.log('====================================');

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
    /*
    if (!this.userService.isUserAllowed(rentalPlace.owner, req.user)) {
      this.rentalPlaceService.removeFiles(files);
      throw new UserNotAllowOrOwnerException();
    }
    */

    /*
    this.rentalPlaceService.removeFiles(rentalPlace.images || []);
    const imagesIds = rentalPlace?.images?.map(
      (imgOld) => (imgOld as unknown as { _id: string })?._id as string,
    );
    if (imagesIds?.length) {
      await this.imageService.deleteById(imagesIds);
    }
    */

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
        rentalPlace: id,
        placeId: id,
        owner: id,
      };
    });
    // save files in mongo
    const filesCreated = await this.imageService.createMany(filesToSave);
    const placeToUpdate = await this.rentalPlaceService.findById(id);
    console.log('====================================');
    console.log('PLACE)TO_UPDATE');
    console.log('====================================');
    if (filesCreated.length && placeToUpdate?.images) {
      console.log('====================================');
      console.log('uploading several images');
      console.log('====================================');
      placeToUpdate.images = [...placeToUpdate.images, ...filesCreated];
    }
    // attach them to the rental place
    await this.rentalPlaceService.update(
      id,
      placeToUpdate as unknown as UpdateRentalPlaceDto,
    );

    // updatedRentalPlace?.images?.push(...filesCreated);
    // updatedRentalPlace?.save();

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

  /// ///////////////////////////////////////////////
  // Comments
  /// ///////////////////////////////////////////////
  @ApiOkResponse({
    description: 'adds a comment for the rental place',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('Add comments from the user for the publication')
  @Post('/:id/comments')
  @Auth('create:rental-place')
  async addCommentToPublication(
    @Req() req: Request & { user: IAuth0User },
    @Body() comment: { comment: string },
    @Param('id') id: string,
  ) {
    const user = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    const publication = await this.findRental(id);

    if (!publication)
      throw new NotFoundException('Rental place does not exists');

    if (!user) throw new NotFoundException('User does not exists');

    return this.commentService.createComment({
      comment: comment.comment,
      ownerId: user._id,
      placeId: publication._id,
    });
  }

  @ApiOkResponse({
    description: 'updates a comment from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('updates a comment from the user for the publication')
  @Put('/:id/comments/:commentId')
  @Auth('update:rental-place')
  async updateCommentFromPublication(
    @Req() req: Request & { user: IAuth0User },
    @Body() comment: { comment: string },
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ) {
    const user = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    const publication = await this.findRental(id);

    if (!publication)
      throw new NotFoundException('Rental place does not exists');

    if (!user) throw new NotFoundException('User does not exists');

    return this.commentService.updateCommentById(commentId, {
      comment: comment.comment,
      ownerId: user._id,
      placeId: publication._id,
    });
  }

  @ApiOkResponse({
    description: 'deletes a comment from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('deletes a comment from the user for the publication')
  @Delete('/:id/comments/:commentId')
  @Auth('delete:rental-place')
  async deleteCommentById(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ) {
    const commentToDelete = await this.commentService.getByRentalPlaceId(id);
    if (commentToDelete) {
      await this.commentService.deleteById(commentId);
    }

    return commentToDelete;
  }

  @ApiOkResponse({
    description: 'gets a comments list from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('gets a comments list from the publication')
  @Get('/:id/comments')
  async getCommentsFromPublication(@Param('id') id: string) {
    return this.commentService.getByRentalPlaceId(id);
  }

  @ApiOkResponse({
    description: 'gets a comment from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('gets a comment from the user for the publication')
  @Get('/:id/comments/:commentId')
  async getCommentByIdFromPublication(@Param('commentId') commentId: string) {
    this.commentService.getByCommentId(commentId);
  }

  /// ///////////////////////////////////////////////
  // Likes
  /// ///////////////////////////////////////////////
  @ApiOkResponse({
    description: 'adds a like for the rental place',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('Add like from the user for the publication')
  @Post('/:id/likes')
  @Auth('create:rental-place')
  async addLikeToPublication(
    @Req() req: Request & { user: IAuth0User },
    @Body() like: { like: boolean },
    @Param('id') id: string,
  ) {
    const user = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    const publication = await this.findRental(id);

    if (!publication)
      throw new NotFoundException('Rental place does not exists');

    if (!user) throw new NotFoundException('User does not exists');

    return this.likeService.create({
      liked: like.like,
      ownerId: user._id,
      placeId: publication._id,
      type: ERateType.PLACE,
    });
  }

  @ApiOkResponse({
    description: 'updates a like from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('updates a like from the user for the publication')
  @Put('/:id/likes/:likeId')
  @Auth('update:rental-place')
  async updateLikeFromPublication(
    @Req() req: Request & { user: IAuth0User },
    @Body() like: { like: boolean },
    @Param('id') id: string,
    @Param('commentId') likeId: string,
  ) {
    const user = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    const publication = await this.findRental(id);

    if (!publication)
      throw new NotFoundException('Rental place does not exists');

    if (!user) throw new NotFoundException('User does not exists');

    return this.likeService.updateLikeById(likeId, {
      _id: likeId,
      liked: like.like || false,
      ownerId: user._id,
      placeId: publication._id,
      type: ERateType.PLACE,
    });
  }

  @ApiOkResponse({
    description: 'deletes a like from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('deletes a like from the user for the publication')
  @Delete('/:id/likes/:likeId')
  @Auth('delete:rental-place')
  async deletelikeById(
    @Param('id') id: string,
    @Param('likeId') likeId: string,
  ) {
    const likeToDelete = await this.likeService.getByRentalPlaceId(id);
    if (likeToDelete) {
      await this.commentService.deleteById(likeId);
    }

    return likeToDelete;
  }

  @ApiOkResponse({
    description: 'gets a likes list from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('gets a comments list from the publication')
  @Get('/:id/likes')
  async getLikesFromPublication(@Param('id') id: string) {
    return this.likeService.getByRentalPlaceId(id);
  }

  @ApiOkResponse({
    description: 'gets a like from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('gets a like from the user for the publication')
  @Get('/:id/likes/likesme')
  @Auth('read:rental-place')
  async getLikedMePublication(
    @Param('id') placeId: string,
    @Req() req: Request & { user: IAuth0User },
  ) {
    const user = await this.userService.getOrCreateUserByEmail({
      email: req.user.email,
      firstName: req.user.name.toLowerCase(),
      lastName: (req.user?.family_name || '').toLowerCase(),
      image: req.user.picture,
      type: EUserType.OWNER,
      birthDate: req.user.updated_at,
      phoneNumber: '0',
    });
    const publication = await this.findRental(placeId);

    if (!publication)
      throw new NotFoundException('Rental place does not exists');

    if (!user) throw new NotFoundException('User does not exists');

    return this.likeService.getByOwnerIdAndPlaceId(placeId, user?._id);
  }

  @ApiOkResponse({
    description: 'gets a like from a publication',
    type: RentalPlace,
  })
  @ApiNotFoundResponse({
    description: 'Rental place does not exists, not able to Update',
  })
  @ApiTags('gets a like from the user for the publication')
  @Get('/:id/likes/:likeId')
  async getLikeByIdFromPublication(@Param('likeId') likeId: string) {
    this.likeService.getByLikeId(likeId);
  }
}
