import { FC, useState } from 'react';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsReport, confirmMessage, HeaderReport } from '@/constants';
import { TElementId } from '@/types';

type TTableReports = {
  data: any; //! Crear type
};

const TableReports: FC<TTableReports> = ({ data }) => {
  // TODO: need to implement
  // TODO: loading si la data aún no carga mostrar el Spinner.

  const [reportId, setReportId] = useState<TElementId>(null);
  const [showModalReport, setShowModalReport] = useState(false);

  const solveReport = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(`Reporte ${id}`);
  };

  const handleOpenModalReport = (id: TElementId) => {
    setShowModalReport(true);
    setReportId(id);
  };

  const handleCloseModalReport = () => {
    setShowModalReport(false);
  };

  const deleteReport = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(`Reporte ${id}`);
  };

  return (
    <>
      <Table
        data={data}
        loading={false}
        columns={ColumnsReport(solveReport, handleOpenModalReport)}
        header={HeaderReport}
      />

      {showModalReport && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('reporte')}
          description={confirmMessage.descriptionDelete('reporte')}
          closeModal={handleCloseModalReport}
          // eslint-disable-next-line no-console
          action={() => deleteReport(reportId)}
        />
      )}
    </>
  );
};

export default TableReports;
