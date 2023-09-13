
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { UserDetailContext } from '../../../App';

const LogoutManager = () => {
  const navigation = useNavigation();
  const {setUserDetail} = useContext(UserDetailContext);
  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      setUserDetail('')
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

export default LogoutManager;

