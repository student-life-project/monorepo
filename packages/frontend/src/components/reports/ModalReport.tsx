import { PlaceReport, ProfileReport } from '@student_life/common';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';
import { createReport } from '@/store/actions/reports';
import { IOption, TReportType } from '@/types';

import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import Modal from '../common/Modal';
import Radio from '../common/Radio';
import Textarea from '../common/Textarea';

type TModalReport = {
  type: TReportType;
  closeModal: () => void;
};

enum ERentalType {
  USER = 'Usuario',
  RENTAL_PLACE = 'Publicación',
}

interface IReportData {
  reason: string;
  description: string;
}

const ModalReport: FC<TModalReport> = ({ type, closeModal }) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const description = watch('description');

  let reasonDefault = 'Es irrespetuoso u ofensivo (Incita al odio)';
  let title = 'Reportar usuario';
  let subTitle = 'Seleccione el motivo del reporte';
  let options: IOption[] = ProfileReport;

  if (type === ERentalType.RENTAL_PLACE) {
    reasonDefault = 'Es impreciso o incorrecto';
    title = 'Reportar alojamiento';
    subTitle =
      'Ayúdanos a entender cuál es el problema con este alojamiento. ¿Cómo lo describirías?';
    options = PlaceReport;
  }

  useEffect(() => {
    reset({ reason: reasonDefault });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  const onSubmit: SubmitHandler<IReportData> = async (data) => {
    const { reason, description: desc } = data;

    const createData = {
      type,
      reassson: reason,
      description: desc,
      reportOriginUrl: window.location.pathname,
    };

    await dispatch(createReport(createData));
    closeModal();
  };

  return (
    <Modal title={title} close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 css={xw`py-4 text-base sm:text-lg font-bold`}>{subTitle}</h2>

        <div css={xw`flex flex-col items-start`}>
          {options.map((item) => {
            const value = Object.values(item)[0];

            return (
              <div key={value}>
                <Radio
                  name={value}
                  label={value}
                  value={value}
                  register={{ ...register('reason', { required: true }) }}
                />
              </div>
            );
          })}
        </div>

        <h2 css={xw`py-4 text-base sm:text-lg font-bold`}>
          Describa mejor la problemática
        </h2>
        <Textarea
          id="description"
          maxLength={255}
          counter={description?.length}
          placeholder="Escribir problema..."
          register={{
            ...register('description', {
              required: ErrorMessageInput.inputRequire(NameInput.description),
              maxLength: {
                value: 255,
                message: ErrorMessageInput.max(255),
              },
            }),
          }}
          error={errors.description}
          messageError={errors.description?.message}
        />

        <DoubleSpace>
          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button
              BSecondary
              type="button"
              css={xw`w-full`}
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </div>

          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button type="submit" FPrimary css={xw`w-full`}>
              Enviar
            </Button>
          </div>
        </DoubleSpace>
      </form>
    </Modal>
  );
};

export default ModalReport;
