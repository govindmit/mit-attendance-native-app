import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';

import {UserDetailContext} from '../../App';
import DrawerManager from './DrawerManager';
import DrawerCounsellor from './DrawerCounsellor';
import ForgotPassword from './ForgotPassword';

const Stack = createStackNavigator();

const Stacknavigation = () => {
  const {userDetail} = useContext(UserDetailContext);
  console.log(' 4444 ', userDetail, '333453');
  console.log(userDetail.token);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userDetail?.token ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </>
      ) : userDetail?.role == 'manager' ? (
        <Stack.Screen name="DashboardManager" component={DrawerManager} />
      ) : (
        <Stack.Screen name="DashboardCounsellor" component={DrawerCounsellor} 



        />
      )}
    </Stack.Navigator>
  );
};

export default Stacknavigation;
