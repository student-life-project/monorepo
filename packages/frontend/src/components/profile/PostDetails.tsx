import router from 'next/router';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import xw from 'xwind';

import {
  confirmMessage,
  NameInput,
  RentalApprovedStatus,
  RentalAvailabilityStatus,
} from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';

import Alert from '../common/Alert';
import Button from '../common/Button';
import ModalConfirm from '../common/ModalConfirm';
import Status from '../common/Status';
import SubTitle from '../common/SubTitle';
import Switch from '../common/Switch';
import PreviewStep4 from '../publications/PreviewStep4';

type TPostDetails = {
  admin?: boolean;
  getValues: any;
};

type TRedirectData = {
  pathname: string;
  query?: {
    deletedPublication?: boolean;
  };
} & any;

// TODO: Need to implement
const PostDetails: FC<TPostDetails> = ({ admin, getValues }) => {
  const values = getValues();

  const alertMsg = admin ? 'aprobación' : 'disponibilidad';
  const pathname = admin ? '/profile/admin' : '/profile/publications';
  const initialStatus = admin ? values.approved : values.availability;
  const options = admin ? RentalApprovedStatus : RentalAvailabilityStatus;

  const [status, setStatus] = useState(initialStatus);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleStatus = () => {
    setStatus(!status);
    toast.success(AlertMessage.updated(alertMsg));

    // TODO: diferentes endpoints a ejecutar dependiendo del tipo de usuario:
    // TODO: Admin puede aprobar o no aprobar la publicación. se dejaria de mostrar en la pagina, pero no se elimina.
    // TODO: Arrendatario puede poner como disponible o no disponible la vivienda, pero se seguira viendo en la página.
  };

  const handleDeletePublication = () => {
    // TODO: id de publicación para eliminarlo

    // TODO: onSuccess y onError alerts
    const redirectData: TRedirectData = {
      pathname,
      query: {
        deletedPublication: true,
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
            Publicación {admin && `# ${values.id}`}
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

            <div>
              <SubTitle>{NameInput.ownerPost}</SubTitle>
              <p css={xw`font-bold mt-2`}>{values.owner}</p>
            </div>

            <div>
              <SubTitle>{NameInput.date}</SubTitle>
              <p css={xw`font-bold mt-2`}>{values.date}</p>
            </div>
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
              <Button FPrimary type="button" css={xw`mb-5 sm:mb-0`}>
                Editar publicación
              </Button>
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
