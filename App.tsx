import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import type { StackParamList } from './types/props';

const Stack = createNativeStackNavigator<StackParamList>();

const styles = StyleSheet.create({});

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          // Possible approach as opposed to navigation.setOptions used in MealsOverviewScreen
          // options={({ route }) => {
          //   const { title } = route.params;
          //   return {
          //     title,
          //   }
          // }}
          />
          <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
