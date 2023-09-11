import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';



const Councellor = ({ navigation }) => {
  return (
    <View style={ {flex:1}}>

        
    
      <View style={{flexDirection: 'row'}}>
         <Icon
          name="user-check"
          size={30}
           style={{marginLeft: 40, marginTop:10, color: 'black'}}
          onPress={() => {
            navigation.openDrawer();
          }}
        /> 
         <Text
          style={{
            marginTop: 10,
              fontWeight: '600',
              color: '#005CB3',
           marginHorizontal:20,
            fontSize: 20,
            fontWeight: '700',
          }}>
        Councellor
        </Text> 
      </View>

      
      </View>
 
  );
};



export default Councellor;