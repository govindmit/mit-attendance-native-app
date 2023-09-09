import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const [email, setemail] = useState('');
  const [error, setError] = useState('');

  const [emailError, setemailError] = useState('');

  const emailValidator = () => {
    if (email === '') {
      setemailError('Email Field cannot be empty');
      return false;
    } else {
      setemailError('');
      return true;
    }
  };

  console.log(email);

  const handleLogin = async () => {
    try {
   await axios
        .post('http://103.127.29.85:6020/api/sendMail', {email})
        .then(response => {
          if (response.status === 200) {
            console.log('Login successful');
            console.log(response.data);
          } else {
            console.log(
              'Login Failed',
              'Invalid credentials. Please try again.',
            );
          }
        })
        .catch(error => {
          console.log('error', error);
        });
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <View style={{height: '100%', flex: 1}}>
      <View style={{height: '50%'}}>
        <Image
          source={require('../../../assets/forgetpassword.png')}
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
              textAlign: 'center',
            }}>
            Forgot Password
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
              marginTop:22,
            }}
            underlineColorAndroid="transparent"
            placeholder="Please enter your email "
            value={email}
            onChangeText={text => {
              setemail(text);
            }}
            onBlur={emailValidator}
            placeholderTextColor="#6c757d"
            autoCapitalize="none"
          />
          <Text style={{color: 'red'}}>{emailError}</Text>

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              paddingVertical: 15,
              backgroundColor: '#005CB3',
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Submit
            </Text>
          </TouchableOpacity>
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
