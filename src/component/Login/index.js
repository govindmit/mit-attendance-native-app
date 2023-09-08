import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userLogin} from '../../API/auth';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [emailError, setemailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailValidator = () => {
    if (email === '') {
      setemailError('Email Field cannot be empty');
      return false;
    } else {
      setemailError('');
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
  console.log(email);
  console.log(password);

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);
  
      const response = await userLogin(formData);
  
      if (response) {
        console.log('API Response:', response);
  
        if (response.data) {
          const data = response.data;
          const role = data.role;
          const token = data.token;
  
          console.log('Login successful');
          console.log('Role:', role);
          
          AsyncStorage.setItem('token', token);
          navigation.navigate('Dashboard');
        } else {
          console.log('Login Failed: Response does not contain data.');
        }
      } else {
        console.log('Login Failed: Empty response.');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  

 
  
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
            value={email}
            onChangeText={text => {
              setemail(text);
            }}
            onBlur={emailValidator}
            placeholderTextColor="#6c757d"
            autoCapitalize="none"
          />
          <Text style={{color: 'red'}}>{emailError}</Text>

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
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

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
