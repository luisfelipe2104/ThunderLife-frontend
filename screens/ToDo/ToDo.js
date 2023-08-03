import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ButtonContent, ToDoButton, ToDoContainer } from '../../components/ToDoComponents';

import { Ionicons } from '@expo/vector-icons'; 

export default function ToDo({ navigation }) {
  return (
    <MainContainer>
      <Header>
      <HeaderTitle>To Do</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.navigate('CreateToDo')}>
          <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
      </Header>

      <ToDoContainer style={styles.toDoContainer} >
        <ToDoButton>
          <ButtonContent />
        </ToDoButton>
      </ToDoContainer>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  toDoContainer: {
    borderColor: 'red',
    borderWidth: 2
  }
})