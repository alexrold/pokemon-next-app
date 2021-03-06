import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { MainLayout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavoritesStorage } from '../../utils';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

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
                {isInFavorites ? 'Eliminar de Favoritos' : 'A??adir a Favoritos'}
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
  const { data } = await pokeApi.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonsNames: string[] = data.results.map(pokemon => (pokemon.name));

  return {
    paths: pokemonsNames.map(name => ({
      params: { name }
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,  //60 * 60 * 24
  }
}
export default PokemonByNamePage;