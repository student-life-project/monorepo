// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';

import Anchor from '@/components/common/Anchor';
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

const Information: FC = () => (
  <>
    <NavBar allowRequest allowLoginRegister />

    <BreadCrumbs
      items={[
        { link: '/', text: 'Student Life' },
        { link: '/help', text: 'Ayuda' },
        { link: '/help/terms-and-conditions', text: 'Términos y condiciones' },
      ]}
    />

    <BodyContainer css={xw`pt-0`}>
      <Title>Términos y condiciones</Title>
      <Content>
        <Text>
          Este contrato describe los términos y condiciones generales (en
          adelante únicamente &quot;TÉRMINOS Y CONDICIONES&quot;) aplicables al
          uso de los contenidos, productos y servicios ofrecidos a través del
          sitio <TextBold>https://www.studentlife.com.mx</TextBold> (en
          adelante, &quot;SITIO WEB&quot;), del cual es titular{' '}
          <TextBold>Student Life</TextBold> (en adelante, &quot;TITULAR&quot;)
          quien tiene su domicilio establecido en México.
        </Text>

        <Text>
          Cualquier persona que desee acceder o hacer uso del sitio o los
          servicios que en él se ofrecen, podrá hacerlo sujetándose a los
          presentes TÉRMINOS Y CONDICIONES, así como a políticas y principios
          incorporados al presente documento. En todo caso, cualquier persona
          que no acepte los presentes términos y condiciones, deberá abstenerse
          de utilizar el SITIO WEB y/o adquirir los productos y servicios que en
          su caso sean ofrecidos.
        </Text>

        <SubTitle>I. Del objeto</SubTitle>

        <Text>
          El objeto de los presentes TÉRMINOS Y CONDICIONES es regular el acceso
          y la utilización del SITIO WEB, entendiendo por éste cualquier tipo de
          contenido, producto o servicio que se encuentre a disposición del
          público en general dentro del dominio:{' '}
          <TextBold>https://www.studentlife.com.mx</TextBold>.
        </Text>

        <Text>
          El TITULAR se reserva la facultad de modificar en cualquier momento y
          sin previo aviso, la presentación, los contenidos, la funcionalidad,
          los productos, los servicios, y la configuración que pudiera estar
          contenida en el SITIO WEB; en este sentido, el USUARIO reconoce y
          acepta que <TextBold>Student Life</TextBold> en cualquier momento
          podrá interrumpir, desactivar o cancelar cualquiera de los elementos
          que conforman el SITIO WEB o el acceso a los mismos.
        </Text>

        <Text>
          El acceso al SITIO WEB por parte del USUARIO tiene carácter libre y,
          por regla general es gratuito sin que el USUARIO tenga que
          proporcionar una contraprestación para poder disfrutar de ello, salvo
          en lo referente al costo de la conexión a internet suministrada por el
          proveedor de este tipo de servicios que hubiere contratado el mismo
          USUARIO.
        </Text>

        <Text>
          El acceso a parte de los contenidos y servicios del SITIO WEB podrá
          realizarse previa suscripción o registro previo del USUARIO.
        </Text>

        <Text>
          El SITIO WEB se encuentra dirigido exclusivamente a personas que
          cuenten con la mayoría de edad (mayores de 18 años); en este sentido,{' '}
          <TextBold>Student Life</TextBold> declina cualquier responsabilidad
          por el incumplimiento de este requisito.
        </Text>

        <Text>
          El SITIO WEB está dirigido principalmente a USUARIOS residentes en la
          República Mexicana, por lo cual, <TextBold>Student Life</TextBold> no
          asegura que el SITIO WEB cumpla total o parcialmente con la
          legislación de otros países, de forma que, si el USUARIO reside o
          tiene su domicilio establecido en otro país y decide acceder o
          utilizar el SITIO WEB lo hará bajo su propia responsabilidad y deberá
          asegurarse de que tal acceso y navegación cumple con la legislación
          local que le es aplicable, no asumiendo{' '}
          <TextBold>Student Life</TextBold> ninguna responsabilidad que se pueda
          derivar de dicho acto.
        </Text>

        <Text>
          Se hace del conocimiento del USUARIO que el TITULAR podrá administrar
          o gestionar el SITIO WEB de manera directa o a través de un tercero,
          lo cual no modifica en ningún sentido lo establecido en los presentes
          TÉRMINOS Y CONDICIONES.
        </Text>

        <SubTitle>II. Del usuario</SubTitle>

        <Text>
          El acceso o utilización del SITIO WEB, así como de los recursos
          habilitados para interactuar entre los USUARIOS, o entre el USUARIO y
          el TITULAR tales como medios para realizar publicaciones o
          comentarios, confiere la condición de USUARIO del SITIO WEB, por lo
          que quedará sujeto a los presentes TÉRMINOS Y CONDICIONES, así como a
          sus ulteriores modificaciones, sin perjuicio de la aplicación de la
          legislación aplicable, por tanto, se tendrán por aceptados desde el
          momento en el que se accede al SITIO WEB. Dada la relevancia de lo
          anterior, se recomienda al USUARIO revisar las actualizaciones que se
          realicen a los presentes TÉRMINOS Y CONDICIONES.
        </Text>

        <Text>
          Es responsabilidad del USUARIO utilizar el SITIO WEB de acuerdo a la
          forma en la que fue diseñado; en este sentido, queda prohibida la
          utilización de cualquier tipo de software que automatice la
          interacción o descarga de los contenidos o servicios proporcionados a
          través del SITIO WEB. Además, el USUARIO se compromete a utilizar la
          información, contenidos o servicios ofrecidos a través del SITIO WEB
          de manera lícita, sin contravenir lo dispuesto en los presentes
          TÉRMINOS Y CONDICIONES, la moral o el orden público, y se abstendrá de
          realizar cualquier acto que pueda suponer una afectación a los
          derechos de terceros, o perjudique de algún modo el funcionamiento del
          SITIO WEB.
        </Text>

        <Text>
          Así mismo, el usuario se compromete a proporcionar información lícita
          y veraz en los formularios habilitados en el SITIO WEB, en los cuales
          el usuario tenga que proporcionar ciertos datos o información para el
          acceso a algún contenido, producto o servicio ofrecido por el propio
          SITIO WEB. En todo caso, el USUARIO notificará de forma inmediata al
          TITULAR acerca de cualquier hecho que permita suponer el uso indebido
          de la información registrada en dichos formularios, tales como, robo,
          extravío, o acceso no autorizado a cuentas y/o contraseñas, con el fin
          de proceder a su inmediata cancelación.
        </Text>

        <Text>
          <TextBold>Student Life</TextBold> se reserva el derecho de retirar
          todos aquellos comentarios y aportaciones que vulneren la ley, el
          respeto a la dignidad de la persona, que sean discriminatorios,
          atenten contra los derechos de tercero o el orden público, o bien, que
          a su juicio no resulten adecuados para su publicación.
        </Text>

        <Text>
          En cualquier caso, <TextBold>Student Life</TextBold> no será
          responsable de las opiniones vertidas por los USUARIOS a través de
          comentarios o publicaciones que estos realicen.
        </Text>

        <Text>
          El sólo acceso al SITIO WEB no supone el establecimiento de ningún
          tipo de relación entre el TITULAR y el USUARIO.
        </Text>

        <Text>
          Al tratarse de un SITIO WEB dirigido exclusivamente a personas que
          cuenten con la mayoría de edad, el USUARIO manifiesta ser mayor de
          edad y disponer de la capacidad jurídica necesaria para sujetarse a
          los presentes TÉRMINOS Y CONDICIONES.
        </Text>

        <SubTitle>III. Del acceso y navegación en el sitio web</SubTitle>

        <Text>
          El TITULAR no garantiza de ningún modo la continuidad y disponibilidad
          de los contenidos, productos o servicios ofrecidos a través del SITIO
          WEB, no obstante, el TITULAR llevará a cabo las acciones que de
          acuerdo a sus posibilidades le permitan mantener el buen
          funcionamiento del SITIO WEB, sin que esto suponga alguna
          responsabilidad de parte de <TextBold>Student Life</TextBold>.
        </Text>

        <Text>
          De igual forma <TextBold>Student Life</TextBold> no será responsable
          ni garantiza que el contenido o software al que pueda accederse a
          través del SITIO WEB, se encuentre libre de errores, software
          malicioso, o que pueda causar algún daño a nivel de software o
          hardware en el equipo a través del cual el USUARIO accede al SITIO
          WEB.
        </Text>

        <Text>
          El TITULAR tampoco se hace responsable de los daños que pudiesen
          ocasionarse por un uso inadecuado del SITIO WEB. En ningún caso{' '}
          <TextBold>Student Life</TextBold> será responsable por las pérdidas,
          daños o perjuicios de cualquier tipo que surjan por el sólo acceso o
          utilización del SITIO WEB.
        </Text>

        <SubTitle>IV. Política de privacidad y protección de datos</SubTitle>

        <Text>
          De conformidad con lo establecido en la Ley Federal de Protección de
          Datos Personales en Posesión de Particulares, el TITULAR se compromete
          a adoptar las medidas necesarias que estén a su alcance para asegurar
          la privacidad de los datos personales recabados de forma que se
          garantice su seguridad, se evite su alteración, pérdida o tratamiento
          no autorizado.
        </Text>

        <Text>
          Además, a efecto de dar cumplimiento a lo establecido en la Ley
          Federal de Protección de Datos Personales en Posesión de Particulares,
          todo dato personal que sea recabado a través del SITIO WEB, será
          tratado de conformidad con los principios de licitud, calidad,
          finalidad, lealtad, y responsabilidad. Todo tratamiento de datos
          personales quedará sujeto al consentimiento de su titular. En todo
          caso, la utilización de datos financieros o patrimoniales, requerirán
          de autorización expresa de sus titulares, no obstante, esta podrá
          darse a través del propio SITIO WEB utilizando los mecanismos
          habilitados para tal efecto, y en todo caso se dará la mayor
          diligencia y cuidado a este tipo de datos. Lo mismo ocurrirá en el
          caso de datos personales sensibles, considerando por estos aquellos
          que debido a una utilización indebida puedan dar origen a
          discriminación o su divulgación conlleve un riesgo para el titular.
        </Text>

        <Text>
          En todo momento se procurará que los datos personales contenidos en
          las bases de datos o archivos que en su caso se utilicen, sean
          pertinentes, correctos y actualizados para los fines para los cuales
          fueron recabados.
        </Text>

        <Text>
          El tratamiento de datos personales se limitará al cumplimiento de las
          finalidades previstas en el{' '}
          <Anchor href="/help/privacy">
            <TextBold>Aviso de Privacidad</TextBold>
          </Anchor>{' '}
          el cual se encontrará disponible en el SITIO WEB.
        </Text>

        <Text>
          El SITIO WEB podrá incluir hipervínculos o enlaces que permitan
          acceder a páginas web de terceros distintos de{' '}
          <TextBold>Student Life</TextBold>. Los titulares de dichos sitios web
          dispondrán de sus propias políticas de privacidad y protección de
          datos, por lo cual <TextBold>Student Life</TextBold> no asume ningún
          tipo de responsabilidad por los datos que san facilitados por el
          USUARIO a través de cualquier sitio web distinto a{' '}
          <TextBold>https://www.studentlife.com.mx</TextBold>.
        </Text>

        <Text>
          <TextBold>Student Life</TextBold> se reserva el derecho a modificar su
          Política de Privacidad, de acuerdo a sus necesidades o derivado de
          algún cambio en la legislación. El acceso o utilización del SITIO WEB
          después de dichos cambios, implicará la aceptación de estos cambios.
        </Text>

        <Text>
          Por otra parte, el acceso al SITIO WEB puede implicar la utilización
          de cookies, las cuales, son pequeñas cantidades de información que se
          almacenan en el navegador utilizado por el USUARIO. Las cookies
          facilitan la navegación, la hacen más amigable, y no dañan el
          dispositivo de navegación, para ello, pueden recabar información para
          ingresar al SITIO WEB, almacenar las preferencias del USUARIO, así
          como la interacción que este tenga con el SITIO WEB, como por ejemplo:
          la fecha y hora en la que se accede al SITIO WEB, el tiempo que se ha
          hecho uso de este, los sitios visitados antes y después del mismo, el
          número de páginas visitadas, la dirección IP de la cual accede el
          usuario, la frecuencia de visitas, etc.
        </Text>

        <Text>
          Este tipo de información será utilizada para mejorar el SITIO WEB,
          detectar errores, y posibles necesidades que el USUARIO pueda tener,
          lo anterior a efecto de ofrecer a los USUARIOS servicios y contenidos
          de mejor calidad. En todo caso, la información que se recopile será
          anónima y no se identificará a usuarios individuales.
        </Text>

        <Text>
          En caso de que el USUARIO no desee que se recopile este tipo de
          información deberá deshabilitar, rechazar, restringir y/o eliminar el
          uso de cookies en su navegador de internet. Los procedimientos para
          realizar estas acciones pueden diferir de un navegador a otro; en
          consecuencia, se sugiere revisar las instrucciones facilitadas por el
          desarrollador del navegador. En el supuesto de que rechace el uso de
          cookies (total o parcialmente) el USUARIO podrá continuar haciendo uso
          del SITIO WEB, aunque podrían quedar deshabilitadas algunas de las
          funciones del mismo.
        </Text>

        <Text>
          Es posible que en el futuro estas políticas respecto a las cookies
          cambien o se actualicen, por ello es recomendable revisar las
          actualizaciones que se realicen a los presentes TÉRMINOS Y
          CONDICIONES, con objetivo de estar adecuadamente informado sobre cómo
          y para qué utilizamos las cookies que se generan al ingresar o hacer
          uso del SITIO WEB.
        </Text>

        <SubTitle>V. Política de enlaces</SubTitle>

        <Text>
          El SITIO WEB puede contener enlaces, contenidos, servicios o
          funciones, de otros sitios de internet pertenecientes y/o gestionados
          por terceros, como por ejemplo imágenes, videos, comentarios, motores
          de búsqueda, etc.
        </Text>

        <Text>
          La utilización de estos enlaces, contenidos, servicios o funciones,
          tiene por objeto mejorar la experiencia del USUARIO al hacer uso del
          SITIO WEB, sin que pueda considerarse una sugerencia, recomendación o
          invitación para hacer uso de sitios externos.{' '}
          <TextBold>Student Life</TextBold> en ningún caso revisará o controlará
          el contenido de los sitios externos, de igual forma, no hace propios
          los productos, servicios, contenidos, y cualquier otro material
          existente en los referidos sitios enlazados; por lo cual, tampoco se
          garantizará la disponibilidad, exactitud, veracidad, validez o
          legalidad de los sitios externos a los que se pueda tener acceso a
          través del SITIO WEB. Así mismo, el TITULAR no asume ninguna
          responsabilidad por los daños y perjuicios que pudieran producirse por
          el acceso o uso, de los contenidos, productos o servicios disponibles
          en los sitios web no gestionados por <TextBold>Student Life</TextBold>{' '}
          a los que se pueda acceder mediante el SITIO WEB.
        </Text>

        <SubTitle>
          VI. Política en materia de propiedad intelectual e industrial
        </SubTitle>

        <Text>
          <TextBold>Student Life</TextBold> por sí o como parte cesionaria, es
          titular de todos los derechos de propiedad intelectual e industrial
          del SITIO WEB, entendiendo por éste el código fuente que hace posible
          su funcionamiento así como las imágenes, archivos de audio o video,
          logotipos, marcas, combinaciones de colores, estructuras, diseños y
          demás elementos que lo distinguen. Serán, por consiguiente, protegidas
          por la legislación mexicana en materia de propiedad intelectual e
          industrial, así como por los tratados internacionales aplicables. Por
          consiguiente, queda expresamente prohibida la reproducción,
          distribución, o difusión de los contenidos del SITIO WEB, con fines
          comerciales, en cualquier soporte y por cualquier medio, sin la
          autorización de <TextBold>Student Life</TextBold>.
        </Text>

        <Text>
          El USUARIO se compromete a respetar los derechos de propiedad
          intelectual e industrial del TITULAR. No obstante, además de poder
          visualizar los elementos del SITIO WEB podrá imprimirlos, copiarlos o
          almacenarlos, siempre y cuando sea exclusivamente para su uso
          estrictamente personal.
        </Text>

        <Text>
          Por otro lado, el USUARIO, se abstendrá de suprimir, alterar, o
          manipular cualquier elemento, archivo, o contenido, del SITIO WEB, y
          por ningún motivo realizará actos tendientes a vulnerar la seguridad,
          los archivos o bases de datos que se encuentren protegidos, ya sea a
          través de un acceso restringido mediante un usuario y contraseña, o
          porque no cuente con los permisos para visualizarlos, editarlos o
          manipularlos.
        </Text>

        <Text>
          En caso de que el USUARIO o algún tercero consideren que cualquiera de
          los contenidos del SITIO WEB suponga una violación de los derechos de
          protección de la propiedad industrial o intelectual, deberá
          comunicarlo inmediatamente a <TextBold>Student Life</TextBold> a
          través de los datos de contacto disponibles en el propio SITIO WEB y/o
          a través de los siguientes medios:
        </Text>

        <Text css={xw`text-left`}>
          Correo electrónico:{' '}
          <Anchor href="mailto:info@studentlife.com.mx">
            <TextBold>info@studentlife.com.mx</TextBold>
          </Anchor>
        </Text>

        <SubTitle>VII. Alojamientos</SubTitle>

        <Text>
          Nos deslindamos de cualquier responsabilidad de daños a la vivienda y
          conflictos de pago o acuerdos entre el arrendatario y el inquilino.
          Los USUARIOS pueden reportar alojamientos y usuarios por información
          fraudulenta o comportamiento inadecuado que pueda afectar a los
          USUARIOS en el SITIO WEB.
        </Text>

        <SubTitle>VIII. Legislación y jurisdicción aplicable</SubTitle>

        <Text>
          <TextBold>Student Life</TextBold> se reserva la facultad de presentar
          las acciones civiles o penales que considere necesarias por la
          utilización indebida del SITIO WEB, sus contenidos, productos o
          servicios, o por el incumplimiento de los presentes TÉRMINOS Y
          CONDICIONES.
        </Text>

        <Text>
          La relación entre el USUARIO y <TextBold>Student Life</TextBold> se
          regirá por la legislación vigente en México, específicamente en
          Jalisco. De surgir cualquier controversia en relación a la
          interpretación y/o a la aplicación de los presentes TÉRMINOS Y
          CONDICIONES, las partes se someterán a la jurisdicción ordinaria de
          los tribunales que correspondan conforme a derecho en el estado al que
          se hace referencia.
        </Text>
      </Content>
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
