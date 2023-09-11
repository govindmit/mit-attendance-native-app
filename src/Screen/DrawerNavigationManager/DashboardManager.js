import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {fetchDataFromAPI} from '../../API/auth';

const Dashboard = () => {
  const navigation = useNavigation();

  const[data,setData]=useState('')
  
  console.log(data.totalabsent)
            
  
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getTokenFromStorage();

        if (token) {
          const response = await fetchDataFromAPI(token);

          if (response) {
          setData(response.data)
         
            
          } else {
            console.log('error', token);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getTokenFromStorage = async () => {
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

    fetchData();
  }, []);

  return (
    <View style={{height: '100%', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        {/* <Icon
          name="align-left"
          size={30}
           style={{marginLeft: 40, marginTop: 40, color: 'black'}}
          onPress={() => {
            navigation.openDrawer();
          }}
        /> */}
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            marginHorizontal: 110,
          
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
                
                <Text style={{fontSize:40, textAlign:'center',color:'#005CB3'}}>{data.totalcount}</Text>
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
                <Text style={{fontSize:40, textAlign:'center',color:'#005CB3'}}>{data.totalpresent}</Text>
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
                <Text style={{fontSize:40, textAlign:'center',color:'#005CB3'}}>{data.totalabsent}</Text>
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
                <Text style={{fontSize:40, textAlign:'center',color:'#005CB3'}}>{data.totalout}</Text>
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
