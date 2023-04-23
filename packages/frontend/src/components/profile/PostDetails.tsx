import Link from 'next/link';
import router from 'next/router';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import xw from 'xwind';

import {
  confirmMessage,
  NameInput,
  RentalApprovedStatus,
  RentalAvailabilityStatus,
} from '@/constants';
import {
  changePublicationApproval,
  deletePublication as deleteAdminPublication,
} from '@/store/actions/managePublications';
import {
  changePublicationAvailability,
  deletePublication,
} from '@/store/actions/publications';
import { availablePostFormat } from '@/utils/availablePostFormat';
import { formatDate } from '@/utils/managerDate';

import Alert from '../common/Alert';
import Button from '../common/Button';
import ModalConfirm from '../common/ModalConfirm';
import Status from '../common/Status';
import SubTitle from '../common/SubTitle';
import Switch from '../common/Switch';
import PreviewStep4 from '../publications/PreviewStep4';

type TPostDetails = {
  admin?: boolean;
  values: any;
};

type TRedirectData = {
  pathname: string;
  query?: {
    deletedPost?: boolean;
  };
} & any;

const PostDetails: FC<TPostDetails> = ({ admin, values }) => {
  const dispatch = useDispatch();

  const getValues = () => ({
    ...values,
    ...values.address,
    rentalPlace: values.description,
    neighborhood: values.address.cologne,
  });

  const pathname = admin ? '/profile/admin' : '/profile/publications';
  const initialStatus = admin ? values.approved : values.availability;
  const options = admin ? RentalApprovedStatus : RentalAvailabilityStatus;

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleStatus = async () => {
    setStatus(!status);

    if (admin) {
      // * Admin puede aprobar o no aprobar la publicación. Se dejaría de mostrar en la página, pero no se elimina.
      await dispatch(changePublicationApproval(values._id));
    } else {
      // * Arrendatario puede poner como disponible o no disponible la vivienda, pero se seguirá viendo en la página.
      await dispatch(
        changePublicationAvailability(values._id, availablePostFormat(values)),
      );
    }
  };

  const handleDeletePublication = async () => {
    if (admin) {
      await dispatch(deleteAdminPublication(values._id));
    } else {
      await dispatch(deletePublication(values._id));
    }

    const redirectData: TRedirectData = {
      pathname,
      query: {
        deletedPost: true,
      },
    };

    router.push(redirectData);
  };

  return (
    <>
      <Alert />

      <div css={xw`flex justify-center mb-10`}>
        <div css={xw`w-full lg:w-8/12`}>
          <h2 css={xw`py-5 text-lg font-bold`}>
            Publicación {admin && `# ${values._id}`}
          </h2>

          <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
            <div>
              <SubTitle>{NameInput.postDetails}</SubTitle>
              <Switch
                checked={status}
                onClick={handleStatus}
                label={<Status status={status} options={options} />}
              />
            </div>

            {admin && (
              <>
                <div>
                  <SubTitle>{NameInput.ownerPost}</SubTitle>
                  <p css={xw`font-bold mt-2`}>
                    {values.owner.firstName} {values.owner.lastName}
                  </p>
                </div>

                <div>
                  <SubTitle>{NameInput.date}</SubTitle>
                  <p css={xw`font-bold mt-2`}>
                    {values.creationDate && formatDate(values.creationDate)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <PreviewStep4 getValues={getValues} />

      <div css={xw`flex justify-center mb-10`}>
        <div css={xw`w-full lg:w-8/12`}>
          <div
            css={xw`flex justify-end flex-col-reverse sm:flex-row flex-wrap my-4`}
          >
            <Button
              BDanger
              type="button"
              css={xw`mb-5 sm:mr-5 sm:mb-0`}
              onClick={handleShowModal}
            >
              Eliminar publicación
            </Button>

            {!admin && (
              <Link href={`/profile/publications/post/${values._id}`}>
                <Button FPrimary type="button" css={xw`mb-5 sm:mb-0`}>
                  Editar publicación
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('publicación')}
          description={confirmMessage.descriptionDelete('publicación')}
          closeModal={handleShowModal}
          action={handleDeletePublication}
        />
      )}
    </>
  );
};

export default PostDetails;
