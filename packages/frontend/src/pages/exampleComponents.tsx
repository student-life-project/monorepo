import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import xw from 'xwind';

import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import Select from '@/components/Select';
import Switch from '@/components/Switch';
import Textarea from '@/components/Textarea';
import { Im01 } from '@/icons';

const Icon = () => (
  <svg
    css={xw`w-4 h-4`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

export const Home: NextPage = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    search: '',
  });

  const { name, email, password, number, search } = input;

  const handleInputChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const [error] = useState({
    show: true,
    message: 'Invalid username field!',
  });

  const { show, message } = error;

  const array = [
    { id: 1, value: 'Activado' },
    { id: 2, value: 'Desactivado' },
  ];

  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <>
      <NavBar allowPublish allowRegister allowLogin />
      <div className="container" css={xw`pt-16`}>
        <Head>
          <title>Student Life</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Im01 css={xw`w-1/4 h-1/4`} />

        <h1 className="title" css={xw`mx-2 font-maven text-crazy`}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>

        <p className="description" css={xw`font-montserrat text-crazy`}>
          Get started by editing
          <code>pages/index.tsx</code>
        </p>

        <Button
          FPrimary
          type="button"
          onClick={() => {
            window.alert('With typescript and Jest');
          }}
        >
          <Icon />
          <span css={xw`mx-2 font-maven font-montserrat`}>Test button</span>
        </Button>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <h1 className="title">Buttons</h1>

        <div css={xw`grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-2`}>
          <Button
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <h1 className="title">Buttons</h1>

        <div css={xw`grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-2`}>
          <Button
            round
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            FSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            FSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            FDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            FWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            BWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            FWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <Icon />
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            round
            BSecondary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            round
            BSuccess
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            round
            BDanger
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            round
            BWarning
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
            <Icon />
          </Button>

          <Button
            disabled
            FPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>

          <Button
            round
            disabled
            BPrimary
            type="button"
            onClick={() => {
              window.alert('With typescript and Jest');
            }}
          >
            <span css={xw`w-full mx-2`}>Test button</span>
          </Button>
        </div>

        <h1 className="title">Inputs</h1>

        <form css={xw`grid grid-cols-2 gap-y-5 gap-x-2`}>
          <div>
            <Label id="label-name" htmlFor="name">
              Nombre
            </Label>
            <Input
              id="name"
              type="name"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label id="label-email" htmlFor="email">
              Correo electronico
            </Label>
            <Input
              required
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="hello@example.com"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label id="label-password" htmlFor="password">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Ingresar contraseña"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label id="label-number" htmlFor="number">
              Número
            </Label>
            <Input
              id="number"
              type="number"
              name="number"
              value={number}
              placeholder="Ingresa Número"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label id="label-search" htmlFor="search">
              Buscar
            </Label>
            <Input
              id="search"
              type="search"
              name="search"
              value={search}
              placeholder="Buscar"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label id="label-disabled" htmlFor="disabled">
              Bloqueado
            </Label>
            <Input
              disabled
              id="disabled"
              type="text"
              name="disabled"
              value=""
              placeholder="Bloqueado"
              onChange={handleInputChange}
            />
          </div>

          <Label id="label-error" htmlFor="error">
            Error
            <Input
              id="error"
              type="text"
              name="error"
              value=""
              error={show}
              placeholder="Error"
              messageError={message}
              onChange={handleInputChange}
            />
          </Label>

          <Label id="label-list" htmlFor="list">
            Lista
            <Input
              id="list"
              type="text"
              name="list"
              value=""
              list="disponibilidad"
              placeholder="Seleccinar"
              onChange={handleInputChange}
            />
            <datalist id="disponibilidad">
              {array.map((item) => (
                <option aria-label="list" key={item.id} value={item.value} />
              ))}
            </datalist>
          </Label>

          <div css={xw`flex flex-col items-start justify-center`}>
            <Checkbox name="room" label="Cuarto" checked />
            <Checkbox name="bath" label="Baño" checked={false} />
            <Checkbox name="bb" label="Nena" checked={false} disabled />
          </div>

          <div css={xw`flex flex-col items-start justify-center`}>
            <Radio name="man" label="Hombre" checked />
            <Radio name="woman" label="Mujer" checked={false} />
            <Radio name="hi" label="Hola" checked={false} disabled />
          </div>

          <Label id="select" htmlFor="select">
            Select
            <Select name="cars1" id="cars1">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </Label>

          <Label id="select" htmlFor="select">
            Select
            <Select name="cars2" id="cars2" disabled>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </Label>

          <Label id="select" htmlFor="select">
            Select
            <Select
              name="cars3"
              id="cars3"
              error={show}
              messageError="Error select"
            >
              <option value="" disabled>
                Seleccione marca
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </Label>

          <Label id="select" htmlFor="select">
            Select
            <Select name="cars4" id="cars4" error={show}>
              <option value="" disabled>
                Seleccione marca
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </Label>

          <Textarea id="message" placeholder="Message..." />

          <div css={xw`flex flex-col items-start justify-center`}>
            <Switch name="Active" label="Activar" checked />
            <Switch name="Desactive" label="Desactivar" checked={false} />
            <Switch name="Blocked" label="Bloquear" checked={false} disabled />
          </div>
        </form>

        <h1 className="title">Text</h1>

        <div css={xw`container`}>
          <div css={xw`grid grid-cols-1 gap-y-3 gap-x-5`}>
            <Accordion title="Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                omnis tempore ullam incidunt tenetur maiores autem, voluptas
                dolorem, ipsam praesentium esse sed ducimus maxime nemo vitae
                necessitatibus error! Quibusdam, laboriosam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                omnis tempore ullam incidunt tenetur maiores autem, voluptas
                dolorem, ipsam praesentium esse sed ducimus maxime nemo vitae
                necessitatibus error! Quibusdam, laboriosam.
              </p>
            </Accordion>

            <Accordion title="Lorem ipsum dolor sit, amet consectetur adipisicing elit tempore ullam incidunt tenetur maiores autem.">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.,
                voluptas dolorem, ipsam praesentium esse sed ducimus maxime nemo
                vitae necessitatibus error! Quibusdam, laboriosam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                omnis tempore ullam incidunt tenetur maiores autem, voluptas
                dolorem, ipsam praesentium esse sed ducimus maxime nemo vitae
                necessitatibus error! Quibusdam, laboriosam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                omnis tempore ullam incidunt tenetur maiores autem, voluptas
                dolorem, ipsam praesentium esse sed ducimus maxime nemo vitae
                necessitatibus error! Quibusdam, laboriosam.
              </p>
            </Accordion>

            <Accordion title="Lorem ipsum dolor sit">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                omnis tempore ullam incidunt tenetur maiores autem, voluptas
                dolorem, ipsam praesentium esse sed ducimus maxime nemo vitae
                necessitatibus error! Quibusdam, laboriosam.
              </p>
            </Accordion>
          </div>
        </div>

        <h1 className="title">Footer</h1>

        <Footer />

        <style jsx>
          {`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding-top: 4rem;
            }

            main {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            footer img {
              margin-left: 0.5rem;
            }

            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            .title a {
              color: #0070f3;
              text-decoration: none;
            }

            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }

            .title {
              margin: 50px 0;
              line-height: 1.15;
              font-size: 4rem;
            }

            .title,
            .description {
              text-align: center;
            }

            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }

            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                monospace;
            }

            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;

              max-width: 800px;
              margin-top: 3rem;
            }

            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }

            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }

            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }

            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}
        </style>

        <style jsx global>
          {`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            * {
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Home;
