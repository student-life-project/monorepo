const LinkHome = { link: '/', text: 'Student Life' };
const LinkHelp = { link: '/help', text: 'Ayuda' };
const LinkProfile = { link: '/profile', text: 'Perfil' };
const LinkAdmin = { link: '/profile/admin', text: 'Administrador' };
const LinkPublication = {
  link: '/profile/publications',
  text: 'Publicaciones',
};

const ItemsHelp = [LinkHome, LinkHelp];
export const ItemsAdmin = [LinkProfile, LinkAdmin];
export const ItemsPublications = [LinkProfile, LinkPublication];

export const ItemsCommunity = [
  LinkHome,
  { link: '/community', text: 'Comunidad' },
];

export const ItemsInfoPublish = [
  ...ItemsHelp,
  { link: '/help/information-publish', text: 'Anunciar un alojamiento' },
];

export const ItemsInfoRentals = [
  ...ItemsHelp,
  { link: '/help/information-rentals', text: 'Busco un alojamiento' },
];

export const ItemsPrivacy = [
  ...ItemsHelp,
  { link: '/help/privacy', text: 'Política de privacidad' },
];

export const ItemsTermAndCond = [
  ...ItemsHelp,
  { link: '/help/terms-and-conditions', text: 'Términos y condiciones' },
];

export const ItemsPublicationDetails = [
  ...ItemsPublications,
  {
    link: '/profile/publications/details',
    text: 'Detalles de la publiación',
  },
];

export const ItemsPublicationDetailsAdmin = [
  ...ItemsAdmin,
  {
    link: '/profile/admin/publication-details',
    text: 'Detalles de la publiación',
  },
];

export const ItemsReportDetails = [
  ...ItemsAdmin,
  { link: '/profile/admin/report-details', text: 'Detalles del reporte' },
];

export const ItemsUserDetails = [
  ...ItemsAdmin,
  { link: '/profile/admin/user-details', text: 'Detalles del usuario' },
];
