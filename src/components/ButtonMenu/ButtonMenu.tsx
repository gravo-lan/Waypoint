import resets from '../_resets.module.css';
import classes from './ButtonMenu.module.css';

export function ButtonMenu() {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
    </div>
  );
};
