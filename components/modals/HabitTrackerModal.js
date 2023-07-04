import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { ModalContainer, CenteredContainer, Button } from '../HabitTrackerComponents'

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 

import { DataContext } from '../../contexts/DataContext';
import { trackHabit } from '../../services/streak';

function HabitTrackerModal({ handleClose, habit_id, date, getData }) {
  const { user_id } = useContext(DataContext)

  const handleSubmit = async (status) => {
    console.log(user_id, habit_id, status, date);
    await trackHabit(habit_id, user_id, date, '', status)
    getData()
    handleClose()
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => handleClose()} style={styles.container}>
        <CenteredContainer>
          <ModalContainer activeOpacity={1}>
            <Button
              onPress={() => handleSubmit('positive')}
              style={{ backgroundColor: "green" }}
            >
              <MaterialIcons name="done" size={24} color="black" />
            </Button>
            <Button 
              onPress={() => handleSubmit('negative')}
              style={{ backgroundColor: "red" }}
            >
              <AntDesign name="close" size={24} color="black" />
            </Button>
            <Button 
              onPress={() => handleSubmit('partial')}
              style={{ backgroundColor: "gray" }}
            >
              <Octicons name="dash" size={24} color="black" />
            </Button>
          </ModalContainer>
        </CenteredContainer>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    }
})

export default HabitTrackerModal