/* eslint-disable jsx-a11y/iframe-has-title */
// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  faBullhorn,
  faConciergeBell,
  faHome,
  faSearch,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import ButtonLink from '@/components/common/ButtonLink';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import CardUser from '@/components/profile/CardUser';
import RentalPlaceReport from '@/components/reports/RentalPlaceReport';
import UserReport from '@/components/reports/UserReport';
import Carousel from '@/components/common/Carousel';
import Comments from '@/components/comments/Comments';

type TContentGallery = {
  length: number;
};

type TImg = {
  index: number;
  length: number;
};

const ContentGallery = styled.section<TContentGallery>`
  ${xw`
    h-60
    grid
    mt-10
    gap-4
    w-full
    sm:h-96
    grid-rows-1
    grid-cols-1
  `}

  ${({ length }) => length === 2 && xw`sm:grid-cols-2`}
  ${({ length }) => length === 3 && xw`sm:grid-cols-3`}
  ${({ length }) => length >= 4 && xw`sm:grid-rows-2 sm:grid-cols-3`}
`;

const Img = styled.img<TImg>`
  ${xw`
    w-full
    h-full
    rounded-2xl
    bg-gray-400
    object-cover
  `}

  ${({ index, length }) => length >= 4 && index === 0 && xw`row-span-2`}
  ${({ index, length }) => length === 4 && index === 3 && xw`col-span-2`}
  ${({ index }) => index !== 0 && xw`hidden sm:block`}
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
  zone: 'El apartamento está ubicado a una cuadra del tren A ya pocos minutos a pie de la 1. Justo en frente del palacio unido, IHOP, Planet Finiteness, Blink. ¡Bloquee lejos de GWB!',
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
  id: 1,
  userImage: '/images/avatar.png',
  firstName: 'User 1',
  lastName: 'Test Test',
  email: 'user@test.com',
  password: 'testtesttest',
  phoneNumber: '3315448430',
  birthDate: '1997-02-11',
  aboutMe:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
};

const comments = [
  {
    id: 1,
    name: 'Alfredo Carreón Urbano',
    userImage: '/images/avatar.png',
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
    date: '12 de mayo 2022',
  },
  {
    id: 2,
    name: 'Erick Mejia Blanco',
    userImage: '/images/avatar.png',
    comment:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam! asdas ssdasdas asda',
    date: '11 de mayo 2022',
  },
];

const isLogedIn = true;

const Details: FC = () => {
  const [userReport, setUserReport] = useState(false);
  const [rentalReport, setRentalReport] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleUserReport = () => {
    setUserReport(!userReport);
  };

  const handleRentalReport = () => {
    setRentalReport(!rentalReport);
  };

  const handleShowCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  // TODO: need to implement
  // Ver apartados sólo si existe una sesión iniciada.
  const like = true;

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BodyContainer css={xw`text-secondary-1`}>
        <ContentGallery length={data.images.length}>
          {data.images.map((img, index) => (
            <>
              {index < 5 && (
                <Img
                  key={img.name}
                  src={img.url}
                  alt={img.name}
                  index={index}
                  length={data.images.length}
                />
              )}
            </>
          ))}
        </ContentGallery>

        {data.images.length > 1 && (
          <div css={xw`relative`}>
            <Button
              FSecondary
              type="button"
              onClick={handleShowCarousel}
              css={xw`w-full static mt-2 sm:w-auto sm:mt-0 sm:absolute sm:bottom-0 sm:right-0`}
            >
              Mostrar todas las fotos
            </Button>
          </div>
        )}

        <div
          css={xw`flex flex-col-reverse mb-10 sm:mb-0 sm:flex-row sm:gap-10 sm:items-center`}
        >
          {isLogedIn ? (
            <Button BPrimary round like={like} css={xw`h-10`}>
              <FontAwesomeIcon icon={faThumbsUp} height="1.2rem" />
              <span css={xw`ml-2`}>157 Me gusta</span>
            </Button>
          ) : (
            <div css={xw`flex`}>
              <FontAwesomeIcon icon={faThumbsUp} height="1.2rem" />
              <p css={xw`ml-2`}>157 Me gusta</p>
            </div>
          )}

          <Title css={xw`my-5`}>
            ${data.price} / mes, en {data.title}
          </Title>
        </div>

        <section css={xw`w-full flex flex-wrap mb-10 sm:mb-20`}>
          <div css={xw`w-full sm:w-8/12`}>
            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faHome} height="1.2rem" />
                <p css={xw`ml-2`}>{data.typeSpace}</p>
              </div>

              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faConciergeBell} height="1.2rem" />
                <p css={xw`ml-2`}>{data.available}</p>
              </div>

              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faSearch} height="1.2rem" />
                <p css={xw`ml-2`}>{data.reason}</p>
              </div>
            </div>

            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faUsers} height="1.2rem" />
                <p css={xw`ml-2`}>{data.gender}</p>
              </div>

              {isLogedIn && (
                <div css={xw`flex`}>
                  <ButtonLink type="button" onClick={handleRentalReport}>
                    <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                    <p css={xw`ml-2`}>Reportar publicación</p>
                  </ButtonLink>
                </div>
              )}
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
                loading="lazy"
              />

              <Comments
                comments={comments}
                isLogedIn={isLogedIn}
                openUserReport={handleUserReport}
              />
            </div>
          </div>

          <CardUser
            user={user}
            isLogedIn={isLogedIn}
            titlePublication={data.title}
            openUserReport={handleUserReport}
          />
        </section>

        {rentalReport && <RentalPlaceReport closeModal={handleRentalReport} />}

        {userReport && <UserReport closeModal={handleUserReport} />}

        {showCarousel && (
          <Carousel
            images={data.images.map((item) => item.url)}
            close={handleShowCarousel}
          />
        )}
      </BodyContainer>
    </>
  );
};

export default Details;
