import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { ModalContainer, CenteredContainer, DeleteText, ContainerRoundedButton, RoundedButton } from '../HabitTrackerComponents'

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { DataContext } from '../../contexts/DataContext';
import { trackHabit } from '../../services/streak';

export default function DeleteHabitModal({ handleClose, habit_id, date, getData }) {
  const { user_id } = useContext(DataContext)

  const handleSubmit = async (status) => {
    console.log(user_id, habit_id, status, date);
    await trackHabit(habit_id, user_id, date, '', status)
    getData()
    handleClose()
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => handleClose()} style={styles.container}>
        <CenteredContainer style={{backgroundColor: 'rgba(0,0,0,0.3)', width: '100%'}}>
            <DeleteText>Do you really want to delete this habit?</DeleteText>
            <ContainerRoundedButton>
                <RoundedButton style={{backgroundColor: 'red'}}>
                  <AntDesign name="close" size={28} color="black" />
                </RoundedButton>
                <RoundedButton style={{backgroundColor: '#64e866'}}>
                  <MaterialIcons name="done" size={35} color="black" />
                </RoundedButton>
            </ContainerRoundedButton>
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

