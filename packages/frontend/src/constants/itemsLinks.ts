const LinkHome = { link: '/', text: 'Student Life' };
const LinkHelp = { link: '/help', text: 'Ayuda' };
const LinkProfile = { link: '/profile', text: 'Perfil' };
const LinkAdmin = { link: '/profile/admin', text: 'Administrador' };

export const ItemsCommunity = [
  LinkHome,
  { link: '/community', text: 'Comunidad' },
];

export const ItemsInfoPublish = [
  LinkHome,
  LinkHelp,
  { link: '/help/information-publish', text: 'Anunciar un alojamiento' },
];

export const ItemsInfoRentals = [
  LinkHome,
  LinkHelp,
  { link: '/help/information-rentals', text: 'Busco un alojamiento' },
];

export const ItemsPrivacy = [
  LinkHome,
  LinkHelp,
  { link: '/help/privacy', text: 'Política de privacidad' },
];

export const ItemsTermAndCond = [
  LinkHome,
  LinkHelp,
  { link: '/help/terms-and-conditions', text: 'Términos y condiciones' },
];

export const ItemsMessages = [
  LinkProfile,
  { link: '/profile/messages', text: 'Mensajes' },
];

export const ItemsAdmin = [LinkProfile, LinkAdmin];

export const ItemsUserDetails = [
  LinkProfile,
  LinkAdmin,
  { link: '/profile/admin/user-details', text: 'Detalles del usuario' },
];

export const ItemsPublications = [
  LinkProfile,
  { link: '/profile/publications', text: 'Publicaciones' },
];
