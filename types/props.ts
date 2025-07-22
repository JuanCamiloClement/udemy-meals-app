import { NativeStackScreenProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
}

// Screen props
export type CategoriesScreenProps = NativeStackScreenProps<StackParamList, 'Categories'>
export type MealsOverviewScreenProps = NativeStackScreenProps<StackParamList, 'MealsOverview'>

export type UseNavigationProp = NativeStackNavigationProp<StackParamList>