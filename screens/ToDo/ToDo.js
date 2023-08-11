import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ToDoList, HeaderSubtitle, ToDoHeader, ToDoContent, ToDoDetails, DetailText, ToDoTitle, ToDoContainer } from '../../components/ToDoComponents';
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

      <ToDoList
        data={[1, 2, 3, 4, 5]}
        ListHeaderComponent={
          <ToDoHeader>
            <HeaderSubtitle>To-do-list</HeaderSubtitle>
            <HeaderSubtitle>50%</HeaderSubtitle>
          </ToDoHeader>
        }
        renderItem={({ item }) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
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
            </View>
          )
        }}
      />
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  toDoContainer: {
    borderColor: '#802a2a',
    borderWidth: 1.5
  },
  checkbox: {
    height: 25,
    width: 25
  }
})