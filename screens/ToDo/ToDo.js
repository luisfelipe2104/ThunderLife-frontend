import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ToDoList, HeaderSubtitle, ToDoHeader, ToDoContent, ToDoDetails, DetailText, ToDoTitle, ToDoContainer } from '../../components/ToDoComponents';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons'; 
import { getToDoList } from '../../services/toDo';
import { DataContext } from '../../contexts/DataContext';

export default function ToDo({ navigation }) {
  const { user_id } = useContext(DataContext)
  const [isSelected, setSelection] = useState(false)
  const [toDoList, setToDoList] = useState(null)

  const getData = async () => {
    const data = await getToDoList(user_id)
    setToDoList(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!toDoList) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <MainContainer>
      <Header>
      <HeaderTitle>To Do</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.navigate('CreateToDo')}>
          <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
      </Header>
      <ToDoHeader>
        <HeaderSubtitle>To-do-list</HeaderSubtitle>
        <HeaderSubtitle>50%</HeaderSubtitle>
      </ToDoHeader>

      <ToDoList
        data={toDoList}
        renderItem={({ item }) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <ToDoContainer style={styles.toDoContainerNotDone} >
                <ToDoContent>
                  <Checkbox 
                    style={styles.checkbox}
                    value={isSelected}
                    onValueChange={setSelection}
                  />
                  <ToDoTitle>{item.toDoName}</ToDoTitle>
                </ToDoContent>
                <ToDoDetails>
                  <DetailText>{item.scheduledHour}</DetailText>
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
  toDoContainerNotDone: {
    borderColor: '#4a4a4a',
    borderWidth: 1.5
  },
  toDoContainerDone: {
    borderColor: '#4a4a4a',
    borderWidth: 1.5
  },
  checkbox: {
    height: 25,
    width: 25
  }
})