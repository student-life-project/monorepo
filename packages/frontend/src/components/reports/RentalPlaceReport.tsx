// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { EReportPlace } from '@student_life/common';
import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

import { ErrorMessageInput, NameInput } from '@/constants';

import Button from '../Button';
import Modal from '../Modal';
import Radio from '../Radio';
import Textarea from '../Textarea';

type IRentalPlaceReport = {
  closeModal: () => void;
};

interface IReportPlaceData {
  reason: EReportPlace;
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

const RentalPlaceReport: FC<IRentalPlaceReport> = ({ closeModal }) => {
  // const dispath = useDispatch();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    reset({ reason: EReportPlace.INCORRECT_INFO });
  }, [reset]);

  const onSubmit: SubmitHandler<IReportPlaceData> = async (data) => {
    // await dispath(data);
    // eslint-disable-next-line no-console
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Reportar alojamiento" close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 css={xw`py-4 text-lg font-bold`}>
          Ayúdanos a entender cuál es el problema con esta publicación. ¿Cómo lo
          describirías?
        </h2>

        <div css={xw`flex flex-col items-start`}>
          <Controller
            name="reason"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              const reason = parseInt(value, 10);

              return (
                <>
                  <Radio
                    name="incorrect_info"
                    label="Es impreciso o incorrecto"
                    value={EReportPlace.INCORRECT_INFO}
                    onChange={onChange}
                    checked={reason === EReportPlace.INCORRECT_INFO}
                  />
                  <Radio
                    name="it-is-not-real"
                    label="No es un alojamiento real"
                    value={EReportPlace.IT_IS_NOT_REAL}
                    onChange={onChange}
                    checked={reason === EReportPlace.IT_IS_NOT_REAL}
                  />
                  <Radio
                    name="it_is_fraud"
                    label="Es una estafa"
                    value={EReportPlace.IT_IS_FRAUD}
                    onChange={onChange}
                    checked={reason === EReportPlace.IT_IS_FRAUD}
                  />
                  <Radio
                    name="it_is_offensive"
                    label="Es ofensivo"
                    value={EReportPlace.IT_IS_OFFENSIVE}
                    onChange={onChange}
                    checked={reason === EReportPlace.IT_IS_OFFENSIVE}
                  />
                  <Radio
                    name="other"
                    label="Es otra cosa"
                    value={EReportPlace.OTHER}
                    onChange={onChange}
                    checked={reason === EReportPlace.OTHER}
                  />
                </>
              );
            }}
          />
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Describa mejor la problemática</h2>
        <Textarea
          id="description"
          placeholder="Escribir problema..."
          {...register('description', {
            required: ErrorMessageInput.inputRequire(NameInput.description),
            maxLength: {
              value: 255,
              message: ErrorMessageInput.max(255),
            },
          })}
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
