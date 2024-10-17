import Image from 'next/image';
import type { ReactElement } from 'react';

const BalanceImg = (): ReactElement => {
  return (
    <div className="mt-[-8px] flex flex-col items-center md:w-[37%] md:rotate-90 lg:mr-[10px] lg:w-[48%]">
      <div className="flex w-fit flex-col">
        <div className="h-[10px] w-[10px] rounded-full bg-orange md:translate-y-[-35px] lg:md:translate-y-[-165px] lg:scale-125"></div>
        <div className="mb-[-5px] h-[53px] w-[2px] translate-x-[3.5px] translate-y-[-2px] bg-orange md:mt-[-40px] md:h-[93px] lg:mt-[-170px] lg:h-[223px]"></div>
      </div>
      <div className="flex aspect-square w-[80px] items-center justify-center rounded-xl bg-orange lg:w-[120px]">
        <Image
          src="/images/balance-image.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="balance image"
          className="w-[54px] md:rotate-[-90deg] lg:w-[80px]"
        />
      </div>
      <div className="flex w-fit flex-col">
        <div className="mt-[-5px] h-[53px] w-[2px] translate-x-[3.5px] translate-y-[2px] bg-orange md:mb-[-40px] md:h-[93px] lg:mb-[-170px] lg:h-[223px]"></div>
        <div className="h-[10px] w-[10px] rounded-full bg-orange md:translate-y-[35px] lg:md:translate-y-[165px] lg:scale-125"></div>
      </div>
    </div>
  );
};

export default BalanceImg;
