import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { ModalContainer, CenteredContainer, Button } from '../HabitTrackerComponents'

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 

function HabitTrackerModal({ handleClose }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => handleClose()} style={styles.container}>
        <CenteredContainer>
          <ModalContainer activeOpacity={1}>
            <Button
              onPress={() => handleClose()}
              style={{ backgroundColor: "green" }}
            >
              <MaterialIcons name="done" size={24} color="black" />
            </Button>
            <Button style={{ backgroundColor: "red" }}>
              <AntDesign name="close" size={24} color="black" />
            </Button>
            <Button style={{ backgroundColor: "gray" }}>
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