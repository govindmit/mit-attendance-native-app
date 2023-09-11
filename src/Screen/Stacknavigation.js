import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import DrawerNavigation from "./Drawernavigation";
import DrawerNavigationManager from "./DrawerNavigationManager";



const Stack = createStackNavigator();



const Stacknavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={DrawerNavigation} />
        <Stack.Screen name="DashboardManager" component={DrawerNavigationManager} />

        
    </Stack.Navigator>
  );
}

export default  Stacknavigation;