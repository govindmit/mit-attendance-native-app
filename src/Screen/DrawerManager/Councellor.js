import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {getuserFromAPI} from '../../API/auth';
import HomeIcon from '../HomeIconManager';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {UserDetailContext} from '../../../App';

const Councellor = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const [userData, setUserData] = useState([]);
  const {userDetail} = useContext(UserDetailContext);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const getData = async () => {
    try {
      console.log(userDetail);
      const response = await getuserFromAPI(userDetail.token);

      if (response) {
        setUserData(response.data);
      } else {
        console.log('error', token);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const counsellorUsers = userData.filter(
    user => user.role.name === 'counsellor',
  );

  const handleSearch = () => {};
  const totalPages = Math.ceil(counsellorUsers.length / usersPerPage);
  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  return (
    <ScrollView style={{flex: 1}}>
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
          <Feather
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
              fontWeight: '700',
            }}>
            FILTER BY: ALL
          </Text>
        </View>
        <View style={{marginLeft: 110, marginTop: 5}}>
          <Button
            color={'#005CB3'}
            title="Add Counselor"
            onPress={() => navigation.navigate('AddCousellorform')}
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
          <Text
            style={{flex: 1, fontWeight: 'bold', fontSize: 15, color: 'black'}}>
            Name
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              marginLeft: 50,
            }}>
            Class
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
              marginLeft: 100,
            }}>
            Action
          </Text>
        </View>

        {counsellorUsers.slice(startIndex, endIndex).map(user => (
          <View
            key={user._id}
            style={{
              flexDirection: 'row',
              margin: 10,
              padding: 10,
            }}>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
              }}>
              {user.name}
            </Text>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
                marginRight: 60,
              }}>
              {user.classId && user.classId.className
                ? user.classId.className
                : 'Null'}
            </Text>

            <Icon
              name="form"
              size={20}
              style={{marginRight: 10, color: 'black'}}
            />
            <Icon name="delete" size={20} style={{color: 'black'}} />
          </View>
        ))}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 10,
          }}>
          {currentPage > 1 && (
            <Icon
              name="left"
              size={20}
              style={{color: 'black'}}
              onPress={() => {
                handlePageChange(currentPage - 1);
              }}
            />
          )}
          {currentPage < totalPages && (
            <Icon
              name="right"
              size={20}
              style={{color: 'black'}}
              onPress={() => {
                handlePageChange(currentPage + 1);
              }}
            />
          )}
        </View>

        <HomeIcon />
      </View>
    </ScrollView>
  );
};

export default Councellor;

{
  /* {counsellorUsers.map(user => (
          <View
            key={user._id}
            style={{
              flexDirection: 'row',
              margin: 10,
              padding: 10,
            }}>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
              }}>
              {user.name}
            </Text>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
                marginRight: 60,
              }}>
              {user.classId && user.classId.className
                ? user.classId.className
                : 'Null'}
            </Text>

            <Icon
              name="form"
              size={20}
              style={{marginRight: 10, color: 'black'}}
            />
            <Icon name="delete" size={20} style={{color: 'black'}} />
          </View>
        ))}
      </View>
      <HomeIcon />
    </ScrollView>
  );
};

export default Councellor; */
}
