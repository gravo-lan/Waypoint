import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonMenu } from './ButtonMenu/ButtonMenu';
import { FlameSvgrepoCom1Icon } from './FlameSvgrepoCom1Icon';
import { Ic_settings_48px1Icon } from './Ic_settings_48px1Icon';
import { IconmonstrCheckMark11Icon } from './IconmonstrCheckMark11Icon';
import { IconmonstrCheckMark12Icon } from './IconmonstrCheckMark12Icon';
import { IconmonstrCheckMark13Icon } from './IconmonstrCheckMark13Icon';
import { IconmonstrCheckMark14Icon } from './IconmonstrCheckMark14Icon';
import classes from './MySchedule.module.css';
import { Rectangle44Icon } from './Rectangle44Icon';
import { Rectangle45Icon } from './Rectangle45Icon';

interface Props {
  className?: string;
}
/* @figmaId 1:6 */
export const MySchedule: FC<Props> = memo(function MySchedule(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.mySchedule}>My Schedule:</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.weeklyTotal}>Weekly Total:</div>
      <ButtonMenu />
      <div className={classes.ic_settings_48px1}>
        <Ic_settings_48px1Icon className={classes.icon} />
      </div>
      <div className={classes.mon}>Mon</div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.tue}>Tue</div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.wed}>Wed</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.thu}>Thu</div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.fri}>Fri</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.rectangle23}></div>
      <div className={classes.sat}>Sat</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.sun}>Sun</div>
      <div className={classes.rectangle35}></div>
      <div className={classes.rectangle36}></div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle40}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.rectangle37}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.rectangle42}></div>
      <div className={classes.rectangle43}></div>
      <div className={classes.rectangle44}>
        <Rectangle44Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle45}>
        <Rectangle45Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle46}></div>
      <div className={classes.rectangle47}></div>
      <div className={classes.rectangle362}></div>
      <div className={classes.rectangle232}></div>
      <div className={classes.rectangle233}></div>
      <div className={classes.rectangle61}></div>
      <div className={classes.rectangle65}></div>
      <div className={classes.rectangle66}></div>
      <div className={classes.rectangle67}></div>
      <div className={classes.rectangle234}></div>
      <div className={classes.rectangle60}></div>
      <div className={classes.rectangle62}></div>
      <div className={classes.rectangle48}></div>
      <div className={classes.rectangle49}></div>
      <div className={classes.rectangle63}></div>
      <div className={classes.rectangle64}></div>
      <div className={classes.rectangle50}></div>
      <div className={classes.rectangle51}></div>
      <div className={classes.rectangle52}></div>
      <div className={classes.rectangle53}></div>
      <div className={classes.rectangle54}></div>
      <div className={classes.rectangle55}></div>
      <div className={classes.rectangle56}></div>
      <div className={classes.rectangle57}></div>
      <div className={classes.rectangle58}></div>
      <div className={classes.rectangle59}></div>
      <div className={classes.rectangle512}></div>
      <div className={classes.todayIsWednesday}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Today Is: </span>
          <span className={classes.label2}>Wednesday</span>
        </p>
      </div>
      <div className={classes.iconmonstrCheckMark11}>
        <IconmonstrCheckMark11Icon className={classes.icon4} />
      </div>
      <div className={classes.iconmonstrCheckMark14}>
        <IconmonstrCheckMark14Icon className={classes.icon5} />
      </div>
      <div className={classes.iconmonstrCheckMark12}>
        <IconmonstrCheckMark12Icon className={classes.icon6} />
      </div>
      <div className={classes.iconmonstrCheckMark13}>
        <IconmonstrCheckMark13Icon className={classes.icon7} />
      </div>
      <div className={classes.flameSvgrepoCom1}>
        <FlameSvgrepoCom1Icon className={classes.icon8} />
      </div>
      <div className={classes._99}>9/9</div>
    </div>
  );
});
