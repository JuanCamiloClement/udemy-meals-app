import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string, title: string; };
}

// Screen props
export type CategoriesScreenProps = NativeStackScreenProps<StackParamList, 'MealsCategories'>
export type MealsOverviewScreenProps = NativeStackScreenProps<StackParamList, 'MealsOverview'>

export type UseNavigationProp = NativeStackNavigationProp<StackParamList>