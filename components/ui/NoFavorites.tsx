import { Container, Image, Text } from '@nextui-org/react';
export const NoFavorites = () => {
  return (
    <Container css={{
      alignItems: 'center',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      justifyContent: 'center',
    }} >
      <Text h1 >No tienes favoritos todavia</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png'
        alt='PokémonApp'
        width={250}
        height={250}
        css={{ opacity: '0.2' }}
      />

    </Container>
  )
}

