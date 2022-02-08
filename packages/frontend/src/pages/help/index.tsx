// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import InfoCard from '@/components/faqs/InfoCard';
import ListQuestions from '@/components/faqs/ListQuestons';
import Footer from '@/components/common/Footer';

const Container = styled.div`
  ${xw`
    flex
    mb-12
    flex-col
    md:flex-row
    items-center
    text-justify
    justify-between
    text-secondary-1
  `}
`;

const Content = styled.div`
  ${xw`
    mb-6
    w-full
    md:mb-0
    lg:mr-12
    md:w-5/12
  `}
`;

const ContentQuestions = styled.div`
  ${xw`
    mb-12
    w-full
    text-secondary-1
  `}
`;

const questions = [
  {
    question: '¿Qué es Student Life?',
    answer:
      'Creemos que la etapa universitaria es una de las más importante para nuestra vida profesional, por lo tanto diseñar una plataforma que ofrezca servicios enfocados en proveer los mejores recursos y servicios que apoyarán a los usuarios durante este extenuante, pero satisfactorio proceso de la vida universitaria, enfocándonos siempre en las necesidades de los estudiantes.',
  },
  {
    question: '¿Cuál es nuestra misión?',
    answer:
      'Acompañar a los estudiantes por el camino de la vida profesional, solucionando la mayor parte de sus problemas de inicio para una mejor calidad de vida. Brindar seguridad,comodidad y confianza a los estudiantes en la elección de la vivienda.',
  },
  {
    question: '¿Cuál es nuestra visión?',
    answer:
      'Que todo estudiante de Jalisco foráneo o que planee iniciar su independencia tenga asegurado un lugar seguro, con los servicios que requiere, que se adapte a sus necesidades y disponibilidad económica, disfrutando de su vida estudiantil, sin preocuparse o repudiar donde tiene que vivir.',
  },
  {
    question: '¿Cuál es nuestra fortaleza?',
    answer:
      'Innovamos el mercado enfocándonos en un sector joven, priorizando apoyar su seguridad y economía, con inteligencia artificial y filtros, exclusivamente para ellos.',
  },
  {
    question: '¿Cuáles son nuestros valores?',
    answer:
      'Compromiso: desbordar nuestra pasión con actitud positiva y responsabilidad para lograr la felicidad de nuestros usuarios. Calidad e innovación: filosofía de mejora constante, buscando el óptimo desempeño e integración de nuestros servicios. Respeto: trabajar de manera respetuosa y en equipo, fomentando el profesionalismo y la responsabilidad de los involucrados.',
  },
  {
    question: '¿Cuáles son nuestros objetivos?',
    answer:
      'Ser una plataforma inclusiva, abierta a todo tipo de representación con el mismo ideal de compartir lo mejor de sí mismos, y juntos crear una comunidad sólida. Generar servicios que ayuden a los estudiantes a resolver problemas y/o necesidades. Ser tendencia en el mercado dentro del estado de Jalisco. Ser una plataforma reconocida y competitiva.',
  },
];

const FAQs: NextPage = () => (
  <>
    <NavBar allowRequest allowLogin />
    <BodyContainer>
      <Title>¿Cómo podemos ayudarte?</Title>
      <Container>
        <Content>
          <InfoCard
            clampedLines={2}
            title="Anunciar un alojamiento"
            link="/help/information-publish"
            body="Student Life te ayuda a publicar un cuarto, un departamento completo o cualquier tipo de espacio."
          />
        </Content>
        <Content>
          <InfoCard
            clampedLines={2}
            title="Busco un alojamiento"
            link="/help/information-rentals"
            body="Student Life es una plataforma especializada para estudiantes universitarios, nuestro objetivo es ayudarte a encontrar el alojamiento adecuado para ti."
          />
        </Content>
      </Container>

      <Container>
        <Content>
          <InfoCard
            clampedLines={2}
            title="Términos y condiciones"
            link="/help/terms-and-conditions"
            body="El objeto de los presentes TÉRMINOS Y CONDICIONES es regular el acceso y la utilización del SITIO WEB, entendiendo por éste cualquier tipo de contenido, producto o servicio que se encuentre a disposición del público en general dentro del dominio: https://www.studentlife.com.mx."
          />
        </Content>
        <Content>
          <InfoCard
            clampedLines={2}
            link="/help/privacy"
            title="Política de privacidad"
            body="Su privacidad es importante para nosotros. Es política de Student Life respetar su privacidad y cumplir con cualquier ley y regulación aplicable con respecto a cualquier información personal que podamos recopilar sobre usted, incluso en nuestro sitio web, https://www.studentlife.com.mx."
          />
        </Content>
      </Container>

      <ContentQuestions>
        <Title as="h2" css={xw`text-center`}>
          FAQ
        </Title>
        <ListQuestions questions={questions} />
      </ContentQuestions>
    </BodyContainer>
    <Footer />
  </>
);

export default FAQs;
