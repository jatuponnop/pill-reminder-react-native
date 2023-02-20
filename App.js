import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './pages/Home';
import AddPillPage from './pages/AddPillPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import EditPillPage from './pages/EditPillPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Kanit-Light': require('./assets/fonts/Kanit-Light.ttf'),
    'Kanit-Medium': require('./assets/fonts/Kanit-Medium.ttf'),
    'Kanit-Regular': require('./assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Bold': require('./assets/fonts/Kanit-Bold.ttf'),
    'Kanit-SemiBold': require('./assets/fonts/Kanit-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='AddPill'
              component={AddPillPage}
              options={{
                headerShown: false
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name='EditPill'
              component={EditPillPage}
              options={{
                headerShown: false
              }}
            >
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
}
