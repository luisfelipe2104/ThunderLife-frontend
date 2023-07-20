import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { MainContainer, Button, ButtonText } from '../../components/HabitTrackerComponents'
import { DataContext } from '../../contexts/DataContext'

export default function Settings() {
  const { logout } = useContext(DataContext)

  return (
    <MainContainer>
        <Text>Settings</Text>
        <Button onPress={() => logout()}>
          <ButtonText>Logout</ButtonText>
        </Button>
    </MainContainer>
  )
}