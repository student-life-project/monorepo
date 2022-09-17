/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// TODO: ELIMINAR
import { IImage, IRentalPlace } from '@student_life/common';

export const dataUsers = [
  {
    id: 1,
    name: 'Alfredo Carreón Urbano',
    email: 'alfredo11cu@gmail.com',
    role: 0,
    status: true,
  },
  {
    id: 2,
    name: 'Fernanda Hernandez',
    email: 'fer@hotmail.com',
    role: 1,
    status: false,
  },
  {
    id: 3,
    name: 'Victor Reyes',
    email: 'victor@gmail.com',
    role: 2,
    status: true,
  },
  {
    id: 4,
    name: 'Angelica Victoria',
    email: 'angie@gmail.com',
    role: 2,
    status: true,
  },
  {
    id: 5,
    name: 'karla Valdos',
    email: 'kvaldos@gmail.com',
    role: 1,
    status: false,
  },
];

export const dataPublications = [
  {
    id: 1,
    title: 'Casa cerca de CUCEI',
    price: 700,
    available: true,
    approved: true,
  },
  {
    id: 2,
    title: 'Depatamento cerca de CUCEI',
    price: 800,
    available: true,
    approved: true,
  },
  {
    id: 3,
    title: 'Cuarto privado cerca de CUCEI',
    price: 1000,
    available: false,
    approved: true,
  },
  {
    id: 4,
    title: 'Cuarto compartido cerca de CUCEI',
    price: 1200,
    available: true,
    approved: true,
  },
  {
    id: 5,
    title: 'Depatamento cerca de CUCEI',
    price: 1500,
    available: true,
    approved: false,
  },
  {
    id: 6,
    title: 'Cuarto cerca de CUCEI',
    price: 600,
    available: true,
    approved: false,
  },
  {
    id: 7,
    title: 'Piso cerca de CUCEI',
    price: 950,
    available: false,
  },
  { id: 8, title: 'Casa cerca de CUCEI', price: 200, available: true },
  {
    id: 9,
    title: 'Casa cerca de CUCEI',
    price: 200,
    available: false,
    approved: true,
  },
  {
    id: 10,
    title: 'Cuarto privado cerca de CUCEI',
    price: 120,
    available: true,
    approved: true,
  },
  {
    id: 11,
    title: 'Casa cerca de CUCEI',
    price: 640,
    available: false,
    approved: true,
  },
  {
    id: 12,
    title: 'Depatamento cerca de CUCEI',
    price: 320,
    available: true,
    approved: false,
  },
  {
    id: 13,
    title: 'Cuarto privado cerca de CUCEI',
    price: 700,
    available: false,
  },
  {
    id: 14,
    title: 'Cuarto compartido',
    price: 840,
    available: true,
    approved: true,
  },
  {
    id: 15,
    title: 'Depatamento cerca de CUCEI',
    price: 500,
    available: true,
    approved: false,
  },
  {
    id: 16,
    title: 'Cuarto cerca de CUCEI',
    price: 250,
    available: false,
    approved: false,
  },
  { id: 17, title: 'Piso cerca de CUCEI', price: 700, available: true },
  {
    id: 18,
    title: 'Casa cerca de CUCEI',
    price: 300,
    available: false,
    approved: true,
  },
  {
    id: 19,
    title: 'Casa cerca de CUCEI',
    price: 2000,
    available: true,
    approved: true,
  },
  {
    id: 20,
    title: 'Cuarto privado cerca de CUCEI',
    price: 500,
    available: true,
    approved: false,
  },
];

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
    item.id === id ? { ...item, status: !item.status } : item,
  );

  return res;
};

export const dataReport = (id) => {
  return dataReports.filter((item) => item.id === Number(id))[0];
};
