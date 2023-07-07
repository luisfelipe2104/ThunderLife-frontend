import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, HeaderTitle, HeaderContainerWrapper, InputContainer, Input } from '../../components/HabitTrackerComponents'

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

import {Calendar, LocaleConfig} from 'react-native-calendars';
import { DataContext } from '../../contexts/DataContext';

import { showToastSuccess, showToastError } from '../../components/toast/Toast';

export default function HabitInfo({ navigation }) {
    const [habitName, setHabitName] = useState('')
    const [habitDescritpion, setHabitDescritpion] = useState('')
    const [habitGoal, setHabitGoal] = useState(null)

    const { user_id } = useContext(DataContext)
    const [selected, setSelected] = useState('');
    

  return (
    <View style={{backgroundColor: '#000', minHeight: '100%'}}>
        <Header>
            <HeaderContainerWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('HabitTracker')}>
                    <Feather name="arrow-left" size={24} color="#FFF" />
                </TouchableOpacity>
                <HeaderTitle>Habit Info</HeaderTitle>
            </HeaderContainerWrapper>

            <TouchableOpacity onPress={() => navigation.navigate("HabitTracker")}>
                <MaterialIcons name="done" size={30} color="#FFF" />
            </TouchableOpacity>
        </Header>
        
        <Calendar
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            markedDates={{
                '2023-07-07': {selected: true, marked: true, selectedColor: 'red'},
                '2023-07-08': {marked: true},
                '2023-07-09': {selected: true, marked: true, selectedColor: 'red'},
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                height: 400,
                borderRadius: 15,
                marginHorizontal: 2,
                marginTop: 10,
            }}
              theme={{
                backgroundColor: '#000000',
                calendarBackground: '#000000',
                textSectionTitleColor: '#FFFFFF',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#FFFFFF',
                textDisabledColor: '#d9e',
                monthTextColor: '#FFFFFF',
                arrowColor: '#FFFFFF',
                arrowStyle: {
                    color: '#FFFFFF'
                }
              }}
        />
    </View>
  )
}