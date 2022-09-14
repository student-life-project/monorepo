import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';
import { getComment, updateComment } from '@/store/actions/comments';
import { commentSelector } from '@/store/selectors/comment';
import { TElementId } from '@/types';

import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import Modal from '../common/Modal';
import Textarea from '../common/Textarea';

interface TEditCommentData {
  comment: string;
}

type TEditComment = {
  commentId: TElementId;
  closeModal: () => void;
};

const EditComment: FC<TEditComment> = ({ commentId, closeModal }) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const dispatch = useDispatch();
  const comment = watch('comment');
  const dataComment = useSelector((state) => commentSelector(state));

  useEffect(() => {
    dispatch(getComment(commentId));
    reset({ comment: dataComment.comment });
  }, [commentId, dataComment.comment, dispatch, reset]);

  const onSubmit: SubmitHandler<TEditCommentData> = async (data) => {
    //! Enviar más data necesaria
    dispatch(updateComment(commentId, data));
    closeModal();
  };

  return (
    <Modal
      title="Editar comentario"
      close={closeModal}
      classNames={xw`md:w-1/2`}
    >
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

export default EditComment;
