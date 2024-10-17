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
