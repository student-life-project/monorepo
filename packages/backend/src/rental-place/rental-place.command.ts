// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker/locale/es_MX';
import { Injectable } from '@nestjs/common';
import { ERateType } from '@student_life/common';
import { Command, Option } from 'nestjs-command';

import { Address } from '../address/address.schema';
import { AddressService } from '../address/address.service';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CommentService } from '../comment/comment.service';
import { CreateCommentDto } from '../comment/dto/create-comment.dto';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  States,
  TypeSpace,
} from '../helper/types';
import { Image } from '../image/image.schema';
import { CreateLikeDto } from '../like/dto/create-like.dto';
import { LikeService } from '../like/like.service';
import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
// import { CreateRentalPlaceDto } from './dto/create-rental-place.dto';
import { RentalPlace } from './rental-place.schema';
import { RentalPlaceService } from './rental-place.service';

@Injectable()
export class RentalPlaceCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly addressService: AddressService,
    private readonly rentalPlaceService: RentalPlaceService,
    private readonly commentService: CommentService,
    private readonly likeService: LikeService,
  ) {}

  @Command({
    command: 'create:seed',
    describe: 'create rentalplaces',
  })
  async create(
    @Option({
      name: 'refresh',
      describe: 'refresh data base before to seed',
      type: 'boolean',
      alias: 'r',
      required: false,
    })
    refresh: boolean,
  ) {
    if (refresh) {
      this.refresh();
    }
    const addreess: CreateAddressDto[] = [];
    Array.from({ length: 100 }).forEach(() => {
      addreess.push(this.createRandomAddress());
    });

    const createdAddresses = await this.addressService.createMany(addreess);
    const rentalPlacess = createdAddresses.map((address) => {
      return this.createRandomRentalPlace(address);
    });

    const createdRentals = await this.rentalPlaceService.createMany(
      rentalPlacess,
    );

    const rentalProperties = [...createdRentals]
      .sort(() => 0.5 - Math.random())
      .slice(0, 85)
      .map((rental) => {
        const comments: CreateCommentDto[] = [];
        const likes: CreateLikeDto[] = [];
        Array.from({ length: Math.floor(Math.random() * 15) }).forEach(() => {
          comments.push(
            this.createRandomComments(
              rental as unknown as CreateRentalPlaceDto,
            ),
          );
        });
        Array.from({ length: Math.floor(Math.random() * 15) }).forEach(() => {
          likes.push(this.createRandomLikes(rental));
        });
        return {
          comments,
          likes,
        };
      });

    let comments: CreateCommentDto[] = [];
    let likes: CreateLikeDto[] = [];

    rentalProperties.forEach((e) => {
      comments = [...e.comments];
      likes = [...e.likes];
    });

    const createdComments = await this.commentService.createMany(comments);
    // const createdLikes = await this.likeService.createMany(likes);
    await this.likeService.createMany(likes);

    const updateCommentPromises = createdComments.map(async (e) => {
      if (e.placeId) {
        const place = await this.rentalPlaceService.findById(e.placeId);
        place?.comments?.push(e);
        place?.save();
      }
    });

    await Promise.all(updateCommentPromises);
  }

  refresh() {
    // Todo Implement DB remove({})
    return true;
  }

  createRandomImages(): Image {
    const longPath = faker.system.filePath();
    const pathStrSplit = longPath.split('/');
    const fileName = pathStrSplit.pop() ?? 'test_file';
    const directoryName = pathStrSplit.join('/');
    return {
      filename: fileName,
      location: directoryName,
      mimetype: faker.system.mimeType(),
      fullpath: longPath,
      size: parseInt(faker.random.numeric(80), 10),
    };
  }

  createRandomLikes(rental: RentalPlace): CreateLikeDto {
    return {
      type: ERateType.PLACE,
      placeId: rental,
      ownerId: faker.random.numeric()
        ? 'auth0|621ae78a2fda510070202476'
        : faker.datatype.uuid(),
    };
  }

  createRandomComments(rental: CreateRentalPlaceDto): CreateCommentDto {
    return {
      placeId: rental,
      ownerId: faker.random.numeric()
        ? 'auth0|621ae78a2fda510070202476'
        : faker.datatype.uuid(),
      comment: faker.lorem.sentences(),
    };
  }

  createRandomRentalPlace(addreess: Address): CreateRentalPlaceDto {
    return {
      owner: faker.random.numeric()
        ? 'auth0|621ae78a2fda510070202476'
        : faker.datatype.uuid(),
      title: faker.lorem.text(),
      reason: faker.helpers.arrayElement([
        Reason['Quiero rentar'],
        Reason['Busco roomie'],
      ]),
      typeSpace: faker.helpers.arrayElement([
        TypeSpace['Cuarto compartido'],
        TypeSpace['Cuarto privado'],
        TypeSpace['Lugar completo'],
        TypeSpace.Otro,
      ]),
      gender: faker.helpers.arrayElement([
        Gender.Hombre,
        Gender.Mujer,
        Gender['Non-binary'],
        Gender['Sin preferencia'],
      ]),
      price: faker.commerce.price(1000),
      availability: faker.datatype.boolean(),
      address: addreess,
      description: faker.lorem.paragraphs(),
      services: faker.helpers.arrayElements([
        Services.Baño,
        Services.Cocina,
        Services.Lavadora,
        Services.Elevador,
        Services.Amueblado,
        Services.Estacionamiento,
        Services['Con balcón o patio'],
        Services['Servicios públicos'],
        Services['Aire acondicionado'],
        Services['Área de estudio'],
        Services.TV,
        Services['Wi-Fi incluido'],
        Services['Se admiten mascotas'],
      ]),
      rules: faker.helpers.arrayElements([
        Rules['No fumar'],
        Rules['No mascotas'],
        Rules['No drogas'],
        Rules['No beber'],
        Rules['No Parejas'],
        Rules['No fiestas'],
        Rules['No invitados'],
      ]),
      security: faker.helpers.arrayElements([
        Security['Alarma de incendios'],
        Security['Alarma antirrobo'],
        Security.Cámaras,
        Security['Seguridad privada'],
        Security['Salidas de emergencia'],
        Security['Señalamientos de seguridad'],
        Security['Botiquín de primeros auxilios'],
        Security.Extintores,
      ]),
      approved: faker.datatype.boolean(),
    } as CreateRentalPlaceDto;
  }

  createRandomAddress(): CreateAddressDto {
    return {
      street: faker.address.streetName(),
      extNumber: faker.address.buildingNumber(),
      intNumber: faker.address.secondaryAddress(),
      crossStreet: `e/ ${faker.address.street()} y ${faker.address.street()}`,
      state: States.Jalisco,
      city: faker.helpers.arrayElement([
        'Guadalajara',
        'Tonalá',
        'Zapopan',
        'San Pedro Tlaquepaque',
        'Tlajomulco de Zúñiga',
        'El Salto',
        'Ixtlahuacán de los Membrillos',
        'Juanacatlán',
        'Zapotlanejo',
        'Acatlán de Juárez',
        faker.address.city(),
      ]),
      stateCode: faker.address.zipCode(),
      countryCode: faker.random.numeric() ? 'MX' : faker.address.countryCode(),
      reference: faker.lorem.sentences(),
      cologne: faker.helpers.arrayElement([
        '18 de marzo',
        'Infonavit Rio Nilo',
      ]),
      country: faker.random.numeric() ? 'México' : faker.address.country(),
      location: {
        type: 'Point',
        coordinates: [
          parseFloat(faker.address.longitude()),
          parseFloat(faker.address.latitude()),
        ],
      },
      ownerId: faker.random.numeric()
        ? 'auth0|621ae78a2fda510070202476'
        : faker.datatype.uuid(),
    };
  }
}
