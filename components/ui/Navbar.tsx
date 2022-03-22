import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: theme?.colors.gray900.value,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      padding: '5px 25px',
      width: '100%',
    }} >

      <NextLink href='/' passHref >
        <Link>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png'
            alt='Icono PokémonApp'
            width={70}
            height={70}
          />

          <Text
            h2
            size={50}
            css={{ textGradient: '45deg, $blue500 -20%, $pink500 50%' }}
            weight="bold"
          >P</Text>

          <Text
            h2
            size={30}
            css={{ textGradient: '45deg, $purple500 -20%, $pink500 100%', paddingTop: '15px' }}
            weight="bold"
          >okémon</Text>

          <Text
            h2
            size={15}
            css={{ textGradient: '45deg, $yellow500 -20%, $red500 100%' }}
          >App</Text>
        </Link>
      </NextLink>


      <Spacer css={{ flex: '1' }} />
      <NextLink href='/favorites' passHref >
        <Link css={{ marginRight: '10px' }} >
          <Text
            h3
            size={20}
            css={{ textGradient: '45deg, $yellow500 -20%, $red500 100%', paddingTop: '15px' }}
            weight="bold"
          >Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}