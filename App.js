import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import Login from './src/screens/Login';
import { useSelector } from 'react-redux';
import { config, GluestackUIProvider } from '@gluestack-ui/themed';

const MainStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator 
    screenOptions={{
      headerShown: false,
    }}>
      <AuthStack.Screen name='Login' component={Login} />
      {/* <AuthStack.Screen name='Register' component={Register} /> */}
    </AuthStack.Navigator>
  )
}

const HomeStackContainer = () => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <HomeStack.Screen 
      name='Bottom Navigation' 
      component={BottomTabNavigation}
      options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  )
}

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log('isLoggedIn', isLoggedIn);
  React.useEffect(() => {
    StatusBar.setBackgroundColor(COLORS.primary, true);

  }, [])
  return (
    <GluestackUIProvider config={config.theme}>

    <NavigationContainer>
      <MainStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        {
          !isLoggedIn 
          ? <MainStack.Screen name='HomeScreen' component={HomeStackContainer}/>
          : <MainStack.Screen name='Auth' component={AuthStackContainer}/>
        }
      </MainStack.Navigator>
    </NavigationContainer>
    </GluestackUIProvider>

  );
};

export default App;
