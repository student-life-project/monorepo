import { FC } from 'react';
import xw from 'xwind';

import Button from '@/components/common/Button';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import PreviewStep4 from '@/components/publications/PreviewStep4';
import {
  NameInput,
  RentalApprovedStatus,
  RentalAvailabilityStatus,
} from '@/constants';

type TPostDetails = {
  admin?: boolean;
  getValues: any;
};

const PostDetails: FC<TPostDetails> = ({ admin, getValues }) => {
  // TODO: Need to implement
  const values = getValues();
  const options = admin ? RentalApprovedStatus : RentalAvailabilityStatus;

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
            <Button BDanger type="button" css={xw`mb-5 sm:mr-5 sm:mb-0`}>
              Eliminar publicación
            </Button>

            <Button FPrimary type="button" css={xw`mb-5 sm:mb-0`}>
              Editar publicación
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
