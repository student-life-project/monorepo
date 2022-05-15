import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';

import Button from '../common/Button';
import DoubleSpace from '../common/DoubleSpace';
import Modal from '../common/Modal';
import Textarea from '../common/Textarea';

interface TEditCommentData {
  comment: string;
}

type TEditComment = {
  closeModal: () => void;
};

const EditComment: FC<TEditComment> = ({ closeModal }) => {
  // TODO: need to implement
  // Editar el comentario

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const comment = watch('comment');

  const onSubmit: SubmitHandler<TEditCommentData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
