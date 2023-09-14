import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Schoolinfo from './Schoolinfo';
import Students from './Students';
import Manage_class from './Manage_class';
import Councellor from './Councellor';
import Chat from './Chat';
import Change_Password from './Change_Password';
import Pin from './Pin';
import Logout from './Logout';
import DashboardManager from './DashboardManager';
import ManagerProfile from './ManagerProfile';

const Drawer = createDrawerNavigator();

const DrawerManager= () => {
  return (
    <Drawer.Navigator initialRouteName="DashboardManager">
      <Drawer.Screen name="DashboardManager" component={DashboardManager} />

      <Drawer.Screen
        name=" My Profile"
        component={ManagerProfile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="School Info"
        component={Schoolinfo}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="university" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Students"
        component={Students}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="university" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Manage Class"
        component={Manage_class}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="eercast" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Councellor"
        component={Councellor}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="sign-in" size={20} style={{color: '#005CB3',}} />
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
        name="Change password"
        component={Change_Password}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="unlock" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Pin"
        component={Pin}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="gamepad" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="sign-in" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerManager;
