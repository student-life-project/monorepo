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
// import { ValidationError } from 'class-validator';
import { Response } from 'express';
import { createReadStream } from 'fs';

import { AddressService } from '../address/address.service';
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
import { UserNotAllowOrOwnerException } from '../helper/exceptions/user-not-allowed-to-update-data';
import { ImageService } from '../image/image.service';
import { CreateLikeDto } from '../like/dto/create-like.dto';
import { LikeService } from '../like/like.service';
import { UserService } from '../user/user.service';
import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { UpdateRentalPlaceDto } from './dto/update-rental-place.dto';
import { RentalPlace } from './rental-place.schema';
import { RentalPlaceService } from './rental-place.service';
// import { PaginationMoogooseService } from '../pagination/Pagination.service';

/* eslint no-underscore-dangle: 0 */
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
    @Body() createRentalPlaceDto: CreateRentalPlaceDto,
    @Req() req: any,
  ) {
    // // create address
    const addressId = await this.addressService.create(
      createRentalPlaceDto.address,
    );

    // // create rentalPlace
    return this.rentalPlaceService.create({
      ...createRentalPlaceDto,
      owner: req.user.sub,
      address: addressId,
    });
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
  findAll(@Query() queries: any) {
    // TODO make sure retrive all need info rentals GET check if made TOP RATE AND MOST COMMENTED limit to 5 ¡¡DISPONIBLES!! (si todos igual random entre los top on different request
    // console.log(queries);
    const PAGINATOR_PAGE = 1;
    const PAGINATOR_LIMIT = 10;
    const DEFAULT_SORT = 'desc';

    let query = {};
    if (queries.price) {
      query = this.rentalPlaceService.priceFilter(query, queries.price);
    }
    // console.log('query', query);

    // if(queries.)

    const paginate = {
      page: queries.page ?? PAGINATOR_PAGE,
      limit: queries.limit ?? PAGINATOR_LIMIT,
    };

    const sort = queries.sort
      ? this.rentalPlaceService.sort(queries.sort)
      : DEFAULT_SORT;

    // return this.rentalPlaceService.findAll();
    return this.rentalPlaceService.find(query, sort, paginate);
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
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
    const likesCount = await this.likeService.count(id);
    return { ...rentalPlace, likesCount };
  }

  @ApiNotFoundResponse({
    description: 'Rental place does not exists',
    type: RentalPlace,
  })
  @ApiOkResponse({ description: 'Get a rental place by id' })
  @Get(':id')
  // @Auth('read:rental-place')
  // TODO fix
  async findByOwner(@Req() req: any) {
    // TODO make sure retrive all need info rentals/:id GET
    const rentalPlace = await this.rentalPlaceService.findById(req.user.sub);
    if (!rentalPlace)
      throw new NotFoundException('Rental place does not exists');
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
  @Auth('update:rental-place')
  async update(
    @Param('id') id: string,
    @Body() updateRentalPlaceDto: UpdateRentalPlaceDto,
    @Req() req: any,
  ) {
    const rentalPlace = await this.rentalPlaceService.findById(id);
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
  @Auth('delete:rental-place')
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
  @Auth('upload-image:rental-place')
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
    } as UpdateRentalPlaceDto);

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
