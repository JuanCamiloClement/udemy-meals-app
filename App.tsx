import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';

import { FavoritesProvider } from './store/context/FavoritesProvider';
import { store } from './store/redux/store';
import { StackNavigator } from './navigators/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ReduxProvider store={store}>
        <FavoritesProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </FavoritesProvider>
      </ReduxProvider>
    </>
  );
}
