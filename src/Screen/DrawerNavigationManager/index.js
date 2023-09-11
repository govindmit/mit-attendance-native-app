import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Myprofile from './Myprofile';
import Chat from './Chat';
import LogoutManager from './LogoutManager';
import Dashboard from '../Dashboard';

const Drawer = createDrawerNavigator();

const DrawerNavigationManager = () => {
  return (
    
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />

      <Drawer.Screen
        name=" My Profile"
        component={Myprofile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="envelope-o" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="LogOut"
        component={LogoutManager}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="sign-in" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationManager;
