import { useCallback, useLayoutEffect, useMemo } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { MealsOverviewScreenProps } from "../types/props";
import type { Meal } from "../types/meal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export const MealsOverviewScreen = ({
  route,
  navigation,
}: MealsOverviewScreenProps) => {
  const { categoryId, title } = route.params;

  const meals = useMemo(() => {
    return MEALS.filter(({ categoryIds }) => categoryIds.includes(categoryId));
  }, [categoryId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

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
