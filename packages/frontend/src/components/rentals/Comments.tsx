import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import { confirmMessage, ErrorMessageInput, NameInput } from '@/constants';

import Anchor from '../common/Anchor';
import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import ModalConfirm from '../common/ModalConfirm';
import Textarea from '../common/Textarea';
import ItemComment from './ItemComment';

type TComments = {
  comments: any;
  isLogedIn: boolean;
  openUserReport: () => void;
};

interface ICommentData {
  comment: string;
}

const Comments: FC<TComments> = ({ comments, isLogedIn, openUserReport }) => {
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

  const [showModalDelete, setShowModalDelete] = useState(false);

  const comment = watch('comment');

  const onSubmit: SubmitHandler<ICommentData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
    // Despues de enviar el comentario. enviarle un id de user.
    // Para obetener id, name, userImage, comment y date.
  };

  const handleOpenModalDelete = () => {
    setShowModalDelete(!showModalDelete);
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

          <ItemComment
            comments={comments}
            openUserReport={openUserReport}
            openModalDelete={handleOpenModalDelete}
          />
        </div>
      ) : (
        <div>
          <h2 css={xw`w-full text-lg font-bold py-5`}>
            <Anchor href="/api/auth/login">Iniciar Sesión</Anchor> para ver más
            información de la vivienda como comentarios, calificaciones, etc.
          </h2>
        </div>
      )}

      {showModalDelete && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('comentario')}
          description={confirmMessage.descriptionDelete('comentario')}
          closeModal={handleOpenModalDelete}
          action={() => alert('Hi')}
        />
      )}
    </>
  );
};

export default Comments;
