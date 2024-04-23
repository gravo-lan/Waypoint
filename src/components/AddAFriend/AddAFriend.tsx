import resets from '../_resets.module.css';
import classes from './AddAFriend.module.css';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { Ellipse14Icon } from './Ellipse14Icon';
import { SideMenu } from '../SideMenu/SideMenu';
import React from 'react';

function AddAFriend({navigation} : {navigation:any}) {
  var [isOverlayOpen, setIsOverlayOpen] = React.useState(false)
  isOverlayOpen = false

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse14} onClick={() => navigation.navigate('Leaderboard')}>
        <Ellipse14Icon className={classes.icon} />
      </div>
      <div onClick={() => setIsOverlayOpen(!isOverlayOpen)}><ButtonMenu /></div>
      <div className={classes.addAFriend}>Add a Friend</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.xxxxXxxx}>xxxx-xxxx</div>
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle27}></div>
      <div className={classes.sendRequest}>Send Request</div>
      <div className={classes.scanQRCode}>Scan QR Code</div>
      <div className={classes.yourFriendCodeYyyyYyyy}>
        <div className={classes.textBlock}>Your Friend Code:</div>
        <div className={classes.textBlock2}>yyyy-yyyy</div>
      </div>
      <div className={classes.rectangle26}></div>
      <div className={classes.image_2024419_1553274561}></div>
      <div className={classes.x} onClick={() => navigation.navigate('Leaderboard')}>x</div>
      <SideMenu isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} navigation={navigation}/>
    </div>
  );
};

export default AddAFriend;
