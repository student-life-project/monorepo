// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '@/components/Button';

type IPreviewStep4 = {
  stepBack: React.MouseEventHandler<HTMLButtonElement>;
  complateStep4: React.MouseEventHandler<HTMLButtonElement>;
};

const Form = styled.form`
  ${xw`
    w-full
    lg:w-8/12
  `}
`;

const PreviewStep4: FC<IPreviewStep4> = ({ complateStep4, stepBack }) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <Form>
        <h2 css={xw`pb-3 text-lg font-bold`}>Datos ingresados</h2>
        <p css={xw`text-red-500`}>Mostrar los datos ingresados</p>

        <div css={xw`flex justify-end flex-wrap my-4`}>
          <Button
            BSecondary
            type="button"
            css={xw`w-full sm:w-3/12 mb-5 sm:mr-5 sm:mb-0`}
            onClick={stepBack}
          >
            Regresar
          </Button>
          <Button
            FPrimary
            type="button"
            css={xw`w-full sm:w-3/12`}
            onClick={complateStep4}
          >
            Continuar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PreviewStep4;
