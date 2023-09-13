import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import {UserDetailContext} from '../../App';
import DashboardManager from './DashboardManager';
import DrawerNavigation from './Drawernavigation';
import DrawerNavigationManager from './DrawerNavigationManager';

const Stack = createStackNavigator();

const Stacknavigation = () => {
  const {userDetail} = useContext(UserDetailContext);
  //console.log(' 4444 ',userDetail, '333453');
  return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       {!userDetail?.token ? (
//         <Stack.Screen name="Login" component={Login} />
//       ) : (
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//       )}
//       {/* {!userDetail?.role === 'manager'?(
//           <>
//           <Stack.Screen name="Drawer" component={DrawerNavigation}/>
//            </>
//         ):<Stack.Screen
//               name="DashboardManager"
//                component={DrawerNavigationManager}
//            />
//         } */}
//     </Stack.Navigator>
//   );
// };

<Stack.Navigator screenOptions={{headerShown: false}}>
{!userDetail?.token ? (
  <>
    <Stack.Screen

      name="Login"
      component={Login}
    />
  </>
) : userDetail?.role !== 'manager' ? (

    <Stack.Screen
      name="DashboardManager"
      component={DrawerNavigationManager}
    />

) : (

    <Stack.Screen name="Dashboard" component={DrawerNavigation} />

)}
</Stack.Navigator>
  )
}

export default Stacknavigation;
