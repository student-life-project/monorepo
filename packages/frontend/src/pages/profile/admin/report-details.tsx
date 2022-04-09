import { FC } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import { ItemsReportDetails, NameInput, ReportStatus } from '@/constants';

const report = {
  id: 1,
  type: 'Usuario', // Publicación
  to: 'Erick Mejia Blanco', //  Comoda casa para descanso en Club de Golf Tequis
  from: 'Alfredo Carreón Urbano',
  date: '4 de abril 2021',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam!',
};

const ReportDetails: FC = () => {
  // TODO: Need to implement
  const status = false; //* Por defecto debe estar no resuelto.

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BreadCrumbs items={ItemsReportDetails} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <div css={xw`flex justify-center mb-10`}>
          <div css={xw`w-full lg:w-8/12`}>
            <h2 css={xw`py-5 text-lg font-bold`}>Reporte # {report.id}</h2>

            <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
              <div>
                <SubTitle>{NameInput.reportStatus}</SubTitle>
                <Switch
                  checked={status}
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
            </div>

            <div css={xw`grid grid-cols-1`}>
              <SubTitle>{NameInput.descripcionProblem}</SubTitle>
              <p css={xw`font-bold mt-2`}>{report.description}</p>
            </div>

            <div css={xw`w-full flex justify-center sm:justify-start mt-8`}>
              <Button BDanger type="button">
                Eliminar reporte
              </Button>
            </div>
          </div>
        </div>
      </BodyContainer>
    </>
  );
};

export default ReportDetails;
