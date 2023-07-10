import { createStackNavigator } from '@react-navigation/stack';
import HabitTracker from '../screens/HabitTracker/HabitTracker';
import CreateHabit from '../screens/CreateHabit/CreateHabit';
import HabitInfo from '../screens/HabitInfo/HabitInfo';

const Stack = createStackNavigator();

export function HabitTrackerScreens() {
  return (
    <Stack.Navigator screenOptions={{
      animationEnabled: false
    }}>
      <Stack.Screen name="HabitTracker" options={{headerShown: false}} component={HabitTracker} />
      <Stack.Screen name="CreateHabit" options={{headerShown: false}} component={CreateHabit} />
      <Stack.Screen name="HabitInfo" options={{headerShown: false}} component={HabitInfo} />
    </Stack.Navigator>
  );
}