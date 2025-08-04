import { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { MealsList } from '../components/MealsList/MealsList';
// import { useFavorites } from '../hooks/useFavorites';
import { MEALS } from '../data/dummy-data';
import type { RootState } from '../store/redux/store';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const FavoritesScreen = () => {
  // const { ids: favoriteIds } = useFavorites();
  const { ids: favoriteIds } = useSelector((state: RootState) => state.favoriteMeals);

  const meals = useMemo(() => {
    return MEALS.filter(({ id }) => favoriteIds.includes(id));
  }, [favoriteIds]);

  if (!meals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={meals} />;
};
