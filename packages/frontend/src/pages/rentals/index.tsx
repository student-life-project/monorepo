// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { IRentalPlace } from '@student_life/common';
import { NextPage, NextPageContext } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import BodyContainer from '@/components/common/BodyContainer';
import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Pagination from '@/components/common/Pagination';
import FilterAndSort from '@/components/rentals/FilterAndSort';
import {
  Gender,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '@/constants';
import { orderRentals } from '@/constants/orderRentals';
import { TStore } from '@/store';
import {
  getRentalPlaces,
  IRentalPlacesAction,
} from '@/store/actions/rentalTypes';
import { TRootState } from '@/store/reducers';
import { rentaPlacesSelector } from '@/store/selectors/rentalPlaces';
import { IFilters } from '@/types';

const ContentRentals = styled.div`
  ${xw`
    flex
    my-10
    gap-10
    flex-wrap
    justify-center
  `}
`;

const filters: IFilters = {
  reason: Reason,
  adType: TypeSpace,
  gender: Gender,
  services: Services,
  rules: Rules,
  security: Security,
};

const Rentals: NextPage = () => {
  const rentalPlaces = useSelector(rentaPlacesSelector);

  const itemsPerPage = 10;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<IRentalPlace[]>([]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(rentalPlaces.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(rentalPlaces.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % rentalPlaces.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <FilterAndSort sorts={orderRentals} filters={filters} />

      <BodyContainer css={xw`pt-0`}>
        <ContentRentals>
          {currentItems?.map((rentalPlace) => {
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

        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
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
