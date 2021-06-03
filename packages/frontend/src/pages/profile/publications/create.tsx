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

  const stepBack = () => {
    setStep((s) => s - 1);
    window.scrollTo(0, 0);
  };

  const complateStep1 = () => {
    steps[0].completed = true;
    setStep(1);
    setSteps(steps);
    window.scrollTo(0, 0);
  };

  const complateStep2 = () => {
    steps[1].completed = true;
    setStep(2);
    setSteps(steps);
    window.scrollTo(0, 0);
  };

  const complateStep3 = () => {
    steps[2].completed = true;
    setStep(3);
    setSteps(steps);
    window.scrollTo(0, 0);
  };

  const complateStep4 = () => {
    steps[3].completed = true;
    setSteps(steps);
    router.push('/profile/publications');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <Steps steps={steps} stepCurrent={step} />

      <BodyContainer css={xw`pt-8 sm:pt-16`}>
        {step === 0 && <BasicStep1 complateStep1={complateStep1} />}
        {step === 1 && (
          <UbicationStep2 complateStep2={complateStep2} stepBack={stepBack} />
        )}
        {step === 2 && (
          <RentalPlaceStep3 complateStep3={complateStep3} stepBack={stepBack} />
        )}
        {step === 3 && (
          <PreviewStep4 complateStep4={complateStep4} stepBack={stepBack} />
        )}
      </BodyContainer>
    </>
  );
};

export default Create;
