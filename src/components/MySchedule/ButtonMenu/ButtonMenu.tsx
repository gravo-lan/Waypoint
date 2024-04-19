import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonMenu.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:18 */
export const ButtonMenu: FC<Props> = memo(function ButtonMenu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
    </div>
  );
});
