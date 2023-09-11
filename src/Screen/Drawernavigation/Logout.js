import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
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

