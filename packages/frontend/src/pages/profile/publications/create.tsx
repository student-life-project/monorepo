import { ERentalPlace } from '@student_life/common';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import Button from '@/components/Button';
import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import BasicStep1 from '@/components/publications/BasicStep1';
import PreviewStep4 from '@/components/publications/PreviewStep4';
import RentalPlaceStep3 from '@/components/publications/RentalPlaceStep3';
import Steps from '@/components/publications/Steps';
import UbicationStep2 from '@/components/publications/UbicationStep2';
import { EPublicationStep, PublicationSteps } from '@/constants';

interface IPublicationData {
  title: string;
  reason: string;
  typeSpace: string;
  gender: ERentalPlace;
  price: string;
  availability: boolean;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  stateCode: string;
  reference: string;
  zone: string;
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

  const onSubmit: SubmitHandler<IPublicationData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    router.push('/profile/publications');
  };

  const previousStep = () => {
    if (step > EPublicationStep.BASIC_INFO) {
      steps[step - 1].completed = false;
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else {
      router.push('/profile/publications');
    }
  };

  const nextStep = () => {
    steps[step].completed = true;
    setStep(step + 1);
    setSteps(steps);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (step === EPublicationStep.BASIC_INFO) {
      setIsValid(basicInfo.some((item) => item === '' || item === undefined));
    } else if (step === EPublicationStep.LOCATION) {
      setIsValid(location.some((item) => item === '' || item === undefined));
    }
  }, [basicInfo, location, step]);

  useEffect(() => {
    reset({ gender: `${ERentalPlace.NO_PREFERENCES}`, availability: true });
  }, [reset]);

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <Steps steps={steps} stepCurrent={step} />

      <BodyContainer css={xw`pt-8 sm:pt-16`}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            />
          )}

          {step === 2 && (
            <RentalPlaceStep3
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          )}

          {step === 3 && (
            <PreviewStep4 nextStep={nextStep} previousStep={previousStep} />
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

                <Button
                  FPrimary
                  type="button"
                  onClick={nextStep}
                  disabled={isValid}
                  css={xw`w-full sm:w-3/12 mb-5 sm:mb-0`}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </BodyContainer>
    </>
  );
};

export default Create;
