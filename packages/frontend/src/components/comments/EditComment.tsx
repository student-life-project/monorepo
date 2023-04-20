import { FC, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';
import { getAllComments, updateComment } from '@/store/actions/comments';
import { TElementId } from '@/types';

import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import Modal from '../common/Modal';
import Textarea from '../common/Textarea';

type TEditComment = {
  commentText: string;
  commentId: TElementId;
  closeModal: () => void;
  rentalPlaceId: TElementId;
};

const EditComment: FC<TEditComment> = ({
  commentId,
  closeModal,
  commentText,
  rentalPlaceId,
}) => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const dispatch = useDispatch();
  const comment = watch('comment');

  useEffect(() => {
    reset({ comment: commentText });
  }, [commentText, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await dispatch(updateComment(rentalPlaceId, commentId, data));
    await dispatch(getAllComments(rentalPlaceId));
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
          error={Boolean(errors.comment)}
          messageError={errors.comment?.message as string}
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
