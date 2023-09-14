  import React from "react";
  import { TouchableOpacity } from "react-native-gesture-handler"; 
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';

const HomeIcon =()=>{

const navigation= useNavigation();


    return(
        <TouchableOpacity>
<Icon name="home" size={40} style={{marginLeft:200, color: '#005CB3'}} onPress = {() => {
        navigation.navigate('DashboardManager') }}/>
</TouchableOpacity>
  

    );
};
export default HomeIcon;

