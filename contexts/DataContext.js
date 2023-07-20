import React from 'react'
import { createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user_id, setUser_id] = useState(null)
    const [habitStreak, setHabitStreak] = useState([])
    const [habitGoal, setHabitGoal] = useState('')
    const [streakCounter, setStreakCounter] = useState('')
    const [habitName, setHabitName] = useState('')
    
    const logout = async () => {
      await SecureStore.deleteItemAsync("isUserLoggedIn")
      await SecureStore.deleteItemAsync("user_id")
      setIsLoggedIn(false)
      setUser_id(null)
    }

    async function handleLogin(userId) {
      await SecureStore.setItemAsync("user_id", String(userId))
      await SecureStore.setItemAsync("isUserLoggedIn", 'loggedIn')

      getUserIsLoggedIn()
    }

    async function getUserIsLoggedIn() {
      let loginStatus = await SecureStore.getItemAsync('isUserLoggedIn');
      let userId = await SecureStore.getItemAsync('user_id');
  
      if (loginStatus == 'loggedIn') {
        setUser_id(userId);
        setIsLoggedIn(true)
        console.log(userId);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      } else {
        setUser_id(null)
        setIsLoggedIn(false)
      }
      return loginStatus
    }

    useEffect(() => {
      getUserIsLoggedIn()
    }, [])

  return (
    <DataContext.Provider
        value={{
            handleLogin,
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
