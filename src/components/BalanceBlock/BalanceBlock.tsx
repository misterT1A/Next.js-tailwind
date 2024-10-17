'use client';

import Image from 'next/image';
import { useEffect, type ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { Sections, type ICompTypes } from '@/types/types';

import BalanceImg from './BalanceImg';
import Container from '../Container/Container';

const content = [
  { text1: 'Частотность под контролем', text2: 'Чтобы не ронять NPS и не увеличивать отток пользователей' },
  'image',
  { text1: 'Максимальная выручка', text2: 'За счёт заполенения всех рекламных мест по высокой цене' },
];

const BalanceBlock = ({ isActive, onInView }: ICompTypes): ReactElement => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(Sections.balanceSection);
    }
  }, [onInView, inView]);

  return (
    <section
      ref={ref}
      id={Sections.balanceSection}
      className={`bg-gray4 pb-[17px] pt-[43px] md:pb-[70px] md:pt-[82px] lg:pb-[159px] lg:pt-[106px] ${isActive ? 'border-2 border-orange' : ''}`}
    >
      <Container>
        <>
          <h3 className="mb-[34px] text-[24px] font-[700] leading-[31px] md:m-auto md:mb-[62px] md:max-w-[80%] md:text-center md:text-[28px] md:leading-[120%] lg:mb-[87px] lg:max-w-full lg:text-[32px]">
            Баланс между выручкой и удовлетворённостью пользователей
          </h3>
          <div className="flex flex-col md:flex-row">
            {content.map((elem, index) => {
              if (typeof elem === 'string') {
                return <BalanceImg key={index} />;
              } else {
                return (
                  <div key={index} className="flex flex-col gap-[18px] p-[24px] md:w-[31.5%] lg:w-[25%] lg:p-[32px]">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/images/arrow-up.svg"
                      className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
                      alt="arrow"
                    ></Image>
                    <p className="text-[20px] font-[700] leading-[26px] md:pr-[40px] md:text-[16px] md:leading-[20px] lg:pr-[40px] lg:text-[24px] lg:leading-[32px]">
                      {elem.text1}
                    </p>
                    <p className="text-[14px] font-[400] leading-[18px] md:pr-[18px] md:text-[12px] md:leading-[16px] lg:pr-[1px] lg:text-[18px] lg:leading-[22px]">
                      {elem.text2}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </>
      </Container>
    </section>
  );
};

export default BalanceBlock;
