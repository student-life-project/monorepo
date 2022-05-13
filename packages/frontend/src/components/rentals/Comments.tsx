import { FC } from 'react';
import xw from 'xwind';

import Anchor from '../common/Anchor';

type TComments = {
  isLogedIn: boolean;
};

const Comments: FC<TComments> = ({ isLogedIn }) => {
  // TODO: Need to implement
  // Ver comentarios sólo si existe una sesión iniciada.

  return (
    <>
      {isLogedIn ? (
        <div>
          <p>formulario</p>
          <p>comentarios</p>
        </div>
      ) : (
        <div>
          <h2 css={xw`w-full text-lg font-bold py-5`}>
            <Anchor href="/api/auth/login">Iniciar Sesión</Anchor> para ver más
            información de la vivienda como comentarios, calificaciones, etc.
          </h2>
        </div>
      )}
    </>
  );
};

export default Comments;
