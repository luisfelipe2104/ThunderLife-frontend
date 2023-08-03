import { createStackNavigator } from '@react-navigation/stack';
import HabitTracker from '../screens/HabitTracker/HabitTracker';
import CreateHabit from '../screens/CreateHabit/CreateHabit';
import HabitInfo from '../screens/HabitInfo/HabitInfo';
import Landing from '../screens/Landing/Landing';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';
import ToDo from '../screens/ToDo/ToDo'
import CreateToDo from '../screens/CreateToDo/CreateToDo';

const Stack = createStackNavigator();

export function HabitTrackerRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: false
    }}
      initialRouteName='HabitTracker'
    >
      <Stack.Screen name="HabitTracker" options={{headerShown: false}} component={HabitTracker} />
      <Stack.Screen name="CreateHabit" options={{headerShown: false}} component={CreateHabit} />
      <Stack.Screen name="HabitInfo" options={{headerShown: false}} component={HabitInfo} />
    </Stack.Navigator>
  );
}

export function ToDoRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: false
    }}
      initialRouteName='ToDo'
    >
      <Stack.Screen name="ToDo" options={{headerShown: false}} component={ToDo} />
      <Stack.Screen name="CreateToDo" options={{headerShown: false}} component={CreateToDo} />
    </Stack.Navigator>
  );
}

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: false
    }}
      initialRouteName='Landing'
    >
      <Stack.Screen name="Landing" options={{headerShown: false}} component={Landing} />
      <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
      <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
    </Stack.Navigator>
  );
}

