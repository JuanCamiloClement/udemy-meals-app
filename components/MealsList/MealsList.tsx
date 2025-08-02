import { useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { MealItem } from './MealItem';
import { Meal } from '../../types/meal';

type MealsListProps = {
  meals: Meal[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export const MealsList = ({ meals }: MealsListProps) => {
  const renderMealItem = useCallback(({ item }: { item: Meal }) => {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: Meal) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
