import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

export type DrawerParamList = {
  MealsCategories: undefined;
  Favorites: undefined;
};

export type StackParamList = {
  Drawer: undefined;
  MealsOverview: { categoryId: string; title: string };
  MealDetails: { mealId: string };
};

// Stack Navigator screen props
export type MealsOverviewScreenProps = NativeStackScreenProps<StackParamList, 'MealsOverview'>;
export type MealDetailsScreenProps = NativeStackScreenProps<StackParamList, 'MealDetails'>;

// Drawer Navigator screen props
export type CategoriesScreenProps = NativeStackScreenProps<DrawerParamList, 'MealsCategories'>;
export type FavoritesScreenProps = NativeStackScreenProps<DrawerParamList, 'Favorites'>;

export type UseNavigationProp = NativeStackNavigationProp<StackParamList>;
