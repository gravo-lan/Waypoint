import { memo, SVGProps } from 'react';

const ArrowDownIcon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_73_49)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.368373 2.91411L3.06014 0.3509C3.55137 -0.11687 4.35572 -0.115679 4.84507 0.3509L15.9996 10.9727L27.1548 0.3509C27.6461 -0.11687 28.451 -0.114489 28.9398 0.3509L31.6315 2.91411C32.1209 3.38069 32.1209 4.14721 31.6315 4.61379L19.6064 16.064L19.5839 16.086L16.8921 18.6492C16.4027 19.1146 15.5984 19.117 15.1072 18.6492L12.4154 16.086L12.3929 16.064L0.368373 4.61379C-0.123483 4.14602 -0.123483 3.38188 0.368373 2.91411Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_73_49'>
        <rect width={32} height={19} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ArrowDownIcon1Icon);
export { Memo as ArrowDownIcon1Icon };
