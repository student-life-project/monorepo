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
