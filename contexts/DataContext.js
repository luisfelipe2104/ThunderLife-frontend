import React from 'react'
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user_id, setUser_id] = useState('1')
    const logout = () => setIsLoggedIn(false)
    
    useEffect(() => {

    }, [])

  return (
    <DataContext.Provider
        value={{
            isLoggedIn, 
            setIsLoggedIn,
            user_id, 
            setUser_id,
            logout
        }}
    >
        { children }
    </DataContext.Provider>
  )
}
