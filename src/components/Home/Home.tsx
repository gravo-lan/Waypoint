import resets from '../_resets.module.css';
import classes from './Home.module.css';
import { Rectangle2Icon } from './Rectangle2Icon';
import { Rectangle3Icon } from './Rectangle3Icon';
import { Rectangle4Icon } from './Rectangle4Icon';

function Home({ navigation } : {navigation:any}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.wayPoint}>WayPoint</div>
      <div className={classes.screenshot2024419At11231}></div>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon} />
      </div>
      <div className={classes.mySchedule}><button 
        onClick = {() => navigation.navigate('My Schedule')} 
        style = {{color:'#f0f2dd',fontSize:'40px',
        fontFamily:`Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        'Liberation Sans', sans-serif`}}
        >My Schedule</button></div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon2} />
      </div>
      <div className={classes.themes}>Themes</div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon3} />
      </div>
      <div className={classes.leaderboard}>
        <button 
        onClick = {() => navigation.navigate('Leaderboard')} 
        style = {{color:'#f0f2dd',fontSize:'40px',
        fontFamily:`Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        'Liberation Sans', sans-serif`}}
        >Leaderboard</button>
      </div>
      <div className={classes.week33}>Week 33</div>
      <div className={classes.rectangle48}></div>
      <div className={classes._82}>82</div>
      <div className={classes._822}>/82</div>
      <div className={classes._10}>#10</div>
    </div>
  );
}

export default Home;