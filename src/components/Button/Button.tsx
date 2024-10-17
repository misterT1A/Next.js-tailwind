import type { ReactElement } from 'react';

export enum BtnTypeEnum {
  'orange',
  'black',
}

interface ButtonProps {
  text: string;
  styles?: string;
  variant: BtnTypeEnum;
}

const Button = ({ text, styles, variant }: ButtonProps): ReactElement => {
  const variantStyle = variant === BtnTypeEnum.orange ? 'bg-orange' : 'bg-black text-white';
  return (
    <button className={`relative z-20 w-full rounded-[10px] ${variantStyle} px-[20px] py-[12px] ${styles}`}>
      {text}
    </button>
  );
};

export default Button;
