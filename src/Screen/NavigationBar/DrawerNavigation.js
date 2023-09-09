import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stacknavigation from './StackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="windows" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
      <Drawer.Screen
        name=" My Profile"
        component={Profile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
      <Drawer.Screen
        name=" Login"
        component={Profile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
      <Drawer.Screen
        name="School Info"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="university" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="students"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user-o" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Manage Class"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon
              name="eercast"
              size={20}
              style={{color: '#005CB3'}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Councellor"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="sign-in" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Chat"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="envelope-o" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Change password"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="unlock" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Pin"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="gamepad" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="LogOut"
        component={Stacknavigation}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="sign-in" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
