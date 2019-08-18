import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [hobbies,setHobbies] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)

  addNewHobbyHandler = (hobby) =>{
    setHobbies((currentHobbies)=>{
      // console.log(hobby);
        return [...currentHobbies,{data:hobby,id:Math.random().toString()}]
    })
    setIsAddMode(false)
    // setText('')
    console.log(hobbies);
  }

  const deleteItemHandler = (hobbyId) => {
    setHobbies((currentHobbies)=>{
      return currentHobbies.filter(hobby=>hobby.id !== hobbyId)
    })
  }

  const cancelHobbyHandler = () => {
    setIsAddMode(false)
  }
  
  return (
    <View style={styles.screen}>
      <Button title="Add New Hobby"  onPress={()=>setIsAddMode(true)} />
      <GoalInput 
        onAddHobby = {addNewHobbyHandler}
        visible={isAddMode}
        onCancel={cancelHobbyHandler}
      />
      <FlatList 
      keyExtractor={(item,index) =>{return item.id}}
      data={hobbies} renderItem={itemData =>  <GoalItem  onDelete={deleteItemHandler} title={itemData.item}/> }/>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: { padding: 50 },
})
