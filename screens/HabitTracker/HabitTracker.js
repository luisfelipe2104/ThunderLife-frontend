import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
;
import HabitTrackerModal from '../../components/modals/HabitTrackerModal.js';

import { Header, HabitContainer, HabitDetailText, HabitTitle, HeaderTitle, Container, Button, ButtonText } from "../../components/HabitTrackerComponents.js";

import { getLast7Days, getDayOfWeek } from '../../helpers/habitTrackerHelpers.js';

import { Ionicons } from '@expo/vector-icons'; 

import { getHabits } from '../../services/habit.js';
import { DataContext } from '../../contexts/DataContext.js';

function HabitTracker({ navigation }) {
  const { user_id } = useContext(DataContext)
  const [last7Days, setLast7Days] = useState([])
  const [habits, setHabits] = useState([1])
  const [habitId, setHabitId] = useState(null)
  const [streakDay, setStreakDay] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const getData = async () => {
    const data = await getHabits(user_id)
    setHabits(data)
  }

  useEffect(() => {
    setLast7Days(getLast7Days())
    getData()
  }, [])

  return (
    <View>
      <Header>
        <HeaderTitle>My Habits</HeaderTitle>
        <TouchableOpacity onPress={() => navigation.navigate('CreateHabit')}>
          <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
      </Header>
      {habits.map((habit, index) => {
        return (
          <HabitContainer key={index}>
            <HabitTitle>{habit.habitName}</HabitTitle>
            <HabitDetailText>Streak: +0  |  Goal: +{habit.habitGoal}</HabitDetailText>
            <Container>
            {last7Days.map((day, index) => {
              return (
                <Button key={index} onPress={() => {
                  setHabitId(habit.id)
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
      })}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <HabitTrackerModal 
          habit_id={habitId} 
          date={streakDay} 
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  )
}

export default HabitTracker