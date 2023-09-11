import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Change_Password = ({ navigation }) => {
  return (
    <View style={styles.center}>

        
      <Text style={{color:'black',fontSize:20}}>This is the Change _password
       screen</Text>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Change_Password;