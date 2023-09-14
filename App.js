import 'react-native-gesture-handler';
import React, {createContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Stacknavigation from './src/Screen/Stacknavigation';
export const UserDetailContext = createContext("");
;


const App = () => {
  const [userDetail, setUserDetail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);


  

  return (

    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <NavigationContainer>
      <Stacknavigation/>
    </NavigationContainer>
 
    </UserDetailContext.Provider>

    
  );
};

export default App;
