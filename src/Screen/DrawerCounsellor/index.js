import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from './Chat';
import LogoutManager from './LogoutCounsellor';
import DashboardCounsellor from './DashboardCounsellor';


const Drawer = createDrawerNavigator();

const DrawerCounsellor= () => {
  return (
    
    <Drawer.Navigator initialRouteName="DashboardCounsellor">
      <Drawer.Screen name="DashboardCounsellor" component={DashboardCounsellor} />

      {/* <Drawer.Screen
        name=" My Profile"
        component={Myprofile}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="user" size={20} style={{color: '#005CB3'}} />
          ),
        }}
      /> */}

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

export default DrawerCounsellor;
