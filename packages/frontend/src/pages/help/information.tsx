import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import InstructionCard from '@/components/common/Card/InstructionCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import Footer from '@/components/Footer';
import HeroImage from '@/components/home/HeroImage';

const Information: FC = () => {
  return (
    <>
      <NavBar allowRequest allowLogin />
      <div css={xw`pt-20 pb-4`}>
        <BreadCrumbs
          items={[
            { link: '/', text: 'Student Life' },
            { link: '/help', text: 'Ayuda' },
            { link: '/help/information', text: 'Información' },
          ]}
        />
      </div>
      <BodyContainer css={xw`pt-0`}>
        <Title>Titulo de la información</Title>
        <div css={xw`text-justify break-words mb-8`}>
          <b>Anunciar una alojamiento</b>
          <br />
          <br />
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
            erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
            consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            Nullam at ligula sed metu. Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
            erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
            consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            Nullam at ligula sed metu Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
            erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
            consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            Nullam at ligula sed metu. Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
            erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
            consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            Nullam at ligula sed metu
            <br />
            <br />
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget
            elementum ligula, vitae pharetra quam. Nullam at ligula sed metu.
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget
            elementum ligula, vitae pharetra quam. Nullam at ligula sed metu
            <br />
            <br />
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget
            elementum ligula, vitae pharetra quam. Nullam at ligula sed metu.
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget
            elementum ligula, vitae pharetra quam. Nullam at ligula sed metu
            <br />
            <br />
          </p>
        </div>
        <div>
          <b>Más información</b>
          <br />
          <br />
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
            erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
            consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            Nullam at ligula sed metu. Lorem ipsum dolor sit amet, conse
          </p>
        </div>
        <div css={xw`my-12 mx-4 md:mx-8 xl:mx-0`}>
          <InstructionCard
            title="Sed ut perspiciatis unde omnis"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro."
            stepsList={[
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
            ]}
            listBullet={faCheckCircle}
            imgUrl="/images/instruction_image.jpg"
          />
        </div>
        <div css={xw`my-8`}>
          <HeroImage
            url="/images/instruction_footer_image.jpg" // <a href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por pch.vector - www.freepik.es</a>
            name="instruction_bottom_image"
          />
        </div>
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Information;
