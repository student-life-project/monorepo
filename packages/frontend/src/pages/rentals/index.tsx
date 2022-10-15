// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  Gender,
  orderRentals,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '@student_life/common';
import { NextPage } from 'next';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import BodyContainer from '@/components/common/BodyContainer';
import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Pagination from '@/components/common/Pagination';
import FilterAndSort from '@/components/rentals/FilterAndSort';
import { setRentalPlaces } from '@/store/actions/rentalPlaces';
import { TRootState } from '@/store/reducers';
import { rentalPlacesSelector } from '@/store/selectors/rentalPlaces';
import { IFilters } from '@/types';
import { ScrollToAnimation } from '@/utils/scrollTo';
import { usePagination } from '@/hooks/usePagination';

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

const RENTAL_PLACE_URL = '/rental-place';

const Rentals: NextPage = () => {
  const dispatch = useDispatch() as ThunkDispatch<TRootState, unknown, any>;
  const rentalPlaces = useSelector(rentalPlacesSelector);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const isFirstTimeRendered = useRef(false);

  const paginationDataSetter = useCallback(
    (data: any[]) => {
      dispatch(setRentalPlaces(data));
    },
    [dispatch],
  );

  const { count, goToPage } = usePagination<any>({
    route: RENTAL_PLACE_URL,
    dataSetter: paginationDataSetter,
    limit: itemsPerPage,
  });

  useEffect(() => {
    if (!isFirstTimeRendered.current && goToPage) {
      isFirstTimeRendered.current = true;
      goToPage(0);
    }
  }, [goToPage, isFirstTimeRendered]);

  const handlePageClick = (event: { selected: number }) => {
    goToPage(event.selected);
    ScrollToAnimation();
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <FilterAndSort
        filters={filters}
        sorts={orderRentals}
        totalPlaces={count}
        setItemsPerPage={setItemsPerPage}
      />

      <BodyContainer css={xw`pt-0`}>
        <ContentRentals>
          {rentalPlaces?.map((rentalPlace) => (
            <div key={`rental_place${rentalPlace.id}`}>
              <VerticalCard
                id={rentalPlace.id}
                likes={rentalPlace.likes}
                title={rentalPlace.title}
                pricePerMonth={rentalPlace.price}
                imageUrl={rentalPlace.images?.[0]?.url}
              />
            </div>
          ))}
        </ContentRentals>

        <Pagination
          pageCount={Math.ceil(count / itemsPerPage)}
          handlePageClick={handlePageClick}
        />
      </BodyContainer>
    </>
  );
};

export default Rentals;
