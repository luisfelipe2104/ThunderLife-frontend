import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, HeaderTitle, HeaderContainerWrapper } from '../../components/HabitTrackerComponents'

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

export default function CreateHabit({ navigation }) {
  return (
    <View>
        <Header>
            <HeaderContainerWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('HabitTracker')}>
                    <Feather name="arrow-left" size={24} color="#FFF" />
                </TouchableOpacity>
                <HeaderTitle>Add Habit</HeaderTitle>
            </HeaderContainerWrapper>

            <TouchableOpacity>
                <MaterialIcons name="done" size={30} color="#FFF" />
            </TouchableOpacity>
        </Header>
        <Text>CreateHabit</Text>
    </View>
  )
}