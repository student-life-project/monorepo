import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import xw from 'xwind';

import { confirmMessage, ErrorMessageInput, NameInput } from '@/constants';
import { createComment, deleteComment } from '@/store/actions/comments';
import { TElementId } from '@/types';

import Anchor from '../common/Anchor';
import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import ModalConfirm from '../common/ModalConfirm';
import Textarea from '../common/Textarea';
import EditComment from './EditComment';
import ItemComment from './ItemComment';

type TComments = {
  comments: any;
  userId: TElementId;
  isLogedIn: boolean;
  openUserReport: () => void;
};

interface ICommentData {
  comment: string;
}

const Comments: FC<TComments> = ({
  userId,
  comments,
  isLogedIn,
  openUserReport,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState<TElementId>(null);

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const comment = watch('comment');

  const onSubmit: SubmitHandler<ICommentData> = async (data) => {
    //! Despues de enviar el comentario. enviarle un id de user.
    //! Para obtener id, name, userImage, comment y date.
    dispatch(createComment(data));
    reset();
  };

  const handleOpenModalEdit = (id: TElementId) => {
    setShowModalEdit(!showModalEdit);
    setCommentId(id);
  };

  const handleCloseModalEdit = () => {
    setShowModalEdit(false);
  };

  const handleOpenModalDelete = (id: TElementId) => {
    setShowModalDelete(true);
    setCommentId(id);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
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
            userId={userId}
            comments={comments}
            openUserReport={openUserReport}
            openModalDelete={handleOpenModalDelete}
            openModalEdit={handleOpenModalEdit}
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

      {showModalEdit && (
        <EditComment commentId={commentId} closeModal={handleCloseModalEdit} />
      )}

      {showModalDelete && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('comentario')}
          description={confirmMessage.descriptionDelete('comentario')}
          closeModal={handleCloseModalDelete}
          action={() => dispatch(deleteComment(commentId))}
        />
      )}
    </>
  );
};

export default Comments;
