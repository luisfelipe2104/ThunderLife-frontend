import React, { useContext } from 'react'
import TabRoutes from './TabRoutes'
import { AuthRoutes } from './StackRoutes'
import { DataContext } from '../contexts/DataContext'

export default function Routes() {
    const { isLoggedIn } = useContext(DataContext)

    if (isLoggedIn) {
        return (
            <TabRoutes />
        )
    } else {
        return (
            <AuthRoutes />
        )
    }
}
