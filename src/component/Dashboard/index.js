import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const getTokenFromStorage = async () => {
  const navigation = useNavigation();
  try {
    const token = await AsyncStorage.getItem('token', response.data.token);
    if (!token) {
      navigation.navigate('Login');
    } else {
      return token;
    }
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage:', error);
  }
};
const Dashboard = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const token = await getTokenFromStorage();

      if (token) {
        const response = await fetch('http://103.127.29.85:6020/api/student', {
          method: 'GET',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setData(result);
          console.log(result);
        } else {
          console.error('API request failed:');
        }
      } else {
        console.error('Token not found in AsyncStorage.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }


  useEffect(() => {
    fetchData();
  }, []);

  };

  return (
    <View style={{height: '100%', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="align-left"
          size={30}
          style={{marginLeft: 40, marginTop: 40, color: 'black'}}
        />
        <Text
          style={{
            marginTop: 40,
            color: 'black',
            marginHorizontal: 100,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Emergency Alert
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            marginTop: 30,
            color: 'black',
            marginHorizontal: 40,
            fontSize: 18,
            fontWeight: '700',
          }}>
          Filtered By:ALL
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{flex: 1, backgroundColor: '#FFFFFF', margin: 10}}>
                <Text
                  style={{
                    marginTop: 25,
                    color: 'black',
                    marginHorizontal: 40,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Total Student
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  margin: 10,
                }}>
                <Text
                  style={{
                    marginTop: 25,
                    color: 'black',
                    marginHorizontal: 35,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Present Student
                </Text>
              </View>
            </View>
            {/* Two More Boxes Horizontally */}
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  margin: 10,
                }}>
                <Text
                  style={{
                    marginTop: 25,
                    color: 'black',
                    marginHorizontal: 35,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Absent Student
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#FFFFFF',
                  margin: 10,
                }}>
                <Text
                  style={{
                    marginTop: 25,
                    color: 'black',
                    marginHorizontal: 35,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Out of Class
                </Text>
              </View>
            </View>
          </View>

          <View style={{flex: 1, margin: 10, backgroundColor: '#FFFFFF'}}>
            <View>
              <Text
                style={{
                  color: '#005CB3',
                  fontSize: 20,
                  fontWeight: '700',
                  marginHorizontal: 20,
                }}>
                Absent
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Dashboard;
