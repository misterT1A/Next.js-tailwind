export interface ICompTypes {
  isActive: boolean;
  onInView: (id: string) => void;
}

export enum Sections {
  mainSection = 'mainSection',
  balanceSection = 'balanceSection',
  partnerSection = 'partnerSection',
  reportsSection = 'reportsSection',
  formSection = 'formSection',
}

export enum BtnTypeEnum {
  'orange',
  'black',
}

export interface ButtonProps {
  disabled?: boolean;
  submit?: boolean;
  text: string;
  styles?: string;
  variant: BtnTypeEnum;
}
