import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string, title: string; };
  MealDetails: { mealId: string };
}

// Screen props
export type CategoriesScreenProps = NativeStackScreenProps<StackParamList, 'MealsCategories'>
export type MealsOverviewScreenProps = NativeStackScreenProps<StackParamList, 'MealsOverview'>
export type MealDetailsScreenProps = NativeStackScreenProps<StackParamList, 'MealDetails'>

export type UseNavigationProp = NativeStackNavigationProp<StackParamList>