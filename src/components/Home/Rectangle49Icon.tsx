import { memo, SVGProps } from 'react';

const Rectangle49Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 255 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 30C0 13.4315 13.4315 0 30 0H225C241.569 0 255 13.4315 255 30V43C255 59.5685 241.569 73 225 73H30C13.4315 73 0 59.5685 0 43V30Z'
      fill='#897F9D'
    />
  </svg>
);

const Memo = memo(Rectangle49Icon);
export { Memo as Rectangle49Icon };
