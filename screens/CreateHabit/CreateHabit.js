import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, HeaderTitle, HeaderContainerWrapper, InputContainer, Input } from '../../components/HabitTrackerComponents'

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

import { createHabit } from '../../services/habit';
import { DataContext } from '../../contexts/DataContext';

import { showToastSuccess, showToastError } from '../../components/toast/Toast';

export default function CreateHabit({ navigation }) {
    const [habitName, setHabitName] = useState('')
    const [habitDescritpion, setHabitDescritpion] = useState('')
    const [habitGoal, setHabitGoal] = useState(null)

    const { user_id } = useContext(DataContext)

    const handleSubmit = async () => {
        console.log(habitName, habitDescritpion, habitGoal, user_id);
        try {
            const result = await createHabit(habitName, habitDescritpion, habitGoal, user_id)
            if (result.status === 'success') {
                showToastSuccess(result.data, '');
                navigation.navigate('HabitTracker')
            } else {
                showToastError(result.data, '')
            }
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <View>
        <Header>
            <HeaderContainerWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('HabitTracker')}>
                    <Feather name="arrow-left" size={24} color="#FFF" />
                </TouchableOpacity>
                <HeaderTitle>Add Habit</HeaderTitle>
            </HeaderContainerWrapper>

            <TouchableOpacity onPress={() => handleSubmit()}>
                <MaterialIcons name="done" size={30} color="#FFF" />
            </TouchableOpacity>
        </Header>
        <InputContainer>
            <Input
                value={habitName}
                onChangeText={(text) => setHabitName(text)}
                placeholder='Habit Title'
                maxLength={20}
            />
            <Input 
                value={habitDescritpion}
                onChangeText={(text) => setHabitDescritpion(text)}
                placeholder='Description (Optional)'
                maxLength={40}
            />
            <Input 
                value={habitGoal}
                onChangeText={(text) => setHabitGoal(text)}
                keyboardType="numeric"
                maxLength={3}
                placeholder='Goal (How many days)'
            />
        </InputContainer>
    </View>
  )
}