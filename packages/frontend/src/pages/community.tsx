// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import Footer from '@/components/common/Footer';

const Content = styled.div`
  ${xw`
    mb-12
    break-words
    text-justify
    text-secondary-1
  `}
`;

const Text = styled.p`
  ${xw`
    mb-5
    block
  `}
`;

const Information: FC = () => (
  <>
    <NavBar allowRequest allowLogin />

    <BreadCrumbs
      items={[
        { link: '/', text: 'Student Life' },
        { link: '/community', text: 'Comunidad' },
      ]}
    />

    <BodyContainer css={xw`pt-0`}>
      <Title>Comunidad</Title>
      <Content>
        <Text>
          Creemos que la etapa universitaria es una de las más importante para
          nuestra vida profesional, por lo tanto diseñar una plataforma que
          ofrezca servicios enfocados en proveer los mejores recursos y
          servicios que apoyarán a los usuarios durante este extenuante, pero
          satisfactorio proceso de la vida universitaria, enfocándonos siempre
          en las necesidades de los estudiantes.
        </Text>

        <Text>
          El alcance de este proyecto pretende desarrollar todas estas
          herramientas e implementarlas en una sóla aplicación web y que los
          usuarios tengan una experiencia amigable con interfaces minimalistas,
          hermosas y fáciles de usar, con todo el contenido de interés para
          ayudar a encontrar lo que buscan.
        </Text>

        <blockquote>
          <Text as="q">
            Crear una comunidad diseñada por estudiantes para estudiantes
          </Text>
          <Text as="cite">-Equipo de Student Life</Text>
        </blockquote>
      </Content>
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
