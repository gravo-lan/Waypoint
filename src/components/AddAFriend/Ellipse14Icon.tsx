import { memo, SVGProps } from 'react';

const Ellipse14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 51 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={25.5} cy={25.5} r={25.5} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse14Icon);
export { Memo as Ellipse14Icon };
