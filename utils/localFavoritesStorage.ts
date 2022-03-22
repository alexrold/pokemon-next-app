

const toggleFavorite = (id: number): void => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') {
    return false;
  } else {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
  }
}

const pokemon = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
  existInFavorites,
  pokemon,
  toggleFavorite,
}
