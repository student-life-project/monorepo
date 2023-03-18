import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import BasicStep1 from '@/components/publications/BasicStep1';
import PreviewStep4 from '@/components/publications/PreviewStep4';
import RentalPlaceStep3 from '@/components/publications/RentalPlaceStep3';
import Steps from '@/components/publications/Steps';
import UbicationStep2 from '@/components/publications/UbicationStep2';
import { EPublicationStep, PublicationSteps } from '@/constants';
import { TStore } from '@/store';
import {
  createPublication,
  getPublication,
  initialStatePublication,
  updatePublication,
} from '@/store/actions/publications';
import { TRootState } from '@/store/reducers';
import { publicationSelector } from '@/store/selectors/publications';
import { IImage, IRentalPlace } from '@/types';
import { scrollTo } from '@/utils/scrollTo';

export interface IPublicationData {
  title: string;
  reason: string;
  typeSpace: string;
  gender: string[];
  price: string;
  availability: boolean;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  stateCode: string;
  reference: string;
  zone: string;
  rentalPlace: string;
  services: string[];
  rules: string[];
  security: string[];
}

type TRedirectData = {
  pathname: string;
  query?: {
    createdPost?: boolean;
    updatedPost?: boolean;
  };
} & any;

const Post: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const post = useSelector(publicationSelector);

  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<IImage[]>([]);
  const [steps, setSteps] = useState(PublicationSteps);

  const {
    reset,
    watch,
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const [isValid, setIsValid] = useState(true);
  const basicInfo = watch(['title', 'reason', 'typeSpace', 'gender', 'price']);

  const location = watch([
    'street',
    'state',
    'city',
    'neighborhood',
    'stateCode',
    'reference',
    'zone',
  ]);

  const rentalPlace = watch(['rentalPlace', 'services', 'rules']);

  const onSubmit: SubmitHandler<IPublicationData> = async (data) => {
    const redirectData: TRedirectData = {
      pathname: '/profile/publications',
      query: {},
    };

    if (post && post._id) {
      await dispatch(
        updatePublication(post._id, {
          ...(data as unknown as IRentalPlace),
          images: files,
        }),
      );

      redirectData.query.updatedPost = true;
    } else {
      await dispatch(
        createPublication({
          ...(data as unknown as IRentalPlace),
          images: files,
        }),
      );
      redirectData.query.createdPost = true;
    }

    router.push(redirectData);
  };

  const previousStep = () => {
    if (step > EPublicationStep.BASIC_INFO) {
      steps[step - 1].completed = false;
      setStep(step - 1);
      scrollTo();
    } else {
      router.push('/profile/publications');
    }
  };

  const nextStep = () => {
    steps[step].completed = true;
    setStep(step + 1);
    setSteps(steps);
    scrollTo();
  };

  const stepBasicInfo = step === EPublicationStep.BASIC_INFO;
  const stepLocation = step === EPublicationStep.LOCATION;
  const stepDraft = step === EPublicationStep.DRAFT;

  const errorStateCode = 'stateCode' in errors && stepLocation;

  const truthy = (val: any) => !val || val?.length === 0 || errorStateCode;

  useEffect(() => {
    if (stepBasicInfo) {
      setIsValid(basicInfo.some(truthy));
    } else if (stepLocation) {
      setIsValid(location.some(truthy));
    } else {
      setIsValid(rentalPlace.some(truthy) || files?.length === 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicInfo, location, rentalPlace, step]);

  useEffect(() => {
    if (post && post._id) {
      reset({
        title: post.title,
        reason: post.reason,
        typeSpace: post.typeSpace,
        gender: post.gender || 'Sin preferencia',
        price: post.price,
        availability: post.availability,
        street: post.address.street,
        state: post.address.state,
        city: post.address.city,
        neighborhood: post.address.cologne,
        stateCode: post.address.stateCode,
        reference: post.address.reference,
        zone: post.address.zone,
        rentalPlace: post.description,
        services: post.services,
        rules: post.rules,
        security: post.security,
      });

      setFiles(
        post.images.map((image) => ({
          ...image,
          id: image?._id,
          url: `${process.env.PUBLIC_IMAGES}/${image?.fullpath}`,
        })),
      );
    } else {
      reset({ gender: 'Sin preferencia', availability: true, security: [] });
    }
  }, [post, reset]);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <Steps steps={steps} stepCurrent={step} />
      <Alert />

      <BodyContainer css={xw`pt-8 sm:pt-16 px-0`}>
        <form onSubmit={handleSubmit(onSubmit)} css={xw`w-full mx-auto px-4`}>
          {step === EPublicationStep.BASIC_INFO && (
            <BasicStep1
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          )}

          {step === EPublicationStep.LOCATION && (
            <UbicationStep2
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
              reference={location[5]?.length}
              zone={location[6]?.length}
              state={location[1]}
            />
          )}

          {step === EPublicationStep.PLACE && (
            <RentalPlaceStep3
              register={register}
              errors={errors}
              rentalPlace={rentalPlace[0]?.length}
              files={files as unknown as File[]}
              setFiles={setFiles as unknown as any}
            />
          )}

          {step === EPublicationStep.DRAFT && (
            <PreviewStep4
              files={files as unknown as File[]}
              getValues={getValues}
            />
          )}

          <div css={xw`flex justify-center mb-10`}>
            <div css={xw`w-full lg:w-8/12`}>
              <div
                css={xw`flex justify-end flex-col-reverse sm:flex-row flex-wrap my-4`}
              >
                <Button
                  BSecondary
                  type="button"
                  onClick={previousStep}
                  css={xw`w-full sm:w-3/12 mb-5 sm:mr-5 sm:mb-0`}
                >
                  Regresar
                </Button>

                {!stepDraft && (
                  <Button
                    FPrimary
                    type="button"
                    onClick={nextStep}
                    disabled={isValid}
                    css={xw`w-full sm:w-3/12 mb-5 sm:mb-0`}
                  >
                    Continuar
                  </Button>
                )}

                {stepDraft && (
                  <Button
                    FPrimary
                    type="submit"
                    disabled={isValid}
                    css={xw`w-full sm:w-3/12 mb-5 sm:mb-0`}
                  >
                    Finalizar
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </BodyContainer>
    </>
  );
};

Post.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { query: any; reduxStore: TStore }) => {
  if (query && query.id) {
    await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
      getPublication(query.id[0]),
    );
  } else {
    await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
      initialStatePublication(),
    );
  }

  return {};
};

export default Post;
