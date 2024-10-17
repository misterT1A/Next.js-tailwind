import type { ReactElement } from 'react';

export enum BtnTypeEnum {
  'orange',
  'black',
}

interface ButtonProps {
  disabled?: boolean;
  submit?: boolean;
  text: string;
  styles?: string;
  variant: BtnTypeEnum;
}

const Button = ({ text, styles, variant, submit, disabled }: ButtonProps): ReactElement => {
  const variantStyle =
    variant === BtnTypeEnum.orange ? 'bg-orange hover:bg-darkOrange text-white' : 'bg-black text-white';
  return (
    <button
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      className={`relative z-20 w-full rounded-[10px] transition-all duration-300 ${variantStyle} px-[20px] py-[12px] ${styles} disabled:bg-gray1`}
    >
      {text}
    </button>
  );
};

export default Button;
