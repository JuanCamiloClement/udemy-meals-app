import { useContext } from 'react';
import { FavoritesContext } from '../store/context/FavoritesProvider';

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
