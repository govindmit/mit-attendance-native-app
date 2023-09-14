import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet,ScrollView } from 'react-native';
import HomeIcon from '../HomeIconManager';

const ManagerProfile = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [mobileNo, setMobileNo] = useState('');
const [assignClass, setAssignClass] = useState('');
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

const handleUpdatePassword = () => {
// Implement logic to update the password here
console.log('Password updated');
};

return (
  <ScrollView contentContainerStyle={styles.container}>
<View >
{/* <Image
source={require('./profileImage.jpg')} // Add your profile image source
style={styles.profileImage}
/> */}

<Text style={styles.label}>First Name</Text>
<TextInput
style={styles.input}
value={firstName}
onChangeText={text => setFirstName(text)}
/>

<Text style={styles.label}>Last Name</Text>
<TextInput
style={styles.input}
value={lastName}
onChangeText={text => setLastName(text)}
/>

<Text style={styles.label}>Email</Text>
<TextInput
style={styles.input}
value={email}
onChangeText={text => setEmail(text)}
keyboardType="email-address"
/>

<Text style={styles.label}>Mobile No.</Text>
<TextInput
style={styles.input}
value={mobileNo}
onChangeText={text => setMobileNo(text)}
keyboardType="phone-pad"
/>

<Text style={styles.label}>Assign Class</Text>
<TextInput
style={styles.input}
value={assignClass}
onChangeText={text => setAssignClass(text)}
/>

<Text style={styles.label}>User Name</Text>
<TextInput
style={styles.input}
value={userName}
onChangeText={text => setUserName(text)}
/>

<Text style={styles.label}>Update Password</Text>
<TextInput
style={styles.input}
value={password}
onChangeText={text => setPassword(text)}
secureTextEntry={true}
/>

<Button
title="Update Password"
onPress={handleUpdatePassword}
style={styles.button}
/>

</View>
<HomeIcon/>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
margin:0
},
profileImage: {
width: 100,
height: 100,
borderRadius: 50,
alignSelf: 'center',
marginBottom: 20,
},
label: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 10,
},
input: {
fontSize: 16,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
paddingVertical: 8,
paddingHorizontal: 12,
marginBottom: 15,
},
button: {
marginTop: 20,
},
});

export default ManagerProfile;