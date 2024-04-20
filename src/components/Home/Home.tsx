import resets from '../_resets.module.css';
import classes from './Home.module.css';
import { Rectangle2Icon } from './Rectangle2Icon';
import { Rectangle3Icon } from './Rectangle3Icon';
import { Rectangle4Icon } from './Rectangle4Icon';
import { Rectangle49Icon } from './Rectangle49Icon';

function Home({ navigation } : {navigation:any}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.wayPoint}>WayPoint</div>
      <div className={classes.screenshot2024419At11231}></div>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon} />
      </div>
      <div className={classes.mySchedule} onClick = {() => navigation.navigate('My Schedule')}>
        My Schedule
      </div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon2} />
      </div>
      <div className={classes.shop} onClick = {() => navigation.navigate('Shop')}>
        Shop
      </div>
      <div className={classes.rectangle49}>
        <Rectangle49Icon className={classes.icon3} />
      </div>
      <div className={classes.shop}>Shop</div>
      <div className={classes.restrictions}>Restrictions</div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon3} />
      </div>
      <div className={classes.leaderboard} onClick = {() => navigation.navigate('Leaderboard')}>
        Leaderboard
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