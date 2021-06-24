// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import BodyContainer from '@/components/common/BodyContainer';
import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Pagination from '@/components/Pagination';
import FilterAndSort from '@/components/rentals/FilterAndSort';
import { TStore } from '@/store';
import {
  getRentalPlaces,
  IRentalPlacesAction,
} from '@/store/actions/rentalTypes';
import { TRootState } from '@/store/reducers';
import { rentaPlacesSelector } from '@/store/selectors/rentalPlaces';

const ContentRentals = styled.div`
  ${xw`
    flex
    my-10
    gap-10
    flex-wrap
    justify-center
  `}
`;

const rentals = [
  {
    name: 'Mejor calificación',
    value: 'BestGrade',
  },
  {
    name: 'Menor precio',
    value: 'LowerPrice',
  },
  {
    name: 'Mayor precio',
    value: 'HighestPrice',
  },
];

const filters = {
  adType: [
    {
      key: 'Lugar completo',
    },
    {
      key: 'Cuarto privado',
    },
    {
      key: 'Cuarto compartido',
    },
  ],
  preferredGenre: [
    {
      key: 'Hombre',
    },
    {
      key: 'Mujer',
    },
    {
      key: 'Non-binary',
    },
    {
      key: 'Sin preferencias',
    },
  ],

  services: [
    {
      key: 'Lavadora',
    },
    {
      key: 'Elevador',
    },
    {
      key: 'Con balcón o patio',
    },
    {
      key: 'Wi-Fi incluido',
    },
    {
      key: 'Tiene mascotas',
    },
    {
      key: 'Servicios incluidos',
    },
    {
      key: 'Aire acondicionado',
    },
    {
      key: 'TV',
    },
    {
      key: 'Amueblado',
    },
    {
      key: 'Calefacción',
    },
    {
      key: 'Baño privado',
    },
  ],
  rules: [
    {
      key: 'No fumar',
    },
    {
      key: 'No mascotas',
    },
    {
      key: 'Mascotas OK',
    },
    {
      key: 'No drogas',
    },
    {
      key: 'No beber',
    },
    {
      key: 'Parejas OK',
    },
  ],
};

const Rentals: NextPage = () => {
  const rentalPlaces = useSelector(rentaPlacesSelector);

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <FilterAndSort sorts={rentals} filters={filters} />

      <BodyContainer css={xw`pt-0`}>
        <ContentRentals>
          {rentalPlaces.map((rentalPlace) => {
            const rateNumber = rentalPlace.scores && rentalPlace.scores.length;

            const rate =
              rentalPlace.scores &&
              rentalPlace.scores.reduce(
                (totalScore, score) => totalScore + score.score,
                0,
              ) / rateNumber;

            return (
              <div key={`rental_place${rentalPlace.id}`}>
                <VerticalCard
                  rateNumber={rateNumber}
                  title={rentalPlace.title}
                  pricePerMonth={rentalPlace.price}
                  imageUrl={rentalPlace.images?.[0]?.url}
                  rate={rate && parseFloat(rate.toFixed(2))}
                />
              </div>
            );
          })}
        </ContentRentals>
        <Pagination />
      </BodyContainer>
    </>
  );
};

Rentals.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (
    reduxStore.dispatch as ThunkDispatch<
      TRootState,
      unknown,
      IRentalPlacesAction
    >
  )(getRentalPlaces());

  return {};
};

export default Rentals;
