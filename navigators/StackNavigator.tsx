import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DrawerNavigator } from './DrawerNavigator';
import { MealsOverviewScreen } from '../screens/MealsOverviewScreen';
import { MealDetailsScreen } from '../screens/MealDetailsScreen';
import type { StackParamList } from '../types/props';

const Stack = createNativeStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};
