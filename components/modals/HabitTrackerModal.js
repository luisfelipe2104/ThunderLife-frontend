import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { ModalContainer, CenteredContainer, Button } from '../HabitTrackerComponents'

function HabitTrackerModal({ handleClose }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => handleClose()} style={styles.container}>
        <CenteredContainer>
          <ModalContainer activeOpacity={1}>
            <Button
              onPress={() => handleClose()}
              style={{ backgroundColor: "green" }}
            >
              <Text>ok</Text>
            </Button>
            <Button style={{ backgroundColor: "red" }}>
              <Text>no</Text>
            </Button>
            <Button style={{ backgroundColor: "gray" }}>
              <Text>op</Text>
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