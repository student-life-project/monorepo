/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// * MANAGE USERS
// =============================================================================

export const dataUsers = [
  {
    _id: 1,
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
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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

export const dataUsersChangeStatus = (_id) => {
  const res = dataUsers.map((item) =>
    item._id === Number(_id) ? { ...item, status: !item.status } : item,
  );

  return res;
};

export const dataUser = (_id) => {
  return dataUsers.filter((item) => item._id === Number(_id))[0];
};

// * MANAGE PUBLICATIONS
// =============================================================================

export const dataPublications = [
  {
    _id: 1,
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
    _id: 2,
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
    _id: 3,
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

export const dataPublicationChangeApproved = (_id) => {
  const res = dataPublications.map((item) =>
    item._id === Number(_id) ? { ...item, approved: !item.approved } : item,
  );

  return res;
};

export const dataPublication = (_id) => {
  return dataPublications.filter((item) => item._id === Number(_id))[0];
};

// * MANAGE REPORTS
// =============================================================================

export const dataReports = [
  {
    _id: 1,
    type: 'Usuario',
    to: 'Erick Mejia Blanco',
    from: 'Alfredo Carreón Urbano',
    description: 'Es información falsa',
    reason: 'Es irrespetuoso u ofensivo (Incita al odio)',
    createdAt: '2021-03-12',
    status: true,
  },
  {
    _id: 2,
    type: 'Publicación',
    to: 'Casa por CUCEI',
    from: 'Juan Martinez Lora',
    description: 'Todo es una mentira',
    reason: 'No es un alojamiento real',
    createdAt: '2021-10-07',
    status: true,
  },
  {
    _id: 3,
    type: 'Usuario',
    to: 'Cesar Armando Lopez',
    from: 'Marlena Hernandez Chavez',
    description: 'Me falto al respecto',
    reason: 'Comportamiento inapropiado',
    createdAt: '2021-12-09',
    status: false,
  },
  {
    _id: 4,
    type: 'Publicación',
    to: 'Departamento cerca de CUCEA',
    from: 'Samantha Rivera',
    description: 'La dirección es incorrecta',
    reason: 'Es impreciso o incorrecto',
    createdAt: '2022-02-14',
    status: false,
  },
  {
    _id: 5,
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

export const dataReportsChangeStatus = (_id) => {
  const res = dataReports.map((item) =>
    item._id === Number(_id) ? { ...item, status: !item.status } : item,
  );

  return res;
};

export const dataReport = (_id) => {
  return dataReports.filter((item) => item._id === Number(_id))[0];
};

// =============================================================================
