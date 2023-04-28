import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import TablePublications from '@/components/admin/TablePublications';
import TableReports from '@/components/admin/TableReports';
import TableUsers from '@/components/admin/TableUsers';
import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Tabs from '@/components/common/Tabs';
import { ETables, ItemsAdmin } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { TStore } from '@/store';
import { getAllPublications } from '@/store/actions/managePublications';
import { getAllReports } from '@/store/actions/manageReports';
import { getAllUser } from '@/store/actions/manageUsers';
import { TRootState } from '@/store/reducers';
import { managePublicationsSelector } from '@/store/selectors/managePublications';
import { manageReportsSelector } from '@/store/selectors/manageReports';
import { manageUsersSelector } from '@/store/selectors/manageUsers';

const Admin: NextPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  const userList = useSelector(manageUsersSelector);
  const reportList = useSelector(manageReportsSelector);
  const publicationList = useSelector(managePublicationsSelector);

  const handleTab = (tabCurrent) => {
    setTab(tabCurrent);
    localStorage.setItem('tab', JSON.stringify(tabCurrent));
  };

  useEffect(() => {
    const getTab = localStorage.getItem('tab');
    const intialState = getTab !== null ? JSON.parse(getTab) : 0;
    setTab(Number(intialState));

    if (router.query) {
      const { deletedUser, deletedReport, deletedPost } = router.query;

      if (deletedUser === 'true') {
        toast.success(AlertMessage.deleted('usuario'));
      } else if (deletedReport === 'true') {
        toast.success(AlertMessage.deleted('reporte'));
      } else if (deletedPost === 'true') {
        toast.success(AlertMessage.deleted('publicación'));
      }
    }

    const timer = setTimeout(() => router.replace('/profile/admin'), 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsAdmin} />
      <Alert />

      <Tabs
        items={[
          { text: 'Usuarios', tab, handleTab },
          { text: 'Publicaciones', tab, handleTab },
          { text: 'Reportes', tab, handleTab },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        {tab === ETables.USER && <TableUsers data={userList} />}

        {tab === ETables.PUBLICATION && (
          <TablePublications data={publicationList} />
        )}

        {tab === ETables.REPORT && <TableReports data={reportList} />}
      </BodyContainer>
    </>
  );
};

Admin.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllUser(),
  );

  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllPublications(),
  );

  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllReports(),
  );

  return {};
};

export default Admin;
