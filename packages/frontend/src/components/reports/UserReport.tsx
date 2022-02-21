// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { ProfileReport } from '@student_life/common';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Radio from '@/components/common/Radio';
import Textarea from '@/components/common/Textarea';
// import { useDispatch } from 'react-redux';
import { ErrorMessageInput, NameInput } from '@/constants';
import { IOption } from '@/types';

type TUserReport = {
  closeModal: () => void;
};

interface IUserReportData {
  reason: IOption[];
  description: string;
}

const DoubleSpace = styled.div`
  ${xw`
    flex
    w-full
    sm:gap-10
    sm:flex-row
    justify-center
    flex-col-reverse
    sm:justify-between
  `}
`;

const UserReport: FC<TUserReport> = ({ closeModal }) => {
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
    reset({ reason: 'Es irrespetuoso u ofensivo (Incita al odio)' });
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
        <h2 css={xw`py-4 text-base sm:text-lg font-bold`}>
          Seleccione el motivo del reporte
        </h2>

        <div css={xw`flex flex-col items-start`}>
          {ProfileReport.map((item) => {
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

export default UserReport;
