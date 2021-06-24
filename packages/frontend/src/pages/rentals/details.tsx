/* eslint-disable jsx-a11y/iframe-has-title */
// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  faAd,
  faBullhorn,
  faComment,
  faHome,
  faPhoneAlt,
  faSearch,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { FC, useState } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import RentalPlaceReport from '@/components/reports/RentalPlaceReport';
import UserReport from '@/components/reports/UserReport';

const ContentGallery = styled.section`
  ${xw`
    h-60
    grid
    mt-10
    gap-4
    w-full
    sm:h-96
    grid-cols-2
    grid-rows-2
  `}
`;

const Img = styled.img`
  ${xw`
    w-full
    h-full
    bg-gray-400
    object-cover
  `}
`;

const ButtonLink = styled.button`
  ${xw`
    flex
    text-left
    text-primary
    cursor-pointer
    hover:underline
  `}
`;

const Btn = styled.a`
  ${xw`
    flex
    px-5
    py-2.5
    text-sm
    font-bold
    text-white
    rounded-md
    bg-primary 
    focus:ring
    items-center
    duration-500
    items-center
    justify-center
    hover:opacity-75
    transition ease-in
    focus:outline-none
    focus:ring-offset-1
    focus:border-blue-300
  `}
`;

const data = {
  title: 'Hudson Heights',
  price: '885.00',
  reason: 'Busco roomie',
  typeSpace: 'Cuarto compartido',
  gender: 'Mujer',
  residents: 5,
  available: 'Disponible',
  images: [
    {
      url: '/images/example_home_2.jpg',
      name: 'img-home-1',
    },
    {
      url: '/images/example_home_2.jpg',
      name: 'img-home-2',
    },
    {
      url: '/images/example_home_2.jpg',
      name: 'img-home-3',
    },
  ],
  description:
    'Busco chica compañera de piso por tres meses! ¡Término corto! Mudanza: del 1 de julio al 30 de septiembre. $885 para mudarse. Servicios públicos y Wi-Fi incluidos. La habitación está sin amueblar, llena de luz, la sala está completamente amueblada con televisión, Roku, sofá, mesa de comedor, etc. mucho espacio de guardarropas. La lavandería está ubicada en el sótano del edificio, o tiene la opción de usar la lavandería automática en la esquina. El apartamento está ubicado a una cuadra del tren A ya pocos minutos a pie de la 1. Justo en frente del palacio unido, IHOP, Planet Finiteness, Blink. ¡Bloquee lejos de GWB! ¡Debe amar a las mascotas! (El atigrado pelirrojo más lindo Ron y el mejor chico Coby) Tengo 33 años, soy profesora de yoga y trabajo en un bar, en el centro de la ciudad. Requisitos: ninguna pareja debe amar a las mascotas.',
  services: [
    'Lavadora',
    'Elevador',
    'Con balcón o patio',
    'Wi-Fi incluido',
    'Tiene mascotas',
    'Servicios incluidos',
    'Aire acondicionado',
    'TV',
    'Amueblado',
    'Calefacción',
    'Baño privado',
  ],
  rules: [
    'No fumar',
    'No mascotas',
    'Mascotas OK',
    'No drogas',
    'No beber',
    'Parejas OK',
  ],
  zone:
    'El apartamento está ubicado a una cuadra del tren A ya pocos minutos a pie de la 1. Justo en frente del palacio unido, IHOP, Planet Finiteness, Blink. ¡Bloquee lejos de GWB!',
  location: {
    street: 'Casimiro Buena Vista',
    extNumber: '2345',
    intNumber: 'D',
    crossStreet: 'Ramirez Lopez y Mariana de las rosas',
    reference: 'Casa blanca con bálcon',
    stateCode: '44960',
    cologne: '18 de marzo',
    city: 'Guadalajara',
  },
};

const user = {
  userImage: '/images/avatar.png',
  firstName: 'User 1',
  lastName: 'Test Test',
  email: 'user@test.com',
  password: 'testtesttest',
  phoneNumber: '3315448430',
  birthDate: '1997-02-11',
};

const Details: FC = () => {
  const [userReport, setUserReport] = useState(false);
  const [rentalReport, setRentalReport] = useState(false);

  const openUserReport = () => {
    setUserReport(true);
  };

  const closeUserReport = () => {
    setUserReport(false);
  };

  const openRentalReport = () => {
    setRentalReport(true);
  };

  const closeRentalReport = () => {
    setRentalReport(false);
  };

  const calculateAge = (date) => {
    const now = new Date();
    const birthDate = new Date(date);
    const month = now.getMonth() - birthDate.getMonth();
    let age = now.getFullYear() - birthDate.getFullYear();

    if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
      age -= age;
    }

    return age;
  };

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BodyContainer css={xw`text-secondary-1`}>
        <ContentGallery>
          {data.images.map((img, index) => {
            let css = '';

            if (index === 0) {
              css = xw`rounded-tl-2xl rounded-bl-2xl row-span-2`;
            } else if (index === 1) {
              css = xw`rounded-tr-2xl`;
            } else {
              css = xw`rounded-br-2xl`;
            }

            return (
              <Img key={img.name} src={img.url} alt={img.name} css={css} />
            );
          })}
        </ContentGallery>

        <Title css={xw`my-5`}>
          ${data.price} / mes, en {data.title}
        </Title>

        <section css={xw`w-full flex flex-wrap mb-10 sm:mb-20`}>
          <div css={xw`w-full sm:w-8/12`}>
            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faStar} height="1.2rem" />
                <p css={xw`ml-2`}>4.5 (10 evaluaciones)</p>
              </div>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faHome} height="1.2rem" />
                <p css={xw`ml-2`}>{data.typeSpace}</p>
              </div>
              <div css={xw`flex`}>
                <ButtonLink type="button" onClick={openRentalReport}>
                  <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                  <p css={xw`ml-2`}>Reportar publicación</p>
                </ButtonLink>
              </div>
            </div>

            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faAd} height="1.2rem" />
                <p css={xw`ml-2`}>{data.available}</p>
              </div>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faSearch} height="1.2rem" />
                <p css={xw`ml-2`}>{data.reason}</p>
              </div>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faUsers} height="1.2rem" />
                <p css={xw`ml-2`}>{data.gender}</p>
              </div>
            </div>

            <div css={xw`flex items-center`}>
              <h2 css={xw`mr-2 text-xl font-bold`}>Calificar</h2>
              <FontAwesomeIcon icon={faStar} height="1.2rem" />
              <FontAwesomeIcon icon={faStar} height="1.2rem" />
              <FontAwesomeIcon icon={faStar} height="1.2rem" />
              <FontAwesomeIcon icon={faStar} height="1.2rem" />
              <FontAwesomeIcon icon={faStar} height="1.2rem" />
            </div>

            <div css={xw`w-full flex flex-wrap`}>
              <h2 css={xw`w-full py-7 text-xl font-bold`}>
                Información de la vivienda
              </h2>
              <p css={xw`text-justify`}>{data.description}</p>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Servicios</h2>
              <ul css={xw`list-disc flex flex-wrap`}>
                {data.services.map((item) => (
                  <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/4`}>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Reglas</h2>
              <ul css={xw`list-disc flex flex-wrap`}>
                {data.rules.map((item) => (
                  <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/4`}>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>
                Descripción de la zona
              </h2>
              <p>{data.zone}</p>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>
                Ubicación de la vivienda
              </h2>
              <p css={xw`pb-3`}>
                Calle {data.location.street} {data.location.extNumber}{' '}
                {data.location.intNumber}, {data.location.stateCode}{' '}
                {data.location.city}, Jal. México
              </p>

              <iframe
                css={xw`w-full h-72`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14931.290203720673!2d-103.44059073022459!3d20.676797100000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x527d674e41a8ff5f!2sBuckhouse!5e0!3m2!1ses-419!2smx!4v1622850401228!5m2!1ses-419!2smx"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          <div css={xw`w-full mt-10 sm:mt-0 sm:w-4/12`}>
            <div
              css={xw`flex flex-col p-5 items-center mx-0 sm:mx-10 border border-secondary-2 rounded-md static sm:sticky top-20`}
            >
              <img
                alt={user.firstName}
                src={user.userImage}
                css={xw`w-32 h-32 rounded-full bg-gray-400`}
              />

              <h2 css={xw`py-3 text-xl text-center font-bold`}>
                {user.firstName} {user.lastName}
              </h2>
              <p css={xw`text-center font-semibold`}>
                {calculateAge(user.birthDate)} años
              </p>

              <h2 css={xw`py-3 text-lg text-center font-bold`}>
                Acerca de {user.firstName}
              </h2>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faPhoneAlt} height="1.2rem" />
                <p css={xw`ml-2 mb-5`}>{user.phoneNumber}</p>
              </div>

              <NextLink href="/profile/messages">
                <Btn href="/profile/messages">
                  <FontAwesomeIcon icon={faComment} height="1.2rem" />
                  <span css={xw`ml-2`}>Enviar mensaje</span>
                </Btn>
              </NextLink>

              <ButtonLink type="button" css={xw`mt-5`} onClick={openUserReport}>
                <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                <p css={xw`ml-2`}>Reportar usuario</p>
              </ButtonLink>
            </div>
          </div>
        </section>

        {rentalReport && <RentalPlaceReport closeModal={closeRentalReport} />}
        {userReport && <UserReport closeModal={closeUserReport} />}
      </BodyContainer>
    </>
  );
};

export default Details;
