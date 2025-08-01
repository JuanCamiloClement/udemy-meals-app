import { useCallback } from 'react';
import { View, Text, Pressable, Image, Platform, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MealDetails } from './MealDetails';
import type { Meal } from '../types/meal';
import type { UseNavigationProp } from '../types/props';

type MealItemProps = Pick<Meal, 'id' | 'title' | 'imageUrl' | 'duration' | 'complexity' | 'affordability'>;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }: MealItemProps) => {
  const navigation = useNavigation<UseNavigationProp>();
  const navigateToMealDetails = useCallback(() => {
    navigation.navigate('MealDetails', { mealId: id });
  }, [navigation]);

  return (
    <View style={styles.mealItem}>
      <Pressable style={({ pressed }) => pressed && styles.buttonPressed} onPress={navigateToMealDetails}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};
