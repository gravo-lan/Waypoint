import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { default as Home } from './components/Home/Home';
import { Leaderboard } from './components/Leaderboard/Leaderboard';
import { MySchedule } from './components/MySchedule/MySchedule';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LeaderboardScreen() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Leaderboard />
    </div>
  );
};

function ScheduleScreen() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MySchedule />
    </div>
  )
}

function HomeScreen( {navigation} : {navigation:any} ) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Home navigation={navigation} />
    </div>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="My Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
