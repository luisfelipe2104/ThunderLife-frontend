import { createStackNavigator } from '@react-navigation/stack';
import HabitTracker from '../screens/HabitTracker/HabitTracker';
import CreateHabit from '../screens/CreateHabit/CreateHabit';

const Stack = createStackNavigator();

export function HabitTrackerScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HabitTracker" options={{headerShown: false}} component={HabitTracker} />
      <Stack.Screen name="CreateHabit" options={{headerShown: false}} component={CreateHabit} />
    </Stack.Navigator>
  );
}