import type { ReactElement } from 'react';

import type { ButtonProps } from '@/types/types';
import { BtnTypeEnum } from '@/types/types';

const Button = ({ text, styles, variant, submit, disabled }: ButtonProps): ReactElement => {
  const variantStyle =
    variant === BtnTypeEnum.orange ? 'bg-orange hover:bg-darkOrange text-white' : 'bg-black text-white hover:bg-gray1';
  return (
    <button
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      className={`relative z-20 w-full rounded-[10px] transition ${variantStyle} px-[20px] py-[12px] ${styles} disabled:bg-gray1`}
    >
      {text}
    </button>
  );
};

export default Button;
