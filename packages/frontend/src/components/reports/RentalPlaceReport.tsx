// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Radio from '@/components/common/Radio';
import Textarea from '@/components/common/Textarea';
// import { useDispatch } from 'react-redux';
import { ErrorMessageInput, NameInput, PlaceReport } from '@/constants';

type TRentalPlaceReport = {
  closeModal: () => void;
};

interface IRentalPlaceReportData {
  reason: string[];
  description: string;
}

const DoubleFormSpace = styled.div`
  ${xw`
    grid
    gap-x-4
    grid-rows-2
    md:grid-rows-1
    md:grid-cols-2
  `}
`;

const RentalPlaceReport: FC<TRentalPlaceReport> = ({ closeModal }) => {
  // const dispath = useDispatch();

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

  useEffect(() => {
    reset({ reason: 'Es impreciso o incorrecto' });
  }, [reset]);

  const onSubmit: SubmitHandler<IRentalPlaceReportData> = async (data) => {
    // await dispath(data);
    // eslint-disable-next-line no-console
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Reportar alojamiento" close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 css={xw`py-4 text-base sm:text-lg font-bold`}>
          Ayúdanos a entender cuál es el problema con esta publicación. ¿Cómo lo
          describirías?
        </h2>

        <div css={xw`flex flex-col items-start`}>
          {PlaceReport.map((item) => {
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

        <DoubleFormSpace>
          <div css={xw`mt-5 sm:mb-2`}>
            <Button
              BSecondary
              type="button"
              css={xw`w-full`}
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </div>

          <div css={xw`mt-5 sm:mb-2`}>
            <Button type="submit" FPrimary css={xw`w-full`}>
              Enviar
            </Button>
          </div>
        </DoubleFormSpace>
      </form>
    </Modal>
  );
};

export default RentalPlaceReport;
