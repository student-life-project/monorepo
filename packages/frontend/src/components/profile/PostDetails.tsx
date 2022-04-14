import { FC, useState } from 'react';
import xw from 'xwind';

import {
  confirmMessage,
  NameInput,
  RentalApprovedStatus,
  RentalAvailabilityStatus,
} from '@/constants';

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

const PostDetails: FC<TPostDetails> = ({ admin, getValues }) => {
  // TODO: Need to implement
  const values = getValues();
  const options = admin ? RentalApprovedStatus : RentalAvailabilityStatus;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div css={xw`flex justify-center mb-10`}>
        <div css={xw`w-full lg:w-8/12`}>
          <h2 css={xw`py-5 text-lg font-bold`}>Publicación # {values.id}</h2>

          <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
            <div>
              <SubTitle>{NameInput.postDetails}</SubTitle>
              <Switch
                checked={values.availability}
                label={
                  <Status status={values.availability} options={options} />
                }
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
          // eslint-disable-next-line no-console
          action={() => console.log('hi')}
        />
      )}
    </>
  );
};

export default PostDetails;
