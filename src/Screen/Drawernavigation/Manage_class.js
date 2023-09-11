import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Class Yahoo', counselor: 'Yugank Tiwari', students: 0 },
    { id: 2, name: 'Class Azur', counselor: 'Govind Counselor', students: 1 },
    // Add more class objects here
  ]);

  const renderClassItem = ({ item }) => (
    <ClassRow
      className={item.name}
      counsellor={item.counselor}
      students={item.students}
      onEdit={() => handleEdit(item.id)}
      onDelete={() => handleDelete(item.id)}
    />
  );

  const handleEdit = (classId) => {
    // Implement edit logic here
  };

  const handleDelete = (classId) => {
    // Implement delete logic here
  };
 
const ClassRow = ({ className, counsellor, students, onEdit, onDelete }) 



  return (
    <View>
      <Text>Classname: {className}</Text>
      <Text>Counsellor: {counsellor}</Text>
      <Text>Students: {students}</Text>
      <TouchableOpacity onPress={onEdit}>
        <Text>Edit icon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text>Delete icon</Text>
      </TouchableOpacity>
    </View>
  );





  return (
    <View>
      <SearchClassInput />
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderClassItem}
      />
      <AddClassButton />
    </View>
  );
};

export default ManageClasses;
