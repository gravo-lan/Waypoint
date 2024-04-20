import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { default as Home } from './components/Home/Home';
import { default as Leaderboard } from './components/Leaderboard/Leaderboard';
import { default as MySchedule } from './components/MySchedule/MySchedule';
import { Themes } from './components/Themes/Themes';
import { default as AddAFriend } from './components/AddAFriend/AddAFriend';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LeaderboardScreen( {navigation} : {navigation:any} ) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Leaderboard navigation={navigation} />
    </div>
  );
};

function ScheduleScreen( {navigation} : {navigation:any} ) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MySchedule navigation={navigation}/>
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

function ShopScreen(  {navigation} : {navigation:any} ) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Themes/>
    </div>
  )
}

function AddFriend( {navigation} : {navigation:any }) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <AddAFriend navigation={navigation}/>
    </div>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{headerShown: false}}/>
        <Stack.Screen name="My Schedule" component={ScheduleScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Add a Friend" component={AddFriend} options={{headerShown: false}}/>
        <Stack.Screen name="Shop" component={ShopScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
