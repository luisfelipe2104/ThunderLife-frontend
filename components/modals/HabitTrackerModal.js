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
              style={{ backgroundColor: "#3f9406" }}
            >
              <MaterialIcons name="done" size={24} color="black" />
            </Button>
            <Button 
              onPress={() => handleSubmit('negative')}
              style={{ backgroundColor: "#ff0000" }}
            >
              <AntDesign name="close" size={24} color="black" />
            </Button>
            <Button 
              onPress={() => handleSubmit('partial')}
              style={{ backgroundColor: "#5c5c5c" }}
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