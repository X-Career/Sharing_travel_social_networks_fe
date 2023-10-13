import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.primary, true);

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
