import React from 'react'
import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const logout = () => setIsLoggedIn(false)
    
    useEffect(() => {

    }, [])

  return (
    <DataContext.Provider
        value={{
            isLoggedIn, 
            setIsLoggedIn,
            logout
        }}
    >
        { children }
    </DataContext.Provider>
  )
}
