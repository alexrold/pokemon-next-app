import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon;
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} key={id} >
      <Card
        hoverable
        clickable
        onClick={onPokemonClick}
      >
        <Card.Body css={{ py: 10, px: 5 }} >
          <Card.Image
            src={img}
            height={160}
            width="100%"
            alt={`Imagen ${name}`}
          />
        </Card.Body>
        <Card.Footer>
          <Row wrap='wrap' justify="space-between">
            <Text css={{ fontWeight: '$bold', color: '$white' }} >{name}</Text>
            <Text css={{ fontWeight: '$bold', color: '$white' }} >#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
