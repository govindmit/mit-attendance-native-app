import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/component/Login/index';
import ForgotPassword from './src/component/ForgotPassword';
import Dashboard from './src/component/Dashboard';

import React, {useEffect} from 'react';


const App = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen  name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
