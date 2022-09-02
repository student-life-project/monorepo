// TODO: need to implement
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
import {
  publicationsListSelector,
  reportsListSelector,
  usersListSelector,
} from '@/store/selectors/admin';

const Admin: FC = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  const usersList = useSelector((state) => usersListSelector(state));

  const publicationsList = useSelector((state) =>
    publicationsListSelector(state),
  );

  const reportsList = useSelector((state) => reportsListSelector(state));

  const handleTab = (tabCurrent) => {
    setTab(tabCurrent);
  };

  useEffect(() => {
    if (router.query) {
      const { deletedUser, deletedReport, deletedPublication } = router.query;

      if (deletedUser === 'true') {
        toast.success(AlertMessage.deleted('usuario'));
      } else if (deletedReport === 'true') {
        toast.success(AlertMessage.deleted('reporte'));
      } else if (deletedPublication === 'true') {
        toast.success(AlertMessage.deleted('publicación'));
      }

      router.replace('/profile/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsAdmin} />
      <Alert />

      <Tabs
        items={[
          { text: 'Usuarios', handleTab },
          { text: 'Publicaciones', handleTab },
          { text: 'Reportes', handleTab },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        {tab === ETables.USER && <TableUsers data={usersList} />}

        {tab === ETables.PUBLICATION && (
          <TablePublications data={publicationsList} />
        )}

        {tab === ETables.REPORT && <TableReports data={reportsList} />}
      </BodyContainer>
    </>
  );
};

export default Admin;
