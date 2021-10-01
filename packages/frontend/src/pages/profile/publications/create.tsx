import {
  faCheck,
  faHome,
  faInfo,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import BasicStep1 from '@/components/publications/BasicStep1';
import PreviewStep4 from '@/components/publications/PreviewStep4';
import RentalPlaceStep3 from '@/components/publications/RentalPlaceStep3';
import Steps from '@/components/publications/Steps';
import UbicationStep2 from '@/components/publications/UbicationStep2';

const Create: FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([
    {
      title: 'Lo básico',
      icon: faInfo,
      completed: false,
    },
    {
      title: 'Ubicación',
      icon: faMapMarkerAlt,
      completed: false,
    },
    {
      title: 'Vivienda',
      icon: faHome,
      completed: false,
    },
    {
      title: 'Borrador',
      icon: faCheck,
      completed: false,
    },
  ]);

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
    } else {
      router.push('/profile/publications');
    }
  };

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <Steps steps={steps} stepCurrent={step} />

      <BodyContainer css={xw`pt-8 sm:pt-16`}>
        {step === 0 && (
          <BasicStep1 nextStep={nextStep} previousStep={previousStep} />
        )}
        {step === 1 && (
          <UbicationStep2 nextStep={nextStep} previousStep={previousStep} />
        )}
        {step === 2 && (
          <RentalPlaceStep3 nextStep={nextStep} previousStep={previousStep} />
        )}
        {step === 3 && (
          <PreviewStep4 nextStep={nextStep} previousStep={previousStep} />
        )}
      </BodyContainer>
    </>
  );
};

export default Create;
