import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { Header, MainContainer, HeaderTitle, HeaderContainerWrapper, InputContainer, Input } from '../../components/HabitTrackerComponents'
import { ClockButton, ClockButtonText, ButtonContainer } from '../../components/ToDoComponents';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  
import { Entypo } from '@expo/vector-icons';

import { createToDo } from '../../services/toDo';
import { DataContext } from '../../contexts/DataContext';

import { showToastSuccess, showToastError } from '../../components/toast/Toast';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateToDo({ navigation }) {
    const [toDoName, setToDoName] = useState('')
    const [toDoDescription, setToDoDescription] = useState('')
    const [scheduledHour, setScheduledHour] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));
    const [isPickerShow, setIsPickerShow] = useState(false);
    const { user_id } = useContext(DataContext)

    const handleTimeChange = (event, value) => {
        setTime(value)
        const hour = value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`
        const minute = value.getMinutes() > 9 ? value.getMinutes() : `0${value.getMinutes()}`
        const time = `${hour}:${minute}`
        console.log(time);
        setScheduledHour(time);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    }

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

            <View>
                {/* The button that used to trigger the date picker */}
                {!isPickerShow && (
                    <ButtonContainer>
                        <ClockButton onPress={() => setIsPickerShow(true)}>
                            <Entypo name="clock" size={22} color="#FFF" />
                            <ClockButtonText> {scheduledHour ? ` ${scheduledHour}` : " Clock"}</ClockButtonText>
                        </ClockButton>
                    </ButtonContainer>
                )}

                {/* The date picker */}
                {isPickerShow && (
                    <View>
                        <DateTimePicker
                            value={time}
                            themeVariant={'dark'}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={handleTimeChange}
                            // disabled={false}
                            //   style={styles.datePicker}
                        />
                    </View>
                )}
            </View>
        </InputContainer>
    </MainContainer>
  )
}