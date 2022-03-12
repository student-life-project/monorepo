// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import ClampedText from '@/components/common/ClampedText';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Textarea from '@/components/common/Textarea';

const Container = styled.section`
  ${xw`
    my-5
    flex
    w-full
    border
    rounded-md
    border-secondary-2
  `}

  height: 39rem;
`;

const ContentMessages = styled.div`
  ${xw`
    p-10 
    w-full
    relative
    overflow-y-auto 
  `}

  height: 28rem;
`;

const messages = [
  {
    from: 'Alfredo',
    to: 'Edgar',
    body: 'Hola Estoy interesado en el alojarme en su vivienda',
    createdAt: '55 minutos',
  },
  {
    from: 'Marcos',
    to: 'Edgar',
    body: 'Hola, como estas?',
    createdAt: '5 minutos',
  },
  {
    from: 'Angie',
    to: 'Edgar',
    body: 'Ya te llego el apago del mes, saludos',
    createdAt: '5 hora',
  },
  {
    from: 'Daniel',
    to: 'Edgar',
    body: 'Hola Estoy interesado en el alojarme en su vivienda',
    createdAt: '55 minutos',
  },
  {
    from: 'Mariana',
    to: 'Edgar',
    body: 'Hola, como estas?',
    createdAt: '5 minutos',
  },
  {
    from: 'Alejandra',
    to: 'Edgar',
    body: 'Ya te llego el apago del mes, saludos',
    createdAt: '5 hora',
  },
  {
    from: 'Nayeli',
    to: 'Edgar',
    body: 'Ya te llego el apago del mes, saludos',
    createdAt: '5 hora',
  },
  {
    from: 'Fatima',
    to: 'Edgar',
    body: 'Ya te llego el apago del mes, saludos',
    createdAt: '5 hora',
  },
];

const Messages: FC = () => {
  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs
        items={[
          { link: '/', text: 'Student Life' },
          { link: '/profile', text: 'Perfil' },
          { link: '/profile/messages', text: 'Mensajes' },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        <Container>
          <div
            css={xw`w-full sm:w-4/12 border-r border-secondary-2 overflow-y-auto`}
          >
            <h1 css={xw`m-5 text-lg font-bold`}>Mensajes</h1>

            {messages.map((item) => (
              <div
                key={item.from}
                css={xw`flex items-center p-5 border-b border-secondary-2 cursor-pointer hover:bg-gray-100`}
              >
                <img
                  src="/images/avatar.png"
                  alt={item.from}
                  css={xw`w-10 h-10 rounded-full bg-gray-400`}
                />

                <div css={xw`pl-5 w-full flex flex-col`}>
                  <div css={xw`flex justify-between`}>
                    <ClampedText lines={1}>
                      <span css={xw`font-semibold`}>{item.from}</span>
                    </ClampedText>
                    <p css={xw`self-start text-xs text-center`}>
                      {item.createdAt}
                    </p>
                  </div>
                  <ClampedText lines={1}>
                    <span css={xw`text-sm`}>{item.body}</span>
                  </ClampedText>
                </div>
              </div>
            ))}
          </div>

          <div css={xw`hidden sm:block sm:w-8/12 relative`}>
            <div
              css={xw`w-full p-5 flex items-center border-b border-secondary-2`}
            >
              <img
                src="/images/avatar.png"
                alt={messages[0].from}
                css={xw`w-10 h-10 rounded-full bg-gray-400`}
              />
              <p css={xw`pl-5 font-semibold`}>{messages[0].from}</p>
            </div>

            <ContentMessages>
              <ul>
                <li css={xw``}>
                  <div css={xw`w-full flex justify-start`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>Hello bro</span>
                      <span css={xw`block text-xs text-right`}>10:30pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-end`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>Hello</span>
                      <span css={xw`block text-xs text-left`}>10:32pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-end`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>how are you?</span>
                      <span css={xw`block text-xs text-left`}>10:32pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-start`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>I am fine</span>
                      <span css={xw`block text-xs text-right`}>10:42pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-start`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>I am fine</span>
                      <span css={xw`block text-xs text-right`}>10:42pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-start`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>I am fine</span>
                      <span css={xw`block text-xs text-right`}>10:42pm</span>
                    </div>
                  </div>
                  <div css={xw`w-full flex justify-start`}>
                    <div
                      css={xw`bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative`}
                    >
                      <span css={xw`block`}>I am fine</span>
                      <span css={xw`block text-xs text-right`}>10:42pm</span>
                    </div>
                  </div>
                </li>
              </ul>
            </ContentMessages>

            <div css={xw`p-3 absolute bottom-0 inset-x-0`}>
              <Textarea id="message" placeholder="Escribe un mensaje..." />
            </div>
          </div>
        </Container>
      </BodyContainer>
    </>
  );
};

export default Messages;
