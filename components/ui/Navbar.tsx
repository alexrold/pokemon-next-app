import Image from 'next/image';
import { Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: theme?.colors.gray900.value,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      padding: '0 20px',
      width: '100%'
    }} >

      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png'
        alt='Icono App'
        width={70}
        height={70}
      />

      <Text
        h1
        size={60}
        css={{ textGradient: '45deg, $blue500 -20%, $pink500 50%' }}
        weight="bold"
      >P</Text>

      <Text
        h1
        size={40}
        css={{ textGradient: '45deg, $purple500 -20%, $pink500 100%' }}
        weight="bold"
      >okémon</Text>

      <Text
        h1
        size={20}
        css={{ textGradient: '45deg, $yellow500 -20%, $red500 100%' }}
      >App</Text>

      <Spacer css={{ flex: 1 }} />
      <Text>Favoritos</Text>
    </div>
  )
}
