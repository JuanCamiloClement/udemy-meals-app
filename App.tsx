import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { FavoritesProvider } from './store/context/FavoritesProvider';
import { StackNavigator } from './navigators/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}
