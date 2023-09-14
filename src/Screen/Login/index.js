import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {userLogin} from '../../API/auth';
import {UserDetailContext} from '../../../App';

const Login = () => {
  const navigation = useNavigation();
  const {setUserDetail} = useContext(UserDetailContext);

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setusernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const usernameValidator = () => {
    if (username === '') {
      setusernameError('Email Field cannot be empty');
      return false;
    } else {
      setusernameError('');
      return true;
    }
  };

  const passwordValidator = () => {
    if (password === '') {
      setPasswordError('Password Field cannot be empty');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleLogin = async () => {
    try {
      const reqData = {
        username,
        password,
      };
      await userLogin(reqData)
        .then(res => {
          setUserDetail(res);
          console.log('Login successfull');
        })
        .catch(err => {
          console.log('error', err);
        });
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
//setUserDetail('');
  return (
    <View style={{height: '100%', flex: 1}}>
      <View style={{height: '50%'}}>
        <Image
          source={require('../../../assets/login.png')}
          style={{width: '100%', height: '100%', borderBottomRightRadius: 120}}
        />
      </View>

      <ScrollView style={{height: '50%'}}>
        <View style={{height: '50%', padding: 30}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '600',
              color: '#005CB3',
              paddingHorizontal: 15,
            }}>
            Manager or Counsellor Login
          </Text>

          <TextInput
            style={{
              fontSize: 20,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderColor: '#6c757d',
              fontFamily: 'regular',
              borderWidth: 1,
              marginTop: 22,
            }}
            underlineColorAndroid="transparent"
            placeholder="Please enter your email or username"
            value={username}
            onChangeText={text => {
              setusername(text);
            }}
            onBlur={usernameValidator}
            placeholderTextColor="#6c757d"
            autoCapitalize="none"
          />
          <Text style={{color: 'red'}}>{usernameError}</Text>

          <TextInput
            style={{
              fontSize: 20,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderColor: '#6c757d',
              fontFamily: 'regular',
              borderWidth: 1,
              marginTop: 22,
            }}
            underlineColorAndroid="transparent"
            placeholder="Please enter Your Password"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            onBlur={passwordValidator}
            placeholderTextColor="#6c757d"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <Text style={{color: 'red'}}>{passwordError}</Text>

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              paddingVertical: 15,
              backgroundColor: '#005CB3',
              marginTop: 30,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
          {/* {error ? <Text style={{color: 'red'}}>{error}</Text> : null} */}

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{marginTop: 20}}>
            <Text style={{color: '#005CB3', fontSize: 20, textAlign: 'center'}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
