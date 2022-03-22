import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { MainLayout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { localFavoritesStorage, getPokemonInfo } from '../../utils';




interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavoritesStorage.existInFavorites(pokemon.id));


  const onToggleFavorite = () => {
    localFavoritesStorage.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      });
    }
  }

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ my: '5px' }} gap={2} >

        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '5px, 20px' }} >
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-imagen.png'}
                height={220}
                width="100%"
                alt={`Imagen ${pokemon.name}`}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
              <Text
                h1
                size={30}
                css={{ textGradient: '45deg, $yellow500 -20%, $red500 100%', paddingRight: 15 }}
                transform='capitalize'
                weight="bold">
                {pokemon.name}
              </Text>

              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={20} >Sprites</Text>
              <Container direction='row' display='flex' gap={0} >
                <Image
                  src={pokemon.sprites.front_default}
                  height={100}
                  width={100}
                  alt={`Imagen ${pokemon.name}`}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  height={100}
                  width={100}
                  alt={`Imagen ${pokemon.name}`}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  height={100}
                  width={100}
                  alt={`Imagen ${pokemon.name}`}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  height={100}
                  width={100}
                  alt={`Imagen ${pokemon.name}`}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout >
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsIds = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonsIds.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    },
  }
}
export default PokemonPage;