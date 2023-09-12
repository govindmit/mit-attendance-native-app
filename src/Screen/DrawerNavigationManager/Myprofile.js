import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const Myprofile = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const counselors = [
  //   { id: 1, name: 'Counselor 1' },
  //   { id: 2, name: 'Counselor 2' },
  //   { id: 3, name: 'Counselor 3' },
  //   // ... add more counselors here
  // ];

  const handleSearch = () => {
    //    const filteredCounselors = counselors.filter((counselor) =>
    //    counselor.name.toLowerCase().includes(searchText.toLowerCase())
    //  );
    //  // Update search results state with filtered counselors
    //  setSearchResults(filteredCounselors);
    //  // You can perform actions like displaying the results or navigating to a new screen
    //  // Example: navigation.navigate('SearchResults', { results: filteredCounselors });
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
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              flex: 1,
              fontSize: 20,
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

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                marginTop: 10,
                color: 'black',
                fontFamily: 'regular',
                fontSize: 15,
                fontWeight: '500',
              }}>
              FILTER BY: ALL
            </Text>
          </View>
          <View style={{ marginHorizontal:50,marginTop:20,color:''}}>
            <Button title="Add Counsellor" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Myprofile;
