import axios from 'axios';
import configs from '../Config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function userLogin(props) {
  try {
    console.log("data",props)
    const res = await axios.post(`${configs.apiUrl}/login`,(props) , {
      headers: {
      
        'Content-Type': 'application/json'
      },
      data:props
    });
    return res;
    
  } catch (error) {
    return error.response;
  }
}

   export async function fetchDataFromAPI(props) {
  try {
    const res = await axios.get(`${configs.apiUrl}/student`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${props}`,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
}
   export async function fetchuserFromAPI(props) {
  try {
    const res = await axios.get(`${configs.apiUrl}/getuser`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${props}`,
      },
    });
     return res;
  } catch (error) {
    return error.response;
  }
}
   export const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('token', token);
    console.log('token', token);
    if (!token) {
      navigation.navigate('Login');
    }
    return token;
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage:', error);
  }
};

export async function getuserFromAPI(props) {
  try {
    const res = await axios.get(`${configs.apiUrl}/getuser`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${props}`,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
}