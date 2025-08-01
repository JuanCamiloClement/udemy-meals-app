import { useMemo, useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';

import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetails/Subtitle';
import { List } from '../components/MealDetails/List';
import { MEALS } from '../data/dummy-data';
import type { MealDetailsScreenProps } from '../types/props';
import type { Meal } from '../types/meal';
import { IconButton } from '../components/IconButton';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listsContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingBottom: '10%',
  },
});

export const MealDetailsScreen = ({ route, navigation }: MealDetailsScreenProps) => {
  const { mealId } = route.params;

  const mealData = useMemo(() => MEALS.find((meal) => meal.id === mealId), [mealId]) as Meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon="star" color="white" onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetails
        duration={mealData.duration}
        complexity={mealData.complexity}
        affordability={mealData.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listsContainer}>
        <Subtitle>Ingredients:</Subtitle>
        <List data={mealData.ingredients} />
        <Subtitle>Steps:</Subtitle>
        <List data={mealData.steps} />
      </View>
    </ScrollView>
  );
};
