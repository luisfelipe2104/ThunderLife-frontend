import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ToDoContent, ToDoDetails, DetailText, ToDoTitle, ToDoContainer } from '../../components/ToDoComponents';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons'; 

export default function ToDo({ navigation }) {
  const [isSelected, setSelection] = useState(false)

  return (
    <MainContainer>
      <Header>
      <HeaderTitle>To Do</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.navigate('CreateToDo')}>
          <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
      </Header>

      <ToDoContainer style={styles.toDoContainer} >
        <ToDoContent>
          <Checkbox 
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelection}
          />
          <ToDoTitle>Shower</ToDoTitle>
        </ToDoContent>
        <ToDoDetails>
          <DetailText>10:00 AM</DetailText>
        </ToDoDetails>
      </ToDoContainer>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  toDoContainer: {
    borderColor: 'red',
    borderWidth: 2
  },
  checkbox: {
    height: 25,
    width: 25
  }
})