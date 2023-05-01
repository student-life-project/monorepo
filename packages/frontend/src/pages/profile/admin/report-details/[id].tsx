import { NextPage, NextPageContext } from 'next';
import router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
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
import { TStore } from '@/store';
import {
  changeReportStatus,
  deleteReport,
  getReport,
} from '@/store/actions/manageReports';
import { TRootState } from '@/store/reducers';
import { manageReportSelector } from '@/store/selectors/manageReports';
import { isSolveReportFormat } from '@/utils/editReportFormat';
import { formatDate } from '@/utils/managerDate';

type TRedirectData = {
  pathname: string;
  query?: {
    deletedReport?: boolean;
  };
} & any;

const ReportDetails: NextPage = () => {
  const dispatch = useDispatch();
  const report = useSelector(manageReportSelector);

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(report?.approved);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleStatus = async () => {
    setStatus(!status);

    await dispatch(
      changeReportStatus(report?._id, isSolveReportFormat(report)),
    );
  };

  const handleDeleteReport = async () => {
    await dispatch(deleteReport(report?._id));

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
      <BreadCrumbs items={ItemsReportDetails(report?._id)} />
      <Alert />

      {report && (
        <BodyContainer css={xw`pt-16 sm:pt-8`}>
          <div css={xw`flex justify-center mb-10`}>
            <div css={xw`w-full lg:w-8/12`}>
              <h2 css={xw`py-5 text-lg font-bold`}>Reporte # {report._id}</h2>

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
                  <p css={xw`font-bold mt-2`}>
                    {report.createdAt && formatDate(report.createdAt)}
                  </p>
                </div>

                <div>
                  <SubTitle>{NameInput.fromReport}</SubTitle>
                  <p css={xw`font-bold mt-2`}>{report.reporterId}</p>
                </div>

                <div>
                  <SubTitle>{NameInput.toReport}</SubTitle>
                  <p css={xw`font-bold mt-2 break-all`}>
                    {report.reportOriginUrl}
                  </p>
                </div>

                <div>
                  <SubTitle>{NameInput.reportReason}</SubTitle>
                  <p css={xw`font-bold`}>{report.reassson}</p>
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
      )}
    </>
  );
};

ReportDetails.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { query: any; reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getReport(query.id),
  );

  return {};
};

export default ReportDetails;
