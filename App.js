import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './src/Screen/NavigationBar/DrawerNavigation';


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
