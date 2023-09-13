import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { UserDetailContext } from '../../../App';

const Logout = () => {
  const navigation = useNavigation();
  const {setUserDetail} = useContext(UserDetailContext);
  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      setUserDetail('')
      // await AsyncStorage.removeItem('token');
      // navigation.navigate('Login');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <View>
      <Text style={{fontSize: 20, color: 'black', textAlign: 'center',fontFamily:'600'}}>
        Logging out...
      </Text>
    </View>
  );
};

export default Logout;

