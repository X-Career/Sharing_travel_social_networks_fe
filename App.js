import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import Login from './src/screens/Login';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(state => state)
  console.log('isLoggedIn', isLoggedIn);
  React.useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.primary, true);

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
