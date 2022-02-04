import { ERentalPlace } from '@student_life/common';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import BasicStep1 from '@/components/publications/BasicStep1';
import PreviewStep4 from '@/components/publications/PreviewStep4';
import RentalPlaceStep3 from '@/components/publications/RentalPlaceStep3';
import Steps from '@/components/publications/Steps';
import UbicationStep2 from '@/components/publications/UbicationStep2';
import { PublicationSteps } from '@/constants';

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

  const { handleSubmit, register, control, reset, formState } = useForm({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IPublicationData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // gender -> number to string.
    // router.push('/profile/publications');
  };

  const previousStep = () => {
    if (step > 0) {
      steps[step - 1].completed = false;
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else {
      router.push('/profile/publications');
    }
  };

  const nextStep = () => {
    if (step < 3) {
      steps[step].completed = true;
      setStep(step + 1);
      setSteps(steps);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    reset({ gender: ERentalPlace.NO_PREFERENCES, availability: true });
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
              formState={formState}
              Controller={Controller}
              control={control}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {step === 1 && (
            <UbicationStep2
              register={register}
              formState={formState}
              Controller={Controller}
              control={control}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {step === 2 && (
            <RentalPlaceStep3 nextStep={nextStep} previousStep={previousStep} />
          )}

          {step === 3 && (
            <PreviewStep4 nextStep={nextStep} previousStep={previousStep} />
          )}
        </form>
      </BodyContainer>
    </>
  );
};

export default Create;
