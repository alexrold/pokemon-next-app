import { FC } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Poquemon App'}</title>
        <meta name='author' content='Ronald Betancourt' />
        <meta name='description' content={`Información sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar  */}

      <main>
        {children}
      </main>
    </>
  )
}