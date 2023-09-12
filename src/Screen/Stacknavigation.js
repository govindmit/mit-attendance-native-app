import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import DrawerNavigation from './Drawernavigation';
import DrawerNavigationManager from './DrawerNavigationManager';
import {Provider as AuthProvider} from '../context/AuthContext';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';

const AuthStack = createStackNavigator();
function authFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="forgotPassword"
        component={ForgotPassword}
      />
    </AuthStack.Navigator>
  );
}

const Stack = createStackNavigator();
const Stacknavigation = () => {
  const {state} = React.useContext(AuthContext);
  return (
    
      <Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={authFlow}
            />
          </>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DrawerNavigation} />
            <Stack.Screen
              name="DashboardManager"
              component={DrawerNavigationManager}
            />
          </Stack.Navigator>
        )}
      </Stack.Navigator>
    
  );
  // if(isLogin == true){
  //   return (
  //     <AuthStack.Navigator>
  //     <Stack.Navigator screenOptions={{headerShown:false}} >
  //         <Stack.Screen name="Dashboard" component={DrawerNavigation} />
  //         <Stack.Screen name="DashboardManager" component={DrawerNavigationManager} />
  //     </Stack.Navigator>
  //     </AuthStack.Navigator>
  //   );
  // } else {
  //   return (
  //     <AuthStack.Navigator>
  //     <Stack.Navigator screenOptions={{headerShown:false}} >
  //         <Stack.Screen name="Login" component={Login} />
  //         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  //     </Stack.Navigator>
  //     </AuthStack.Navigator>
  //   );
  // }
};

export default () => {
  return (
    <AuthProvider>
      <Stacknavigation />
    </AuthProvider>
  );
};
