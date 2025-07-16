import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';

const StackNavigator = createNativeStackNavigator();

const styles = StyleSheet.create({});

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen name='Categories' component={CategoriesScreen} />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </>
  );
}
