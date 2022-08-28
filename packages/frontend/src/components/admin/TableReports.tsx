import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsReport, confirmMessage, HeaderReport } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
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
    // eslint-disable-next-line no-console
    console.log(`Reporte ${id}`);
    toast.success(AlertMessage.updated('estatus'));
  };

  const handleOpenModalReport = (id: TElementId) => {
    setShowModalReport(true);
    setReportId(id);
  };

  const handleCloseModalReport = () => {
    setShowModalReport(false);
  };

  const deleteReport = (id: TElementId) => {
    // eslint-disable-next-line no-console
    console.log(`Reporte ${id}`);
    toast.success(AlertMessage.deleted('reporte'));
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
