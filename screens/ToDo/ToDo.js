import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ToDoList, HeaderSubtitle, ToDoHeader, ToDoContent, ToDoDetails, DetailText, ToDoTitle, ToDoContainer, LinedText } from '../../components/ToDoComponents';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import { getToDoList } from '../../services/toDo';
import { DataContext } from '../../contexts/DataContext';

import { useIsFocused } from '@react-navigation/native';

export default function ToDo({ navigation }) {
  const { user_id } = useContext(DataContext)
  const [isSelected, setSelection] = useState(false)
  const [toDoList, setToDoList] = useState(null)
  const isFocused = useIsFocused()

  const getData = async () => {
    const data = await getToDoList(user_id)
    setToDoList(data)
  }

  useEffect(() => {
    getData()
  }, [isFocused])

  // if (!toDoList) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   )
  // }

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
              <ToDoContainer>
                <ToDoContent>
                  { item.status === 'done' ? (
                    <MaterialIcons name="done" size={24} color="#5ad170" />
                  ) : (
                    <Entypo name="dots-three-horizontal" size={24} color="#4a4646" />
                  )}
                  <ToDoTitle>
                    {item.status === 'done' ? (
                      <LinedText>{item.toDoName}</LinedText>
                  ) : (
                    item.toDoName
                  )}</ToDoTitle>
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
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderStyle: 'solid',
  },
  toDoContainerDone: {
    borderColor: '#4a4a4a',
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderStyle: 'dotted'
  },
  checkbox: {
    height: 25,
    width: 25
  }
})