import { NextPage } from 'next';
import xw from 'xwind';

import NavBar from '@/components/common/NavBar/NavBarContainer';
import InfoCard from '@/components/faqs/InfoCard';
import Footer from '@/components/Footer';

const FAQs: NextPage = () => {
  return (
    <>
      <NavBar allowRequest allowLogin />
      <section
        css={xw`max-w-3xl mx-auto pt-16 font-montserrat px-4 md:container`}
      >
        <h1 css={xw`my-12 text-3xl font-medium`}>¿Cómo podemos ayudarte?</h1>
        <div
          css={xw`flex flex-col items-center justify-between mb-12 md:flex-row`}
        >
          <div css={xw`w-full mb-6 md:w-5/12 md:mb-0 lg:mr-12`}>
            <InfoCard
              clampedLines={2}
              title="Anunciar una alojamiento"
              body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            />
          </div>
          <div css={xw`w-full md:w-5/12`}>
            <InfoCard
              clampedLines={2}
              title="Busco un alojamiento"
              body="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQs;
