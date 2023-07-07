import React, { useState, useEffect, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native';

import { Text, View, Modal, TouchableOpacity, FlatList, Vibration } from 'react-native'
import HabitTrackerModal from '../../components/modals/HabitTrackerModal.js';
import DeleteHabitModal from '../../components/modals/DeleteHabitModal.js';
import { Header, HabitContainer, HabitDetailText, HabitTitle, HeaderTitle, Container, Button, ButtonText } from "../../components/HabitTrackerComponents.js";

import { getLast7Days, getDayOfWeek } from '../../helpers/habitTrackerHelpers.js';

import { Ionicons } from '@expo/vector-icons'; 

import { getHabits } from '../../services/habit.js';
import { DataContext } from '../../contexts/DataContext.js';

function HabitTracker({ navigation }) {
  const { user_id } = useContext(DataContext)
  const [last7Days, setLast7Days] = useState([])
  const [habits, setHabits] = useState(null)
  const [habitId, setHabitId] = useState(null)
  const [streakDay, setStreakDay] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  //Refresh page when change the route
  const isFocused = useIsFocused();

  const getData = async () => {
    const data = await getHabits(user_id)
    setHabits(data)
  }

  useEffect(() => {
    setLast7Days(getLast7Days())
    getData()
  }, [isFocused])

  if (!habits) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{backgroundColor: '#000', minHeight: '100%'}}>
      <Header>
        <HeaderTitle>My Habits</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.navigate('CreateHabit')}>
          <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
      </Header>
      <FlatList 
        data={habits}
        style={{marginBottom: 60}}
        renderItem={({ item }) => {
          return (
            <HabitContainer 
              key={item.id}
              onLongPress={() => {
                setHabitId(item.id)
                Vibration.vibrate(100)
                setDeleteModalVisible(true)
              }}
            >
            <HabitTitle>{item.habitName}</HabitTitle>
            <HabitDetailText>Streak: +{item.streakCounter}  |  Goal: +{item.habitGoal}</HabitDetailText>
            <Container>
            {last7Days.map((day, index) => {
              const getBackgroundColor = () => {
                const streak = item.streak
                  let background = 'gray'
                  for (let i = 0; i < streak.length; i++) {
                    if (streak[i].date === day) {
                      streak[i].status === 'positive' ? background = '#3f9406' : null
                      streak[i].status === 'negative' ? background = '#ff0000' : null
                      streak[i].status === 'partial' ? background = '#5c5c5c' : null
                      return background;
                    } else {
                      background = '#b5b5b5';
                    }
                  }
                return background
              }
              return (
                <Button 
                  key={index} 
                  style={{ backgroundColor: getBackgroundColor() }}
                  onPress={() => {
                  setHabitId(item.id)
                  setStreakDay(day)
                  setModalVisible(true)
                }}>
                  <ButtonText>{getDayOfWeek(day)}</ButtonText>
                </Button>
              )
            })}
            </Container>
          </HabitContainer>
          )
        } 
      }
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <HabitTrackerModal 
          habit_id={habitId} 
          date={streakDay} 
          getData={getData}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
      
      <Modal
        visible={deleteModalVisible}
        transparent={true}
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <DeleteHabitModal 
          habit_id={habitId} 
          getData={getData}
          handleClose={() => setDeleteModalVisible(false)}
        />
      </Modal>
    </View>
  )
}

export default HabitTracker