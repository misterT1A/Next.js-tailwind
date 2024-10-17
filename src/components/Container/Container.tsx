import type { ReactElement } from 'react';

const Container = ({ children }: { children: ReactElement }): ReactElement => {
  return <div className="px-[16px] md:px-[40px] xl:m-auto xl:max-w-[1220px] xl:px-[30px]">{children}</div>;
};

export default Container;
