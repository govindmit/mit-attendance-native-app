import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Chat = ({ navigation }) => {
  return (
    <View style={styles.center}>

        
      <Text style={{color:'black',fontSize:20}}>This is the Chat screen</Text>
      
     
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

export default Chat;