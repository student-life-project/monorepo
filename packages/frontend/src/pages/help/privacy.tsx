// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Anchor from '@/components/common/Anchor';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import { ItemsPrivacy } from '@/constants';

const Content = styled.div`
  ${xw`
    mb-12
    break-words
    text-justify
    text-secondary-1
  `}
`;

const SubTitle = styled.h2`
  ${xw`
    my-10
    text-lg
    font-bold
  `}
`;

const Text = styled.p`
  ${xw`
    mb-5
  `}
`;

const TextBold = styled.span`
  ${xw`
    font-bold
  `}
`;

const List = styled.ul`
  ${xw`
    mb-5
    list-disc
    list-inside
  `}
`;

const Information: FC = () => (
  <>
    <NavBar allowRequest allowLoginRegister />

    <BreadCrumbs items={ItemsPrivacy} />

    <BodyContainer css={xw`pt-0`}>
      <Title>Política de privacidad</Title>
      <Content>
        <Text>
          Su privacidad es importante para nosotros. Es política de Student Life
          respetar su privacidad y cumplir con cualquier ley y regulación
          aplicable con respecto a cualquier información personal que podamos
          recopilar sobre usted, incluso en nuestro sitio web,{' '}
          <TextBold>https://www.studentlife.com.mx</TextBold>.
        </Text>

        <Text>
          Esta política es efectiva a partir del 17 de mayo de 2021 y se
          actualizó por última vez el 17 de mayo de 2021.
        </Text>

        <SubTitle>Información que recopilamos</SubTitle>

        <Text>
          La información que recopilamos incluye tanto la información que nos
          proporciona consciente y activamente cuando utiliza o participa en
          cualquiera de nuestros productos, servicios y contenidos, y cualquier
          información enviada automáticamente por sus dispositivos en el acceso
          a nuestros productos, servicios y contenidos.
        </Text>

        <SubTitle>Dato de registro</SubTitle>

        <Text>
          Cuando visita nuestro sitio web, nuestros servidores pueden registrar
          automáticamente los datos estándar proporcionados por su navegador
          web. Puede incluir la dirección de Protocolo de Internet (IP) de su
          dispositivo, el tipo y la versión de su navegador, las páginas que
          visita, la hora y la fecha de su visita, el tiempo que pasa en cada
          página, otros detalles sobre su visita y los detalles técnicos que
          ocurren junto con cualquier error que pueda encontrar.
        </Text>

        <Text>
          Tenga en cuenta que, si bien es posible que esta información no sea de
          identificación personal por sí misma, es posible combinarla con otros
          datos para identificar personalmente a personas individuales.
        </Text>

        <SubTitle>Información personal</SubTitle>

        <Text>
          Podemos solicitar información personal que puede incluir uno o más de
          los siguientes:
        </Text>

        <List>
          <li>Nombre.</li>
          <li>Correo electrónico.</li>
          <li>Perfiles de redes sociales.</li>
          <li>Fecha de nacimiento.</li>
          <li>Número de teléfono / móvil.</li>
          <li>Casa / dirección postal.</li>
        </List>

        <SubTitle>
          Razones legítimas para procesar su información personal
        </SubTitle>

        <Text>
          Solo recopilamos y usamos su información personal cuando tenemos una
          razón legítima para hacerlo. En cuyo caso, solo recopilamos
          información personal que sea razonablemente necesaria para brindarle
          nuestros servicios.
        </Text>

        <SubTitle>Recopilación y uso de información</SubTitle>

        <Text>
          Podemos recopilar información personal de usted cuando realiza
          cualquiera de las siguientes acciones en nuestro sitio web:
        </Text>

        <List>
          <li>
            Regístrese para recibir actualizaciones nuestras por correo
            electrónico o canales de redes sociales.
          </li>
          <li>
            Utilice un dispositivo móvil o un navegador web para acceder a
            nuestro contenido.
          </li>
          <li>
            Contáctenos por correo electrónico, redes sociales o cualquier
            tecnología similar.
          </li>
          <li>Cuando nos mencionas en las redes sociales.</li>
        </List>

        <Text>
          Podemos recopilar, retener, usar y divulgar información para los
          siguientes propósitos, y la información personal no se procesa más de
          una manera que sea incompatible con estos propósitos:
        </Text>

        <List>
          <li>
            Para permitirle personalizar o personalizar su experiencia en
            nuestro sitio web.
          </li>
          <li>Para contactar y comunicarnos contigo.</li>
          <li>
            Para análisis, investigación de mercado y desarrollo comercial,
            incluso para operar y mejorar nuestro sitio web, aplicaciones
            asociadas y plataformas de redes sociales asociadas.
          </li>
          <li>
            Para permitirle acceder y utilizar nuestro sitio web, aplicaciones
            asociadas y plataformas de redes sociales asociadas.
          </li>
          <li>
            Para fines administrativos y de mantenimiento de registros internos.
          </li>
          <li>
            Para la seguridad y la prevención del fraude, y para garantizar que
            nuestros sitios y aplicaciones sean seguros y se utilicen de acuerdo
            con nuestros términos y condiciones.
          </li>
        </List>

        <Text>
          Tenga en cuenta que podemos combinar la información que recopilamos
          sobre usted con información general o datos de investigación que
          recibimos de otras fuentes confiables.
        </Text>

        <SubTitle>Seguridad de su información personal</SubTitle>

        <Text>
          Cuando recopilamos y procesamos información personal, y mientras
          conservamos esta información, la protegeremos dentro de medios
          comercialmente aceptables para evitar pérdidas y robos, así como
          acceso, divulgación, copia, uso o modificación no autorizados.
        </Text>

        <Text>
          Aunque haremos todo lo posible para proteger la información personal
          que nos proporcione, le aconsejamos que ningún método de transmisión o
          almacenamiento electrónico es 100% seguro y nadie puede garantizar la
          seguridad absoluta de los datos. Cumpliremos con las leyes que nos
          sean aplicables con respecto a cualquier violación de datos.
        </Text>

        <Text>
          Usted es responsable de seleccionar cualquier contraseña y su nivel de
          seguridad general, garantizando la seguridad de su propia información
          dentro de los límites de nuestros servicios.
        </Text>

        <SubTitle>Cuánto tiempo conservamos su información personal</SubTitle>

        <Text>
          Conservamos su información personal sólo durante el tiempo que sea
          necesario. Este período de tiempo puede depender de para qué estamos
          usando su información, de acuerdo con esta política de privacidad. Si
          su información personal ya no es necesaria, la eliminaremos o la
          haremos anónima eliminando todos los detalles que lo identifiquen.
        </Text>

        <Text>
          Sin embargo, si es necesario, podemos retener su información personal
          para nuestro cumplimiento de una obligación legal, contable o de
          informes o para fines de archivo en el interés público, fines de
          investigación científica o histórica o fines estadísticos.
        </Text>

        <SubTitle>Divulgación de información personal a terceros</SubTitle>

        <Text>Podemos divulgar información personal a:</Text>

        <List>
          <li>
            Una empresa matriz, subsidiaria o afiliada de nuestro sitio web.
          </li>
          <li>
            Proveedores de servicios de terceros con el fin de permitirles
            proporcionar sus servicios, por ejemplo, proveedores de servicios de
            TI, proveedores de almacenamiento, alojamiento y servidores de
            datos, anunciantes o plataformas de análisis.
          </li>
          <li>
            Nuestros empleados, contratistas y / o entidades relacionadas.
          </li>
          <li>
            Nuestros agentes o socios comerciales existentes o potenciales.
          </li>
          <li>
            Patrocinadores o promotores de cualquier competencia, sorteo o
            promoción que organicemos.
          </li>
          <li>
            Cortes, tribunales, autoridades reguladoras y funcionarios
            encargados de hacer cumplir la ley, según lo requiera la ley, en
            relación con cualquier procedimiento legal actual o futuro, o para
            establecer, ejercer o defender nuestros derechos legales.
          </li>
          <li>
            Terceros, incluidos agentes o subcontratistas, que nos ayudan a
            proporcionar información, productos, servicios o marketing directo a
            terceros para recopilar y procesar datos.
          </li>
        </List>

        <SubTitle>
          Transferencias internacionales de información personal
        </SubTitle>

        <Text>
          La información personal que recopilamos se almacena y / o procesa
          donde nosotros o nuestros socios, afiliados y proveedores externos
          tenemos instalaciones. Tenga en cuenta que las ubicaciones a las que
          almacenamos, procesamos o transferimos su información personal pueden
          no tener las mismas leyes de protección de datos que el país en el que
          inicialmente proporcionó la información. Si transferimos su
          información personal a terceros en otros países: (I) realizaremos esas
          transferencias de acuerdo con los requisitos de la ley aplicable; y
          (II) protegeremos la información personal transferida de acuerdo con
          esta política de privacidad.
        </Text>

        <SubTitle>Sus derechos y control de su información personal</SubTitle>

        <Text>
          Siempre se reserva el derecho a retenernos información personal, en el
          entendido de que su experiencia en nuestro sitio web puede verse
          afectada. No lo discriminamos por ejercer cualquiera de sus derechos
          sobre su información personal. Si nos proporciona información
          personal, comprende que la recopilaremos, la conservaremos, la
          usaremos y la divulgaremos de acuerdo con esta política de privacidad.
          Conserva el derecho a solicitar detalles de cualquier información
          personal que tengamos sobre usted.
        </Text>

        <Text>
          Si recibimos información personal sobre usted de un tercero, la
          protegeremos como se establece en esta política de privacidad. Si
          usted es un tercero que proporciona información personal sobre otra
          persona, declara y garantiza que tiene el consentimiento de dicha
          persona para proporcionarnos la información personal.
        </Text>

        <Text>
          Si previamente ha aceptado que usemos su información personal con
          fines de marketing directo, puede cambiar de opinión en cualquier
          momento. Le proporcionaremos la posibilidad de darnos de baja de
          nuestra base de datos de correo electrónico u optar por no recibir
          comunicaciones. Tenga en cuenta que es posible que necesitemos
          solicitarle información específica para ayudarnos a confirmar su
          identidad.
        </Text>

        <Text>
          Si cree que la información que tenemos sobre usted es inexacta,
          desactualizada, incompleta, irrelevante o engañosa, comuníquese con
          nosotros utilizando los detalles proporcionados en esta política de
          privacidad. Tomaremos medidas razonables para corregir cualquier
          información que se considere inexacta, incompleta, engañosa o
          desactualizada.
        </Text>

        <Text>
          Si cree que hemos violado una ley de protección de datos relevante y
          desea presentar una queja, comuníquese con nosotros utilizando los
          detalles a continuación y bríndenos todos los detalles de la supuesta
          violación. Investigaremos su queja de inmediato y le responderemos,
          por escrito, exponiendo el resultado de nuestra investigación y los
          pasos que tomaremos para tratar su queja. También tiene derecho a
          ponerse en contacto con un organismo regulador o una autoridad de
          protección de datos en relación con su queja.
        </Text>

        <SubTitle>Uso de cookies</SubTitle>

        <Text>
          Usamos &quot;cookies&quot; para recopilar información sobre usted y su
          actividad en nuestro sitio. Una cookie es un pequeño fragmento de
          datos que nuestro sitio web almacena en su computadora y al que accede
          cada vez que lo visita, para que podamos comprender cómo utiliza
          nuestro sitio. Esto nos ayuda a ofrecerle contenido según las
          preferencias que haya especificado.
        </Text>

        <SubTitle>Límites de nuestra política</SubTitle>

        <Text>
          Tenga en cuenta que no tenemos control sobre el contenido y las
          políticas de esos sitios, y no podemos aceptar responsabilidad u
          obligación por sus respectivas prácticas de privacidad.
        </Text>

        <SubTitle>Cambios a esta política</SubTitle>

        <Text>
          A nuestra discreción, podemos cambiar nuestra política de privacidad
          para reflejar actualizaciones de nuestros procesos comerciales,
          prácticas aceptables actuales o cambios legislativos o regulatorios.
          Si decidimos cambiar esta política de privacidad, publicaremos los
          cambios aquí en el mismo enlace mediante el cual accede a esta
          política de privacidad.
        </Text>

        <Text>
          Si así lo requiere la ley, obtendremos su permiso o le daremos la
          oportunidad de optar por participar u optar por no participar, según
          corresponda, de cualquier nuevo uso de su información personal.
        </Text>

        <SubTitle>Contactanos</SubTitle>

        <Text>
          Para cualquier pregunta o inquietud con respecto a su privacidad,
          puede comunicarse con nosotros utilizando los siguientes detalles:
        </Text>

        <Text css={xw`text-left`}>
          Correo electrónico:{' '}
          <Anchor href="mailto:info@studentlife.com.mx">
            <TextBold>info@studentlife.com.mx</TextBold>
          </Anchor>
        </Text>
      </Content>
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
