import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Modal, TouchableOpacity, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import HabitTrackerModal from '../../components/modals/HabitTrackerModal.js';

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
    <View>
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
            <HabitContainer key={item.id}>
            <HabitTitle>{item.habitName}</HabitTitle>
            <HabitDetailText>Streak: +0  |  Goal: +{item.habitGoal}</HabitDetailText>
            <Container>
            {last7Days.map((day, index) => {
              const getBackgroundColor = () => {
                const streak = item.streak
                  let background = 'gray'
                  for (let i = 0; i < streak.length; i++) {
                    if (streak[i].date === day) {
                      streak[i].status === 'positive' ? background = 'green' : null
                      streak[i].status === 'negative' ? background = 'red' : null
                      streak[i].status === 'partial' ? background = 'blue' : null
                      return background;
                    } else {
                      background = 'gray';
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
    </View>
  )
}

export default HabitTracker