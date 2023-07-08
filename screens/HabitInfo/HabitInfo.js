import React, { useState, useContext, useEffect } from 'react'
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
    const [loaded, setLoaded] = useState(false)
    
    const [streakData, setStreakData] = useState({})
    const { user_id, habitStreak } = useContext(DataContext)
    // const [selected, setSelected] = useState('');

    function merge_options(obj1,obj2){
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
    }

    const handleStreakData = () => {
        habitStreak.forEach(async (streak) => {
            const sla = {}
            streakData[streak.date] = {selected: true, marked: false, selectedColor: streak.status == 'positive' && '#3f9406' || streak.status == 'negative' && '#ff0000' || streak.status == 'partial' && '#5c5c5c'}
            setStreakData(merge_options(sla, streakData))
        });
    }
    
    useEffect(() => {
        handleStreakData()
    }, [habitStreak])

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
                // setSelected(day.dateString);
            }}
            markedDates={
                streakData
            }
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