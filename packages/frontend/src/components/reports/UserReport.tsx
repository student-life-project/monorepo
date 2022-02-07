// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { EUserReport } from '@student_life/common';
import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

import { ErrorMessageInput, NameInput } from '@/constants';

import Button from '../Button';
import Modal from '../Modal';
import Radio from '../Radio';
import Textarea from '../Textarea';

type TUserReport = {
  closeModal: () => void;
};

interface IUserReportData {
  reason: EUserReport;
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

const UserReport: FC<TUserReport> = ({ closeModal }) => {
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
    reset({ reason: EUserReport.OFFENSIVE });
  }, [reset]);

  const onSubmit: SubmitHandler<IUserReportData> = async (data) => {
    // await dispath(data);
    // eslint-disable-next-line no-console
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Reportar usuario" close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 css={xw`py-4 text-lg font-bold`}>
          Seleccione el motivo del reporte
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
                    name="offensive"
                    label="Es irrespetuoso u ofensivo (Incita al odio)"
                    value={EUserReport.OFFENSIVE}
                    onChange={onChange}
                    checked={reason === EUserReport.OFFENSIVE}
                  />
                  <Radio
                    name="fake-profile"
                    label="Es un perfil con información falsa"
                    value={EUserReport.FAKE_PROFILE}
                    onChange={onChange}
                    checked={reason === EUserReport.FAKE_PROFILE}
                  />
                  <Radio
                    name="violence"
                    label="Amenazar con violencia o daño físico"
                    value={EUserReport.VIOLENCE}
                    onChange={onChange}
                    checked={reason === EUserReport.VIOLENCE}
                  />
                  <Radio
                    name="inappropriate"
                    label="Comportamiento inapropiado"
                    value={EUserReport.INAPPROPRIATE}
                    onChange={onChange}
                    checked={reason === EUserReport.INAPPROPRIATE}
                  />
                  <Radio
                    name="other"
                    label="Es otra cosa"
                    value={EUserReport.OTHER}
                    onChange={onChange}
                    checked={reason === EUserReport.OTHER}
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

export default UserReport;
