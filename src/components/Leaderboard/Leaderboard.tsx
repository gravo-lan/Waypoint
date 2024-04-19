import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonMenu } from './ButtonMenu/ButtonMenu';
import { Ellipse13Icon } from './Ellipse13Icon';
import classes from './Leaderboard.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:2 */
export const Leaderboard: FC<Props> = memo(function Leaderboard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse13}>
        <Ellipse13Icon className={classes.icon} />
      </div>
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
      <div className={classes.unnamed}>+</div>
      <ButtonMenu />
      <div className={classes.week33}>Week 33</div>
    </div>
  );
});
