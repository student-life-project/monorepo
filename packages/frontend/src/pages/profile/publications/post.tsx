import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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

const Create: FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
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

  const rentalPlace = watch(['rentalPlace', 'services', 'rules', 'security']);

  const onSubmit: SubmitHandler<IPublicationData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    router.push('/profile/publications');
    // Crear mensajes de success, info, warning, error
    toast.success('Sé ha creado la publicación exitosamente'); //! Agregar las alertas en otra vista para que sean visibles.
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
      setIsValid(rentalPlace.some(truthy));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicInfo, location, rentalPlace, step]);

  useEffect(() => {
    reset({ gender: 'Sin preferencia', availability: true });
  }, [reset]);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <Steps steps={steps} stepCurrent={step} />
      <Alert />

      <BodyContainer css={xw`pt-8 sm:pt-16 px-0`}>
        <form onSubmit={handleSubmit(onSubmit)} css={xw`w-full mx-auto px-4`}>
          {step === 0 && (
            <BasicStep1
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          )}

          {step === 1 && (
            <UbicationStep2
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
              reference={location[5]?.length}
              zone={location[6]?.length}
            />
          )}

          {step === 2 && (
            <RentalPlaceStep3
              register={register}
              errors={errors}
              rentalPlace={rentalPlace[0]?.length}
            />
          )}

          {step === 3 && <PreviewStep4 getValues={getValues} />}

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

export default Create;
