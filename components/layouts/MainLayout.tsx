import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {
  title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Ronald Betancourt' />
        <meta name='description' content={`Información sobre el pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokémon, pokédex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}