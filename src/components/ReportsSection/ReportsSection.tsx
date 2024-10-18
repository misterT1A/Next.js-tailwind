'use client';

import Image from 'next/image';
import { memo, useEffect, type ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { BtnTypeEnum, Sections, type ICompTypes } from '@/types/types';

import Button from '../Button/Button';
import Container from '../Container/Container';

const list = [
  'Выручка, CTR, показы и другие показатели в реальном времени.',
  'Инструменты контроля качества трафика.',
  'Ежемесячные автоматические отчёты для каждого правообладателя.',
];

const ReportsSection = memo(function ReportsSection({ isActive, onInView }: ICompTypes): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(Sections.reportsSection);
    }
  }, [onInView, inView]);

  return (
    <section
      id={Sections.reportsSection}
      ref={ref}
      className={`overflow-hidden bg-gray4 pb-[50px] pt-[20px] md:pb-[71px] lg:pt-[97px] ${isActive ? 'border-2 border-orange' : ''}`}
    >
      <Container>
        <div className="flex flex-col gap-[47px] md:flex-row md:gap-[64px] md:pt-[30px] lg:gap-[165px]">
          <div className="flex flex-col gap-[34px] md:min-w-[48.5%] lg:min-w-[42.5%]">
            <div className="title_2 flex flex-col lg:flex-row lg:flex-wrap">
              <span className="order-1">Подробные&nbsp;</span>
              <span className="order-2">отчёты для вас и&nbsp;</span>
              <span className="order-3">правообладателей</span>
            </div>
            <ul className="flex flex-col gap-[20px]">
              {list.map((elem, index) => (
                <li key={index} className="flex gap-[21px]">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/arrow-up.svg"
                    className="h-[18px] w-[18px] lg:h-[26px] lg:w-[26px]"
                    alt="arrow"
                  ></Image>
                  <p className="text_2">{elem}</p>
                </li>
              ))}
            </ul>
            <Button
              variant={BtnTypeEnum.black}
              styles="md:max-w-[63%] lg:mt-[43px] lg:max-w-[43%]"
              text="Заказать звонок"
            />
          </div>
          <div className="relative z-20 h-[105vw] w-[110%] pl-[12px] md:mt-[38px] md:h-[35vw] lg:mt-[-24px] lg:h-[32vw] lg:max-h-[482px]">
            <Image
              src="/images/laptop.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="laptop"
              className="h-full w-auto max-w-[118%] object-cover object-left lg:max-w-[128%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
});

export default ReportsSection;
