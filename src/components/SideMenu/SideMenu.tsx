import resets from '../_resets.module.css';
import { AddFriendSvgrepoCom1Icon } from './AddFriendSvgrepoCom1Icon';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { Ellipse12Icon } from './Ellipse12Icon';
import { GroupIcon } from './GroupIcon';
import classes from './SideMenu.module.css';

export function SideMenu({isOpen, onClose, navigation} : {isOpen:any, onClose:any, navigation:any}) {
  return (
    <>
      {
        isOpen ? (
          <div className={`${resets.clapyResets} ${classes.root}`}>
            <div className={classes.rectangle23}></div>
            <div className={classes.mySchedule} onClick = {() => navigation.navigate('My Schedule')}>My Schedule</div>
            <div className={classes.leaderboard} onClick = {() => navigation.navigate('Leaderboard')}>Leaderboard</div>
            <div className={classes.shop} onClick = {() => {navigation.navigate('Shop')}}>Shop</div>
            <div className={classes.restrictions}>Restrictions</div>
            <div className={classes.frame14}>
              <div className={classes.adamPei}>Adam pei</div>
              <div className={classes.ellipse12}>
                <Ellipse12Icon className={classes.icon} />
              </div>
            </div>
            <div className={classes.group}>
              <GroupIcon className={classes.icon2} />
            </div>
            <div className={classes.addFriendSvgrepoCom1}>
              <AddFriendSvgrepoCom1Icon className={classes.icon3} />
            </div>
            <div onClick={onClose} style={{left:'50%'}}><ButtonMenu /></div>
          </div>
        ) : null
      }
    </>);
};
