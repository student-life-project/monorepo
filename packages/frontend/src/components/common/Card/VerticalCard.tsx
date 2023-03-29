// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { tokenSessionSelector } from '@/store/selectors/session';

import ClampedText from '../ClampedText';
import ModalConfirm from '../ModalConfirm';
import PriceSection from './PriceSection';
import RateSection from './RateSection';

interface IVerticalCard {
  id: any;
  title: string;
  likes?: number;
  imageUrl: string;
  pricePerMonth: number;
}

const Content = styled.div`
  ${xw`
    w-72
    h-72
    border
    rounded
    bg-white
    transform
    transition
    ease-in-out
    duration-500
    cursor-pointer
    font-montserrat
    border-secondary-2
    hover:-translate-y-3
  `}
`;

const Img = styled.img`
  ${xw`
    h-1/2
    w-full
    border-b
    rounded-t
    box-border
    bg-gray-400
    object-cover
    border-secondary-2
  `}
`;

const Info = styled.section`
  ${xw`
    p-4
    flex
    w-full
    flex-col
    justify-end
  `}
`;

const NotRate = styled.p`
  ${xw`
    flex
    my-3
    w-full
    text-sm
    text-secondary-1
  `}
`;

const Verticalcard: FC<IVerticalCard> = ({
  id,
  title,
  likes,
  imageUrl,
  pricePerMonth,
}) => {
  const router = useRouter();
  const isLogedIn = useSelector(tokenSessionSelector);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const redirectLogin = () => router.push('/api/auth/login');

  const handleOpenShowModalLogin = () => {
    if (isLogedIn) {
      router.push(`/rentals/details/${id}`);
    } else {
      setShowModalLogin(true);
    }
  };

  const handleCloseShowModalLogin = () => {
    setShowModalLogin(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpenShowModalLogin}>
        <Content>
          <Img src={imageUrl} alt={title} />

          <Info>
            {likes ? (
              <RateSection likes={likes} />
            ) : (
              <NotRate>No hay evaluaciones</NotRate>
            )}

            <ClampedText lines={1} classNames={xw`text-sm text-secondary-1`}>
              {title}
            </ClampedText>

            <PriceSection price={pricePerMonth} />
          </Info>
        </Content>
      </button>

      {showModalLogin && (
        <ModalConfirm
          type="info"
          title="Inicia sesión o registrate"
          description="Para ver más información sobre vivienda como fotos, ubicación, calificaciones, comentarios, etc."
          closeModal={handleCloseShowModalLogin}
          action={redirectLogin}
        />
      )}
    </>
  );
};

export default Verticalcard;
