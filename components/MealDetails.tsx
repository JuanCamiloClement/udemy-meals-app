import { View, Text, StyleSheet } from 'react-native';

import type { Meal } from '../types/meal';

interface MealDetailsProps extends Pick<Meal, 'duration' | 'complexity' | 'affordability'> {
  style?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});

export const MealDetails = ({ duration, complexity, affordability, style, textStyle }: MealDetailsProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration.toString()}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
