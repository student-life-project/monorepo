import router from 'next/router';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import xw from 'xwind';

import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import ModalConfirm from '@/components/common/ModalConfirm';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import {
  confirmMessage,
  ItemsReportDetails,
  NameInput,
  ReportStatus,
} from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';

const report = {
  id: 1,
  type: 'Usuario', // Publicación
  to: 'Erick Mejia Blanco', //  Comoda casa para descanso en Club de Golf Tequis
  from: 'Alfredo Carreón Urbano',
  date: '4 de abril 2021',
  reason: 'Es irrespetuoso u ofensivo (Incita al odio)',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam!',
};

type TRedirectData = {
  pathname: string;
  query?: {
    deletedReport?: boolean;
  };
} & any;

// TODO: Need to implement
const ReportDetails: FC = () => {
  //* Por defecto debe estar no resuelto.
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleStatus = () => {
    setStatus(!status);
    toast.success(AlertMessage.updated('estatus'));
  };

  const handleDeleteReport = () => {
    // TODO: id de reporte para eliminarlo

    // TODO: onSuccess y onError alerts
    const redirectData: TRedirectData = {
      pathname: '/profile/admin',
      query: {
        deletedReport: true,
      },
    };

    router.push(redirectData);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsReportDetails} />
      <Alert />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <div css={xw`flex justify-center mb-10`}>
          <div css={xw`w-full lg:w-8/12`}>
            <h2 css={xw`py-5 text-lg font-bold`}>Reporte # {report.id}</h2>

            <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
              <div>
                <SubTitle>{NameInput.reportStatus}</SubTitle>
                <Switch
                  checked={status}
                  onClick={handleStatus}
                  label={<Status status={status} options={ReportStatus} />}
                />
              </div>

              <div>
                <SubTitle>{NameInput.reportType}</SubTitle>
                <p css={xw`font-bold mt-2`}>{report.type}</p>
              </div>

              <div>
                <SubTitle>{NameInput.date}</SubTitle>
                <p css={xw`font-bold mt-2`}>{report.date}</p>
              </div>

              <div>
                <SubTitle>{NameInput.fromReport}</SubTitle>
                <p css={xw`font-bold mt-2`}>{report.from}</p>
              </div>

              <div>
                <SubTitle>{NameInput.toReport}</SubTitle>
                <p css={xw`font-bold mt-2`}>{report.to}</p>
              </div>

              <div>
                <SubTitle>{NameInput.reportReason}</SubTitle>
                <p css={xw`font-bold`}>{report.reason}</p>
              </div>
            </div>

            <div css={xw`grid grid-cols-1`}>
              <SubTitle>{NameInput.descripcionProblem}</SubTitle>
              <p css={xw`font-bold mt-2`}>{report.description}</p>
            </div>

            <div css={xw`w-full flex justify-center sm:justify-end mt-8`}>
              <Button BDanger type="button" onClick={handleShowModal}>
                Eliminar reporte
              </Button>
            </div>
          </div>
        </div>

        {showModal && (
          <ModalConfirm
            type="warning"
            title={confirmMessage.titleDelete('reporte')}
            description={confirmMessage.descriptionDelete('reporte')}
            closeModal={handleShowModal}
            action={handleDeleteReport}
          />
        )}
      </BodyContainer>
    </>
  );
};

export default ReportDetails;
