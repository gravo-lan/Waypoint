import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowDownIcon1Icon } from './ArrowDownIcon1Icon';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { PlantLeafSvgrepoCom1Icon } from './PlantLeafSvgrepoCom1Icon';
import { PlantLeafSvgrepoCom2Icon } from './PlantLeafSvgrepoCom2Icon';
import { Rectangle68Icon } from './Rectangle68Icon';
import { Rectangle72Icon } from './Rectangle72Icon';
import { Rectangle73Icon } from './Rectangle73Icon';
import { Rectangle73Icon2 } from './Rectangle73Icon2';
import { Rectangle73Icon3 } from './Rectangle73Icon3';
import { Rectangle73Icon4 } from './Rectangle73Icon4';
import { Rectangle73Icon5 } from './Rectangle73Icon5';
import { Rectangle77Icon } from './Rectangle77Icon';
import { Rectangle77Icon2 } from './Rectangle77Icon2';
import { Rectangle77Icon3 } from './Rectangle77Icon3';
import { Rectangle77Icon4 } from './Rectangle77Icon4';
import { Rectangle77Icon5 } from './Rectangle77Icon5';
import classes from './Themes.module.css';

interface Props {
  className?: string;
}
/* @figmaId 28:40 */
export const Themes: FC<Props> = memo(function Themes(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle49}></div>
      <div className={classes.shop}>Shop</div>
      <ButtonMenu />
      <div className={classes.rectangle68}>
        <Rectangle68Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle69}></div>
      <div className={classes.rectangle70}></div>
      <div className={classes.rectangle71}></div>
      <div className={classes.rectangle72}>
        <Rectangle72Icon className={classes.icon2} />
      </div>
      <div className={classes.bigGoals}>Big Goals</div>
      <div className={classes._35Points}>35 Points</div>
      <div className={classes.rectangle73}>
        <Rectangle73Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle74}></div>
      <div className={classes.rectangle75}></div>
      <div className={classes.rectangle76}></div>
      <div className={classes.rectangle77}>
        <Rectangle77Icon className={classes.icon4} />
      </div>
      <div className={classes.nature}>Nature</div>
      <div className={classes._20Points}>20 Points</div>
      <div className={classes.rectangle732}>
        <Rectangle73Icon2 className={classes.icon5} />
      </div>
      <div className={classes.rectangle742}></div>
      <div className={classes.rectangle752}></div>
      <div className={classes.rectangle762}></div>
      <div className={classes.rectangle772}>
        <Rectangle77Icon2 className={classes.icon6} />
      </div>
      <div className={classes.monochrome}>Monochrome</div>
      <div className={classes._20Points2}>20 Points</div>
      <div className={classes.rectangle733}>
        <Rectangle73Icon3 className={classes.icon7} />
      </div>
      <div className={classes.rectangle743}></div>
      <div className={classes.rectangle753}></div>
      <div className={classes.rectangle763}></div>
      <div className={classes.rectangle773}>
        <Rectangle77Icon3 className={classes.icon8} />
      </div>
      <div className={classes.sunsetCoastal}>Sunset Coastal</div>
      <div className={classes._30Points}>30 Points</div>
      <div className={classes.rectangle734}>
        <Rectangle73Icon4 className={classes.icon9} />
      </div>
      <div className={classes.rectangle744}></div>
      <div className={classes.rectangle754}></div>
      <div className={classes.rectangle764}></div>
      <div className={classes.rectangle774}>
        <Rectangle77Icon4 className={classes.icon10} />
      </div>
      <div className={classes.sunset}>Sunset</div>
      <div className={classes._25Points}>25 Points</div>
      <div className={classes.rectangle735}>
        <Rectangle73Icon5 className={classes.icon11} />
      </div>
      <div className={classes.rectangle745}></div>
      <div className={classes.rectangle755}></div>
      <div className={classes.rectangle765}></div>
      <div className={classes.rectangle775}>
        <Rectangle77Icon5 className={classes.icon12} />
      </div>
      <div className={classes.lily}>Lily</div>
      <div className={classes._30Points2}>30 Points</div>
      <div className={classes.plantLeafSvgrepoCom1}>
        <PlantLeafSvgrepoCom1Icon className={classes.icon13} />
      </div>
      <div className={classes.plantLeafSvgrepoCom2}>
        <PlantLeafSvgrepoCom2Icon className={classes.icon14} />
      </div>
      <div className={classes.currentTheme}>Current Theme:</div>
      <div className={classes.basic}>Basic</div>
      <div className={classes.arrowDownIcon1}>
        <ArrowDownIcon1Icon className={classes.icon15} />
      </div>
    </div>
  );
});
