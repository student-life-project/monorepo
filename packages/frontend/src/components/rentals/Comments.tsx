import { faBullhorn, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';

import Anchor from '../common/Anchor';
import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import Options from '../common/Options';
import Textarea from '../common/Textarea';

type TComments = {
  comments: any;
  isLogedIn: boolean;
};

interface ICommentData {
  comment: string;
}

const Comments: FC<TComments> = ({ comments, isLogedIn }) => {
  // TODO: Need to implement
  // Ver comentarios sólo si existe una sesión iniciada.
  // Las opciones de editar y eliminar solo son para el owner.

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const comment = watch('comment');
  const onSubmit: SubmitHandler<ICommentData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    // Despues de enviar el comentario. enviarle un id de user.
    // Para obetener id, name, userImage, comment y date.
  };

  return (
    <>
      {isLogedIn ? (
        <div css={xw`w-full`}>
          <h2 css={xw`w-full py-7 text-xl font-bold`}>Comentarios</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              id="comment"
              maxLength={255}
              counter={comment?.length}
              placeholder="Escribe un comentario..."
              register={{
                ...register('comment', {
                  required: ErrorMessageInput.inputRequire(NameInput.comment),
                  maxLength: {
                    value: 500,
                    message: ErrorMessageInput.max(500),
                  },
                }),
              }}
              error={errors.comment}
              messageError={errors.comment?.message}
            />

            <DoubleSpace classNames={xw`sm:justify-end sm:gap-4 sm:mt-2`}>
              <Button type="button" BDanger onClick={() => reset()}>
                Cancelar
              </Button>
              <Button type="submit" FPrimary css={xw`my-2 sm:my-0`}>
                Enviar comentario
              </Button>
            </DoubleSpace>
          </form>

          {comments?.map((item) => (
            <section key={item.id} css={xw`my-8`}>
              <div css={xw`w-full flex items-center`}>
                <div css={xw`w-full flex items-center gap-4`}>
                  <img
                    alt={item.name}
                    src={item.userImage}
                    css={xw`w-10 h-10 rounded-full bg-gray-400`}
                  />

                  <p>{item.name}</p>
                </div>

                <div css={xw`relative`}>
                  <Options>
                    <button type="button" onClick={() => alert('Repotar')}>
                      <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                      <span css={xw`ml-2`}>Reportar</span>
                    </button>

                    <button type="button" onClick={() => alert('Editar')}>
                      <FontAwesomeIcon icon={faPen} height="1.2rem" />
                      <span css={xw`ml-2`}>Editar</span>
                    </button>

                    <button type="button" onClick={() => alert('Eliminar')}>
                      <FontAwesomeIcon icon={faTrash} height="1.2rem" />
                      <span css={xw`ml-2`}>Eliminar</span>
                    </button>
                  </Options>
                </div>
              </div>

              <p css={xw`mt-4 mb-1`}>{item.comment}</p>
              <em css={xw`text-sm`}>{item.date}</em>
            </section>
          ))}
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
