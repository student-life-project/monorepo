// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  faBullhorn,
  faConciergeBell,
  faHome,
  faMapMarkerAlt,
  faSearch,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { NextPage, NextPageContext } from 'next';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Comments from '@/components/comments/Comments';
import Alert from '@/components/common/Alert';
import Anchor from '@/components/common/Anchor';
import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import ButtonLink from '@/components/common/ButtonLink';
import Carousel from '@/components/common/Carousel';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import CardUser from '@/components/profile/CardUser';
import ModalReport from '@/components/reports/ModalReport';
import { TStore } from '@/store';
import { getAllComments } from '@/store/actions/comments';
import { getRentalPlace } from '@/store/actions/rentalPlaces';
import { TRootState } from '@/store/reducers';
import { commentsSelector } from '@/store/selectors/comment';
import { rentalPlaceDetailsSelector } from '@/store/selectors/rentalPlaces';
import { tokenSessionSelector } from '@/store/selectors/session';
import { userSelector } from '@/store/selectors/user';
import { formatter } from '@/utils/numberFormat';

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

const Details: NextPage = () => {
  const userData = useSelector(userSelector);
  const commentList = useSelector(commentsSelector);
  const isLogedIn = useSelector(tokenSessionSelector);
  const rentalPlace = useSelector(rentalPlaceDetailsSelector);

  const { address } = rentalPlace || {};
  const rentalPlaceImages = rentalPlace?.images || [];

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

  const user = useMemo(() => {
    if (rentalPlace?.owner) {
      return {
        id: rentalPlace.owner?._id,
        // TODO: Enviar imagen.
        userImage: '/images/avatar.png',
        firstName: rentalPlace.owner?.firstName,
        lastName: rentalPlace.owner?.lastName,
        email: rentalPlace.owner?.email,
        password: rentalPlace.owner?.password,
        phoneNumber: rentalPlace.owner?.phoneNumber,
        birthDate: dayjs(rentalPlace.owner?.birthDate, {
          format: 'YYYY-MM-DD',
        }).format('YYYY-MM-DD'),
        aboutMe: rentalPlace.owner.aboutMe,
      };
    }

    return {};
  }, [rentalPlace]);

  // TODO: Ver apartados sólo si existe una sesión iniciada.
  // TODO: si el usuario califico se pone como activo el botón.
  const like = false;

  const street = address?.street.replace('#', '');
  const googleMapsLink = `https://maps.google.com/?q=${street}, ${address?.cologne}, ${address?.city}, ${address?.state}`;

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <Alert />

      <BodyContainer css={xw`text-secondary-1`}>
        <ContentGallery length={rentalPlaceImages.length}>
          {rentalPlaceImages.map((img, index) => (
            <>
              {index < 5 && (
                <Img
                  src={`${process.env.PUBLIC_IMAGES}/${img?.fullpath}`}
                  key={img.name}
                  alt={img.name}
                  index={index}
                  length={rentalPlaceImages.length}
                />
              )}
            </>
          ))}
        </ContentGallery>

        {rentalPlaceImages.length > 1 && (
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
            <Button BPrimary round active={like} css={xw`h-10`}>
              <FontAwesomeIcon icon={faThumbsUp} height="1.2rem" />
              <span css={xw`ml-2`}>
                {rentalPlace?.likesCount || 0} Me gusta
              </span>
            </Button>
          ) : (
            <div css={xw`flex`}>
              <FontAwesomeIcon icon={faThumbsUp} height="1.2rem" />
              <p css={xw`ml-2`}>{rentalPlace?.likesCount || 0} Me gusta</p>
            </div>
          )}

          <Title css={xw`my-5`}>
            {formatter().format(rentalPlace?.price)} / mes, en{' '}
            {rentalPlace?.title}
          </Title>
        </div>

        <section css={xw`w-full flex flex-wrap mb-10 sm:mb-20`}>
          <div css={xw`w-full lg:w-8/12`}>
            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faHome} height="1.2rem" />
                <p css={xw`ml-2`}>{rentalPlace?.typeSpace}</p>
              </div>

              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faConciergeBell} height="1.2rem" />
                <p css={xw`ml-2`}>
                  {rentalPlace?.availability ? 'Disponible' : 'No Disponible'}
                </p>
              </div>

              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faSearch} height="1.2rem" />
                <p css={xw`ml-2`}>{rentalPlace?.reason}</p>
              </div>
            </div>

            <div css={xw`w-full grid gap-4 mb-5 grid-cols-1 sm:grid-cols-3`}>
              <div css={xw`flex`}>
                <FontAwesomeIcon icon={faUsers} height="1.2rem" />
                <p css={xw`ml-2`}>{rentalPlace?.gender}</p>
              </div>

              {isLogedIn && user?.id !== userData?._id && (
                <div css={xw`flex`}>
                  <ButtonLink
                    type="button"
                    css={xw`text-red-500`}
                    onClick={handleRentalReport}
                  >
                    <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                    <p css={xw`ml-2`}>Reportar publicación</p>
                  </ButtonLink>
                </div>
              )}
            </div>

            <div css={xw`w-full flex flex-wrap`}>
              <div>
                <h2 css={xw`w-full py-7 text-xl font-bold`}>
                  Información de la vivienda
                </h2>
                <p css={xw`text-justify`}>{rentalPlace?.description}</p>
              </div>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Servicios</h2>
              <ul css={xw`w-full list-disc flex flex-wrap`}>
                {rentalPlace?.services?.map((item) => (
                  <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Reglas</h2>
              <ul css={xw`w-full list-disc flex flex-wrap`}>
                {rentalPlace?.rules?.map((item) => (
                  <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Seguridad</h2>
              <ul css={xw`w-full list-disc flex flex-wrap`}>
                {rentalPlace?.security?.map((item) => (
                  <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>
                Descripción de la zona
              </h2>
              <p>{address?.zone}</p>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>
                Ubicación de la vivienda
              </h2>
              <p>
                {address?.street}, Col. {address?.cologne}. C.P.{' '}
                {address?.stateCode}. {address?.city}, {address?.state},{' '}
                {address?.country}.
              </p>

              <Anchor
                target="_black"
                href={googleMapsLink}
                css={xw`w-full flex gap-1 mt-2`}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} height="1.2rem" />
                Ver Mapa
              </Anchor>

              <h2 css={xw`w-full py-7 text-xl font-bold`}>Referencias</h2>
              <p>{address?.reference}</p>

              <Comments
                isLogedIn={isLogedIn}
                comments={commentList}
                userId={userData?._id}
                openUserReport={handleUserReport}
              />
            </div>
          </div>

          <CardUser
            user={user}
            isLogedIn={isLogedIn}
            userId={userData?._id}
            openUserReport={handleUserReport}
            titlePublication={rentalPlace?.title}
          />
        </section>

        {rentalReport && (
          <ModalReport type="Publicación" closeModal={handleRentalReport} />
        )}

        {userReport && (
          <ModalReport type="Usuario" closeModal={handleUserReport} />
        )}

        {showCarousel && (
          <Carousel
            images={rentalPlaceImages.map(
              (item) => `${process.env.PUBLIC_IMAGES}/${item?.fullpath}`,
            )}
            close={handleShowCarousel}
          />
        )}
      </BodyContainer>
    </>
  );
};

Details.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  const rentalPlaceId = query.id;

  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllComments(),
  );

  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getRentalPlace(rentalPlaceId as string),
  );

  return {};
};

export default Details;
