import { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, Vibration } from 'react-native'
import { MainContainer, Header, HeaderTitle } from '../../components/HabitTrackerComponents'
import { ToDoList, HeaderSubtitle, ToDoHeader, ToDoContent, ToDoDetails, DetailText, ToDoTitle, ToDoContainer, LinedText } from '../../components/ToDoComponents';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import { getToDoList, changeTodoStatus } from '../../services/toDo';
import { DataContext } from '../../contexts/DataContext';

import { useIsFocused } from '@react-navigation/native';
import DeleteToDoModal from '../../components/modals/DeleteToDoModal';

export default function ToDo({ navigation }) {
  const { user_id } = useContext(DataContext)
  const [isSelected, setSelection] = useState(false)
  const [toDoList, setToDoList] = useState(null)
  const isFocused = useIsFocused()
  const [donePercent, setDonePercent] = useState(null)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const getData = async () => {
    const data = await getToDoList(user_id)
    setToDoList(data)
    const dones = await data.filter((item) => {
      return item.status === 'done'
    })
    const percent = (dones.length / data.length) * 100
    setDonePercent(percent.toFixed(2))
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

      <ToDoList
        data={toDoList}
        ListHeaderComponent={
          <ToDoHeader>
            <HeaderSubtitle>To-do-list</HeaderSubtitle>
            <HeaderSubtitle>{donePercent}%</HeaderSubtitle>
          </ToDoHeader>
        }
        renderItem={({ item }) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <ToDoContainer 
                onPress={async () => {
                  await changeTodoStatus(item.id)
                  .then(() => {
                    getData()
                  })
                }}
                onLongPress={async () => {
                  Vibration.vibrate(100)
                  setDeleteModalVisible(true)
                }}
                >
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
              <Modal
                visible={deleteModalVisible}
                transparent={true}
                onRequestClose={() => setDeleteModalVisible(false)}
              >
                <DeleteToDoModal 
                  todo_id={item.id} 
                  getData={getData}
                  handleClose={() => setDeleteModalVisible(false)}
                />
              </Modal>
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