import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layouts';
import { FavoritesPokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavoritesStorage } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritesPokemons(localFavoritesStorage.pokemon);
  }, [])


  return (
    <MainLayout title='Pokémons - Favorites' >
      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritesPokemons pokemons={favoritesPokemons} />)
      }
    </MainLayout>
  )
}
export default FavoritesPage