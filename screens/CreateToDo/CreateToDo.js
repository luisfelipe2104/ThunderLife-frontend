import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, MainContainer, HeaderTitle, HeaderContainerWrapper, InputContainer, Input } from '../../components/HabitTrackerComponents'

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

import { createToDo } from '../../services/toDo';
import { DataContext } from '../../contexts/DataContext';

import { showToastSuccess, showToastError } from '../../components/toast/Toast';

export default function CreateToDo({ navigation }) {
    const [toDoName, setToDoName] = useState('')
    const [toDoDescription, setToDoDescription] = useState('')
    const [scheduledHour, setScheduledHour] = useState('')

    const { user_id } = useContext(DataContext)

    const handleSubmit = async () => {
        try {
            const result = await createToDo(user_id, toDoName, scheduledHour, toDoDescription)
            if (result.status === 'success') {
                showToastSuccess(result.data, '');
                navigation.navigate('ToDo')
            } else {
                showToastError(result.data, '')
            }
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <MainContainer>
        <Header>
            <HeaderContainerWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('HabitTracker')}>
                    <Feather name="arrow-left" size={24} color="#FFF" />
                </TouchableOpacity>
                <HeaderTitle>Add ToDo</HeaderTitle>
            </HeaderContainerWrapper>

            <TouchableOpacity onPress={() => handleSubmit()}>
                <MaterialIcons name="done" size={30} color="#FFF" />
            </TouchableOpacity>
        </Header>
        <InputContainer>
            <Input
                value={toDoName}
                onChangeText={(text) => setToDoName(text)}
                placeholder='To-do name'
                placeholderTextColor="#858585" 
                maxLength={20}
            />
            <Input 
                value={toDoDescription}
                onChangeText={(text) => setToDoDescription(text)}
                placeholder='Description (Optional)'
                placeholderTextColor="#858585" 
                maxLength={40}
            />
            <Input 
                value={scheduledHour}
                onChangeText={(text) => setScheduledHour(text)}
                keyboardType="numeric"
                maxLength={3}
                placeholder='Hour (when it need to be done)'
                placeholderTextColor="#858585" 
            />
        </InputContainer>
    </MainContainer>
  )
}