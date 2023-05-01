import { IReport } from '@student_life/common';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsReport, confirmMessage, HeaderReport } from '@/constants';
import {
  changeReportStatus,
  deleteReport,
  getAllReports,
  searchReport,
} from '@/store/actions/manageReports';
import { isFetchingManageReportsSelector } from '@/store/selectors/manageReports';
import { TElementId } from '@/types';
import { isSolveReportFormat } from '@/utils/editReportFormat';

type TTableReports = {
  data: IReport[] | any;
};

const TableReports: FC<TTableReports> = ({ data }) => {
  const dispatch = useDispatch();

  const [reportId, setReportId] = useState<TElementId>(null);
  const [showModalReport, setShowModalReport] = useState(false);

  const loading = useSelector(isFetchingManageReportsSelector);

  const handleChange = ({ target }) => {
    dispatch(searchReport(target.value));
  };

  const solveReport = async (id: TElementId) => {
    const reportSelected = data.find((item) => item._id === id);
    await dispatch(changeReportStatus(id, isSolveReportFormat(reportSelected)));
    await dispatch(getAllReports());
  };

  const handleDeleteReport = async () => {
    await dispatch(deleteReport(reportId));
    await dispatch(getAllReports());
  };

  const handleOpenModalReport = (id: TElementId) => {
    setShowModalReport(true);
    setReportId(id);
  };

  const handleCloseModalReport = () => {
    setShowModalReport(false);
  };

  const header = {
    ...HeaderReport,
    onChange: handleChange,
  };

  return (
    <>
      <Table
        data={data}
        loading={loading}
        columns={ColumnsReport(solveReport, handleOpenModalReport)}
        header={header}
        linkRow="/profile/admin/report-details/"
      />

      {showModalReport && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('reporte')}
          description={confirmMessage.descriptionDelete('reporte')}
          closeModal={handleCloseModalReport}
          action={handleDeleteReport}
        />
      )}
    </>
  );
};

export default TableReports;
