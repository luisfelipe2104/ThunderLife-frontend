import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Header, HeaderTitle, HeaderContainerWrapper, InputContainer, Input } from '../../components/HabitTrackerComponents'

import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';  

import {Calendar, LocaleConfig} from 'react-native-calendars';
import { ContributionGraph } from 'react-native-chart-kit';
import { DataContext } from '../../contexts/DataContext';

import { showToastSuccess, showToastError } from '../../components/toast/Toast';

export default function HabitInfo({ navigation }) {
    const [habitName, setHabitName] = useState('')
    const [habitDescritpion, setHabitDescritpion] = useState('')
    const [habitGoal, setHabitGoal] = useState(null)
    const [loaded, setLoaded] = useState(false)
    
    const [streakData, setStreakData] = useState({})
    const [commitsData, setCommitsData] = useState([])
    const { user_id, habitStreak } = useContext(DataContext)
    // const [selected, setSelected] = useState('');

    const screenWidth = Dimensions.get("window").width

    const chartConfig = {
        backgroundGradientFrom: "rgba(107, 107, 107, 0.9)",
        backgroundGradientTo: "rgba(31, 30, 30, 0.9)",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(112, 255, 71, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
          backgroundColor: "#01300e"
        }
      }


    function merge_options(obj1,obj2){
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
    }

    const handleCommits = async () => {
        const streakArray = habitStreak;
        await streakArray.forEach(async (streak) => {
            if (streak.status === "positive") {
                const commit = { date: streak.date, count: 1 }
                commitsData.push(commit)
                setCommitsData(commitsData)
            }
        });
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
        handleCommits()
    }, [habitStreak])

  return (
    <ScrollView style={{backgroundColor: '#000', minHeight: '100%'}}>
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
        
        <View>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                markedDates={
                    streakData
                }
                // hideExtraDays={true}
                // maxDate={new Date()}

                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    backgroundColor: '#2e2e2e',
                    color: '#FFFFFF',
                    paddingVertical: 20,
                    borderRadius: 15,
                    marginHorizontal: 2,
                    marginTop: 10,
                }}
                theme={{
                    backgroundColor: '#3b3b3b',
                    borderRadius: 20,
                    
                    calendarBackground: '#3b3b3b',
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
                    },

                    stylesheet: {
                        calendar: {
                            main: {
                                borderRadius: 20,
                            }
                        }
                    }
                }}
            />
        </View>

        <View style={{display: 'flex', alignItems: 'center', width: '100%', marginTop: 10}}>
            <ContributionGraph
                values={commitsData}
                endDate={new Date()}
                numDays={screenWidth / 4}
                width={(screenWidth / 100) * 95}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    </ScrollView>
  )
}