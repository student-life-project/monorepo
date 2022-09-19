import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsReport, confirmMessage, HeaderReport } from '@/constants';
import {
  changeReportStatus,
  deleteReport,
  searchReport,
} from '@/store/actions/manageReports';
import { isFetchingManageReportsSelector } from '@/store/selectors/manageReports';
import { TElementId } from '@/types';

type TTableReports = {
  data: any;
};

const TableReports: FC<TTableReports> = ({ data }) => {
  const [reportId, setReportId] = useState<TElementId>(null);
  const [showModalReport, setShowModalReport] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) =>
    isFetchingManageReportsSelector(state),
  );

  const handleChange = ({ target }) => {
    dispatch(searchReport(target.value));
  };

  const solveReport = (id: TElementId) => {
    dispatch(changeReportStatus(id));
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
          action={() => dispatch(deleteReport(reportId))}
        />
      )}
    </>
  );
};

export default TableReports;
