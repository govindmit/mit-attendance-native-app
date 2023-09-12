import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {getuserFromAPI} from '../../API/auth';
import {getTokenFromStorage} from '../../API/auth';

const Councellor = () => {
  const [searchText, setSearchText] = useState('');

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getTokenFromStorage();

        if (token) {
          const response = await getuserFromAPI(token);

          if (response) {
            setUserData(data.filter((e) => e.role.name === "counsellor"));
          } else {
            console.log('error', token);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  const handleSearch = () => {};

  const handleAddCounselor = () => {
    console.log('Adding a new counselor');

    
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="user-check"
          size={30}
          style={{marginLeft: 40, marginTop: 10, color: 'black'}}
        />
        <Text
          style={{
            marginTop: 10,
            fontWeight: '600',
            color: '#005CB3',
            marginHorizontal: 20,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Councellor
        </Text>
      </View>

      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              flex: 1,
              fontSize: 15,
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderColor: '#6c757d',
              fontFamily: 'regular',
              borderWidth: 1,
              marginTop: 10,
            }}
            underlineColorAndroid="transparent"
            placeholder="Search Counsellor"
            onChangeText={text => setSearchText(text)}
          />
          <Icon
            name="search"
            size={20}
            style={{marginLeft: -25, marginTop: 10, color: 'black'}}
            onPress={() => {
              handleSearch();
            }}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <View>
          <Text
            style={{
              margin: 10,
              color: 'black',
              fontFamily: 'regular',
              fontSize: 15,
              fontWeight: '500',
            }}>
            FILTER BY: ALL
          </Text>
        </View>
        <View style={{marginLeft: 110, marginTop: 5}}>
          <Button
            color={'#005CB3'}
            title="Add Counselor"
            onPress={handleAddCounselor}
          />
        </View>
      </View>

       <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            borderBottomWidth: 1,
            borderColor: 'gray',
            padding: 10,
          }}>
          <Text style={{flex: 1, fontWeight: 'bold', fontSize: 15}}>Name</Text>
          <Text style={{flex: 1, fontWeight: 'bold', fontSize: 15}}>Class</Text>
          <Text style={{flex: 1, fontWeight: 'bold', fontSize: 15}}>Action</Text>
          {console.log('userData',userData)}
          {/* {
          userData.map( user=>{
            console.log(user.role)
          })
          } */}
        </View>
</View>

       
           
       


 

    
    </ScrollView>
  );
};

export default Councellor;
