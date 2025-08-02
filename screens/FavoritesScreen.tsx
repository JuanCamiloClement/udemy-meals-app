import { useMemo } from 'react';

import { MealsList } from '../components/MealsList/MealsList';
import { useFavorites } from '../hooks/useFavorites';
import { MEALS } from '../data/dummy-data';

export const FavoritesScreen = () => {
  const { ids: favoriteIds } = useFavorites();

  const meals = useMemo(() => {
    return MEALS.filter(({ id }) => favoriteIds.includes(id));
  }, [favoriteIds]);

  return <MealsList meals={meals} />;
};
