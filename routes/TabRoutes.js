import React from 'react'

import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';  

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HabitTrackerScreens } from './StackRoutes';
import Notes from '../screens/Notes/Notes'
import Settings from '../screens/Settings/Settings'
import ToDo from '../screens/ToDo/ToDo'

export default function TabRoutes() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="HabitTracker"
        backBehavior="history"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>

        <Tab.Screen
          name="HabitTracker"
          component={HabitTrackerScreens
        }
          options={{
            headerShown: false,
            tabBarLabel: 'Tracker',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="tasklist" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ToDo"
          component={ToDo
        }
          options={{
            headerShown: false,
            tabBarLabel: 'To-Do',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="tasks" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={Notes
        }
          options={{
            headerShown: false,
            tabBarLabel: 'Notes',
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="pencil" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={Settings
        }
          options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="setting"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}
