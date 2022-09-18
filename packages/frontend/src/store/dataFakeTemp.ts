/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// TODO: ELIMINAR
import { IImage, IRentalPlace } from '@student_life/common';

// * MANAGE USERS
// =============================================================================

export const dataUsers = [
  {
    id: 1,
    role: 0,
    status: true,
    firstName: 'Alfredo',
    lastName: 'Carreón Urbano',
    fullName: 'Alfredo Carreón Urbano',
    userImage: '/images/avatar.png',
    email: 'alfredo11cu@gmail.com',
    phoneNumber: '3315448430',
    birthDate: '1997-02-11',
    aboutMe:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam!',
  },
  {
    id: 2,
    role: 1,
    status: false,
    firstName: 'Fernanda',
    lastName: 'Hernandez',
    fullName: 'Fernanda Hernandez',
    userImage: '/images/avatar.png',
    email: 'fer@hotmail.com',
    phoneNumber: '3315212412',
    birthDate: '1997-03-10',
    aboutMe:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam!',
  },
  {
    id: 3,
    role: 2,
    status: true,
    firstName: 'Victor',
    lastName: 'Reyes',
    fullName: 'Victor Reyes',
    userImage: '/images/avatar.png',
    email: 'victor@gmail.com',
    phoneNumber: '3315269411',
    birthDate: '1994-05-18',
    aboutMe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 4,
    role: 2,
    status: true,
    firstName: 'Angelica',
    lastName: 'Victoria',
    fullName: 'Angelica Victoria',
    userImage: '/images/avatar.png',
    email: 'angie@gmail.com',
    phoneNumber: '3317776312',
    birthDate: '1999-07-02',
    aboutMe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 5,
    role: 1,
    status: false,
    firstName: 'Karla',
    lastName: 'Valdos',
    fullName: 'karla Valdos',
    userImage: '/images/avatar.png',
    email: 'kvaldos@gmail.com',
    phoneNumber: '',
    birthDate: '',
    aboutMe: '',
  },
];

export const dataUserSearch = (text) => {
  const res = text.toLowerCase()
    ? dataUsers.filter(
        (item) => item.fullName.toLowerCase().indexOf(text.toLowerCase()) > -1,
      )
    : dataUsers;

  return res;
};

export const dataUsersChangeStatus = (id) => {
  const res = dataUsers.map((item) =>
    item.id === Number(id) ? { ...item, status: !item.status } : item,
  );

  return res;
};

export const dataUser = (id) => {
  return dataUsers.filter((item) => item.id === Number(id))[0];
};

// * MANAGE PUBLICATIONS
// =============================================================================

export const dataPublications = [
  {
    id: 1,
    owner: 'Alfredo Carreón Urbano',
    date: '2022-03-11',
    gender: 'Hombre',
    availability: true,
    approved: true,
    title: 'Casa cerca de CUCEI',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '3500',
    street: 'Pallas #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: '18 de marzo',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44960',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: [
      'Baño',
      'Elevador',
      'Servicios públicos',
      'Aire acondicionado',
      'Wi-Fi incluido',
    ],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-2',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-3',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-4',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-5',
      },
    ],
  },
  {
    id: 2,
    owner: 'Carlos Alberto Medina Vega',
    date: '2022-03-11',
    gender: 'Hombre',
    availability: true,
    approved: false,
    title: 'Depatamento cerca de CUCEA',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '5500',
    street: 'Lomas de polanco #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: 'Lomas de polanco',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44361',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: ['Baño', 'Elevador', 'Wi-Fi incluido'],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
    ],
  },
  {
    id: 3,
    owner: 'Karen Villalobos',
    date: '2022-03-11',
    gender: 'Hombre',
    availability: false,
    approved: true,
    title: 'Cuarto privado cerca de CUCS',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '1000',
    street: 'Lomas de polanco #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: 'Lomas de polanco',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44361',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: ['Baño', 'Elevador', 'Wi-Fi incluido'],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-2',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-3',
      },
    ],
  },
];

export const dataPublicationSearch = (text) => {
  const res = text.toLowerCase()
    ? dataPublications.filter(
        (item) => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
      )
    : dataPublications;

  return res;
};

export const dataPublicationChangeApproved = (id) => {
  const res = dataPublications.map((item) =>
    item.id === Number(id) ? { ...item, approved: !item.approved } : item,
  );

  return res;
};

export const dataPublication = (id) => {
  return dataPublications.filter((item) => item.id === Number(id))[0];
};

// * MANAGE REPORTS
// =============================================================================

export const dataReports = [
  {
    id: 1,
    type: 'Usuario',
    to: 'Erick Mejia Blanco',
    from: 'Alfredo Carreón Urbano',
    description: 'Es información falsa',
    reason: 'Es irrespetuoso u ofensivo (Incita al odio)',
    createdAt: '2021-03-12',
    status: true,
  },
  {
    id: 2,
    type: 'Publicación',
    to: 'Casa por CUCEI',
    from: 'Juan Martinez Lora',
    description: 'Todo es una mentira',
    reason: 'No es un alojamiento real',
    createdAt: '2021-10-07',
    status: true,
  },
  {
    id: 3,
    type: 'Usuario',
    to: 'Cesar Armando Lopez',
    from: 'Marlena Hernandez Chavez',
    description: 'Me falto al respecto',
    reason: 'Comportamiento inapropiado',
    createdAt: '2021-12-09',
    status: false,
  },
  {
    id: 4,
    type: 'Publicación',
    to: 'Departamento cerca de CUCEA',
    from: 'Samantha Rivera',
    description: 'La dirección es incorrecta',
    reason: 'Es impreciso o incorrecto',
    createdAt: '2022-02-14',
    status: false,
  },
  {
    id: 5,
    type: 'Publicación',
    to: 'Departamento cerca de CUCS',
    from: 'Ana Valencia',
    description: 'Es una publicación erronea',
    reason: 'Es una estafa',
    createdAt: '2022-05-22',
    status: true,
  },
];

export const dataReportsSearch = (text) => {
  const res = text.toLowerCase()
    ? dataReports.filter(
        (item) =>
          item.description.toLowerCase().indexOf(text.toLowerCase()) > -1,
      )
    : dataReports;

  return res;
};

export const dataReportsChangeStatus = (id) => {
  const res = dataReports.map((item) =>
    item.id === Number(id) ? { ...item, status: !item.status } : item,
  );

  return res;
};

export const dataReport = (id) => {
  return dataReports.filter((item) => item.id === Number(id))[0];
};

// * PUBLICATIONS
// =============================================================================

export const dataMyPublications = [
  {
    id: 1,
    owner: 'Alfredo Carreón Urbano',
    date: '2022-03-11',
    gender: 'Hombre',
    availability: true,
    approved: true,
    title: 'Casa cerca de CUCEI',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '1500',
    street: 'Pallas #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: '18 de marzo',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44960',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: [
      'Baño',
      'Elevador',
      'Servicios públicos',
      'Aire acondicionado',
      'Wi-Fi incluido',
    ],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-2',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-3',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-4',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-5',
      },
    ],
  },
  {
    id: 2,
    owner: 'Alfredo Carreón Urbano',
    date: '2022-07-11',
    gender: 'Hombre',
    availability: true,
    approved: true,
    title: 'Departamento cerca de CUCEA',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '3500',
    street: 'Pallas #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: '18 de marzo',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44960',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: [
      'Baño',
      'Elevador',
      'Servicios públicos',
      'Aire acondicionado',
      'Wi-Fi incluido',
    ],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-2',
      },
    ],
  },
  {
    id: 3,
    owner: 'Alfredo Carreón Urbano',
    date: '2022-08-07',
    gender: 'Hombre',
    availability: true,
    approved: true,
    title: 'Cuarto privado cerca de CUCS',
    reason: 'Quiero rentar',
    typeSpace: 'Cuarto privado',
    price: '4500',
    street: 'Pallas #1523 A',
    state: 'Jalisco',
    city: 'Guadalajara',
    neighborhood: '18 de marzo',
    reference:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    stateCode: '44960',
    rentalPlace:
      'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
    services: [
      'Baño',
      'Elevador',
      'Servicios públicos',
      'Aire acondicionado',
      'Wi-Fi incluido',
    ],
    rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
    security: [
      'Alarma de incendios',
      'Salidas de emergencia',
      'Señalamientos de seguridad',
    ],
    images: [
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-1',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-2',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-3',
      },
      {
        url: '/images/example_home.jpg',
        name: 'img-home-4',
      },
      {
        url: '/images/example_home_2.jpg',
        name: 'img-home-5',
      },
    ],
  },
];

export const dataMyPublicationSearch = (text) => {
  const res = text.toLowerCase()
    ? dataMyPublications.filter(
        (item) => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1,
      )
    : dataMyPublications;

  return res;
};

export const dataMyPublicationChangeAvailability = (id) => {
  const res = dataMyPublications.map((item) =>
    item.id === Number(id)
      ? { ...item, availability: !item.availability }
      : item,
  );

  return res;
};

export const dataMyPublication = (id) => {
  return dataMyPublications.filter((item) => item.id === Number(id))[0];
};

// =============================================================================

export const dataRentalPlaces = (limit): IRentalPlace[] =>
  [
    {
      id: '1',
      title: 'Primera',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 10,
    } as IRentalPlace,
    {
      id: '2',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '3',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 1230,
    } as IRentalPlace,
    {
      id: '4',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 2550,
    } as IRentalPlace,
    {
      id: '5',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '6',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 1500,
    } as IRentalPlace,
    {
      id: '7',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 147,
    } as IRentalPlace,
    {
      id: '8',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '9',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 29,
    } as IRentalPlace,
    {
      id: '10',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 14,
    } as IRentalPlace,
    {
      id: '11',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '12',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 0,
    } as IRentalPlace,
    {
      id: '13',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 20,
    } as IRentalPlace,
    {
      id: '14',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '15',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 0,
    } as IRentalPlace,
    {
      id: '16',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 1349,
      likes: 50,
    } as IRentalPlace,
    {
      id: '17',
      title: 'Comoda casa para descanso en Club de Golf Tequis',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 50.25,
    } as IRentalPlace,
    {
      id: '18',
      title: 'Ultima',
      images: [{ url: '/images/example_home.jpg' } as IImage], // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
      price: 120.5,
      likes: 100,
    } as IRentalPlace,
  ].slice(0, limit);

export const dataComments = [
  {
    id: 1,
    userId: 11,
    name: 'Alfredo Carreón Urbano',
    userImage: '/images/avatar.png',
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
    date: '12 de mayo 2022',
  },
  {
    id: 2,
    userId: 18,
    name: 'Erick Mejia Blanco',
    userImage: '/images/avatar.png',
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
    date: '11 de mayo 2022',
  },
];

export const dataComment = (id) =>
  [
    {
      id: 1,
      userId: 11,
      name: 'Alfredo Carreón Urbano',
      userImage: '/images/avatar.png',
      comment:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
      date: '12 de mayo 2022',
    },
    {
      id: 2,
      userId: 18,
      name: 'Erick Mejia Blanco',
      userImage: '/images/avatar.png',
      comment:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
      date: '11 de mayo 2022',
    },
  ].filter((item) => item.id === id)[0];

// =============================================================================
