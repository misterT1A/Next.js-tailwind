import type { ReactElement } from 'react';

interface ButtonProps {
  text: string;
  styles?: string;
}

const Button = ({ text, styles }: ButtonProps): ReactElement => {
  return (
    <button className={`relative z-20 w-full rounded-[10px] bg-orange px-[20px] py-[12px] ${styles}`}>{text}</button>
  );
};

export default Button;
