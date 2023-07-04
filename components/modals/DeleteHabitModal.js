import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { ModalContainer, CenteredContainer, DeleteText, ContainerRoundedButton, RoundedButton } from '../HabitTrackerComponents'
import { showToastSuccess } from '../toast/Toast';

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { deleteHabit } from '../../services/habit';

import { DataContext } from '../../contexts/DataContext';

export default function DeleteHabitModal({ handleClose, habit_id, getData }) {
  const { user_id } = useContext(DataContext)

  const handleDelete = async () => {
    await deleteHabit(habit_id)
    .then(async (msg) => {
        showToastSuccess(msg, '')
        getData()
        handleClose()
    })
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => handleClose()} style={styles.container}>
        <CenteredContainer style={{backgroundColor: 'rgba(0,0,0,0.3)', width: '100%'}}>
            <DeleteText>Do you really want to delete this habit?</DeleteText>
            <ContainerRoundedButton>
                <RoundedButton onPress={() => handleClose()} style={{backgroundColor: 'red'}}>
                  <AntDesign name="close" size={28} color="black" />
                </RoundedButton>
                <RoundedButton onPress={() => handleDelete()} style={{backgroundColor: '#64e866'}}>
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

