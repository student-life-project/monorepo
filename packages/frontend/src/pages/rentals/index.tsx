// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  Gender,
  IRentalPlace,
  orderRentals,
  Reason,
  Rules,
  Security,
  Services,
  TypeSpace,
} from '@student_life/common';
import { NextPage, NextPageContext } from 'next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import BodyContainer from '@/components/common/BodyContainer';
import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Pagination from '@/components/common/Pagination';
import FilterAndSort from '@/components/rentals/FilterAndSort';
import { TStore } from '@/store';
import { getAllRentalPlaces } from '@/store/actions/rentalPlaces';
import { TRootState } from '@/store/reducers';
import { rentalPlacesSelector } from '@/store/selectors/rentalPlaces';
import { IFilters } from '@/types';
import { ScrollToAnimation } from '@/utils/scrollTo';

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
  const rentalPlaces = useSelector(rentalPlacesSelector);

  const totalPlaces = rentalPlaces.length;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentItems, setCurrentItems] = useState<IRentalPlace[]>([]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(rentalPlaces.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalPlaces / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % totalPlaces;
    setItemOffset(newOffset);
    ScrollToAnimation();
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <FilterAndSort
        filters={filters}
        sorts={orderRentals}
        totalPlaces={totalPlaces}
        setItemsPerPage={setItemsPerPage}
      />

      <BodyContainer css={xw`pt-0`}>
        <ContentRentals>
          {currentItems?.map((rentalPlace) => (
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

        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </BodyContainer>
    </>
  );
};

Rentals.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllRentalPlaces(),
  );

  return {};
};

export default Rentals;
