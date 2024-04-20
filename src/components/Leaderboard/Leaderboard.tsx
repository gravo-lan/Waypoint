import React from 'react';
import resets from '../_resets.module.css';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { Ellipse13Icon } from './Ellipse13Icon';
import { SideMenu } from '../SideMenu/SideMenu';
import classes from './Leaderboard.module.css';

function Leaderboard( {navigation} : {navigation:any} ) {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false)

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse13} onClick={() => navigation.navigate('Add a Friend')} >
        <Ellipse13Icon className={classes.icon} />
      </div>
      <div onClick={() => setIsOverlayOpen(!isOverlayOpen)}><ButtonMenu /></div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.theo}>Theo</div>
      <div className={classes.alvin}>Alvin</div>
      <div className={classes.amboise}>Amboise</div>
      <div className={classes.nathan}>Nathan</div>
      <div className={classes.elliot}>Elliot</div>
      <div className={classes.you}>You</div>
      <div className={classes._967}>96.7%</div>
      <div className={classes._849}>84.9%</div>
      <div className={classes._783}>78.3%</div>
      <div className={classes._545}>54.5%</div>
      <div className={classes._268}>26.8%</div>
      <div className={classes._98}>9.8%</div>
      <div className={classes.myFriends}>My Friends:</div>
      <div className={classes.unnamed} onClick={() => navigation.navigate('Add a Friend') }>+</div>
      <div className={classes.week33}>Week 33</div>
      <SideMenu isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} navigation={navigation}/>
    </div>
  );
};

export default Leaderboard;
