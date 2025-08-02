import { useLayoutEffect, useMemo } from 'react';

import { MEALS } from '../data/dummy-data';
import { MealsOverviewScreenProps } from '../types/props';
import { MealsList } from '../components/MealsList/MealsList';

export const MealsOverviewScreen = ({ route, navigation }: MealsOverviewScreenProps) => {
  const { categoryId, title } = route.params;

  const meals = useMemo(() => {
    return MEALS.filter(({ categoryIds }) => categoryIds.includes(categoryId));
  }, [categoryId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  return <MealsList meals={meals} />;
};
