import React from 'react'
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user_id, setUser_id] = useState('1')
    const logout = () => setIsLoggedIn(false)

    const [habitStreak, setHabitStreak] = useState([])
    const [habitGoal, setHabitGoal] = useState('')
    const [streakCounter, setStreakCounter] = useState('')
    const [habitName, setHabitName] = useState('')

    useEffect(() => {

    }, [])

  return (
    <DataContext.Provider
        value={{
            isLoggedIn, 
            setIsLoggedIn,
            user_id, 
            setUser_id,
            logout,
            habitStreak, 
            setHabitStreak,
            habitGoal, 
            setHabitGoal,
            habitName, 
            setHabitName,
            streakCounter, 
            setStreakCounter,
        }}
    >
        { children }
    </DataContext.Provider>
  )
}
