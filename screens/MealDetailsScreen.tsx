import { Text, View } from "react-native";

import type { MealDetailsScreenProps } from "../types/props";

export const MealDetailsScreen = ({ route }: MealDetailsScreenProps) => {
  const { mealId } = route.params;
  return (
    <View>
      <Text>Meal id: {mealId}</Text>
    </View>
  );
};