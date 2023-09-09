import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Login";
import ForgotPassword from "../ForgotPassword";
import Dashboard from "../Dashboard";

const Stack = createStackNavigator();



const Stacknavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default  Stacknavigation;