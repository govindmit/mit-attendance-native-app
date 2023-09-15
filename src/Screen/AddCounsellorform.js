import React, {useState} from 'react';
import {AddcounsellorData} from '../API/auth';

import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';

const classOptions = [
  'Select Class',
  'Class Java',
  'Class Python',
  'Class Azzur',
  'Unsigned',
  'Class Yahoo',
  'Class React',
  'Class React-Native',
  'Class Nodejs',
  'Class Javascript',
];

const AddCousellorform = () => {
  const [name, setname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [assignClass, setAssignClass] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setnameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNoError, setMobileNoError] = useState('');
  const [assignClassError, setAssignClassError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  

  const handleDropdownSelect = option => {
    setAssignClass(option);
    setIsDropdownVisible(false);
    validateFields();
  };

  const validateFields = () => {
    let isValid = true;

    if (name === '') {
      setnameError('Name Field cannot be empty');
      isValid = false;
    } else {
      setnameError('');
    }

    if (lastName === '') {
      setLastNameError('Last Name Field cannot be empty');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (email === '') {
      setEmailError('Email Field cannot be empty');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (mobileNo === '') {
      setMobileNoError('Mobile No. Field cannot be empty');
      isValid = false;
    } else {
      setMobileNoError('');
    }

    if (assignClass === 'Select Class') {
      setAssignClassError('Please select a class');
      isValid = false;
    } else {
      setAssignClassError('');
    }

    if (userName === '') {
      setUserNameError('User Name Field cannot be empty');
      isValid = false;
    } else {
      setUserNameError('');
    }

    if (password === '') {
      setPasswordError('Password Field cannot be empty');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };
  const handleSubmit = async () => {
    try {
      const newCounsellorData = {
        name,
        lastName,
        email,
        mobileNo,
        assignClass,
        userName,
        password,
        role: 'counsellor',
      };
      
      const response = await AddcounsellorData(newCounsellorData);
      
      if (response.status === 201) {
        console.log('Counselor added successfully');
   
      } else if (response.status === 400) {
        console.log('Bad request:45678', response.data.message);
     
      } else {
        console.log('Unknown error:', response.status);
     
      }
    } catch (error) {
      console.log('Error:', error.message);
     
    }
  };
  

//   

  return (
    <ScrollView style={{flex: 1, margin: 0, padding: 16}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/image1.jpg')} // Add your profile image source
          style={styles.profileImage}
        />

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setname(text)}
          onBlur={validateFields}
          placeholderTextColor="#6c757d"
          autoCapitalize="none"
        />
        <Text style={{color: 'red'}}>{nameError}</Text>

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={text => setLastName(text)}
          onBlur={validateFields}
        />
        <Text style={{color: 'red'}}>{lastNameError}</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          onBlur={validateFields}
          keyboardType="email-address"
        />
        <Text style={{color: 'red'}}>{emailError}</Text>

        <Text style={styles.label}>Mobile No.</Text>
        <TextInput
          style={styles.input}
          value={mobileNo}
          onChangeText={text => setMobileNo(text)}
          onBlur={validateFields}
          keyboardType="phone-pad"
        />
        <Text style={{color: 'red'}}>{mobileNoError}</Text>

        <Text style={styles.label}>Assign Class</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setIsDropdownVisible(true)}>
          <Text>{assignClass}</Text>
        </TouchableOpacity>
        <Text style={{color: 'red'}}>{assignClassError}</Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isDropdownVisible}>
          <View style={styles.modalContainer}>
            {classOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleDropdownSelect(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={text => setUserName(text)}
          onBlur={validateFields}
        />
        <Text style={{color: 'red'}}>{userNameError}</Text>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          onBlur={validateFields}
          secureTextEntry={true}
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: 50,
        }}>
        <Button title="CANCEL" onPress={() => navigation.navigate()} />
        <Button title="SUBMIT" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownOption: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
  },
});

export default AddCousellorform;
