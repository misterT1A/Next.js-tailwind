'use client';

import { memo, useEffect, type ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { BtnTypeEnum, Sections, type ICompTypes } from '@/types/types';

import Button from '../Button/Button';
import Container from '../Container/Container';
import TabsList from '../TabsList/TabsList';

const MainSection = memo(function MainSection({ isActive, onInView }: ICompTypes): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(Sections.mainSection);
    }
  }, [onInView, inView]);

  return (
    <>
      <section id={Sections.mainSection} ref={ref} className={` ${isActive ? 'border-2 border-orange' : ''}`}>
        <div className="relative z-10 bg-gray3 bg-mainBG bg-cover bg-center bg-no-repeat pb-[100px] pt-[50px] text-black md:mt-[-96px] md:bg-auto md:bg-left md:pb-[185px] md:pt-[158px] lg:mt-[-92px] lg:bg-center lg:pb-[333px]">
          <Container>
            <>
              <h1 className="title_1 mb-[32px] lg:mb-[40px]">Монетизируйте клиентскую базу, не снижая NPS</h1>
              <p className="text_1 md:w-[393px] lg:w-[600px]">
                Найдите идеальный баланс выручки <br></br> и удовлетворённости пользователей с платформой рекламной
                монетизации
              </p>
            </>
          </Container>
        </div>
        <div className="mb:pb-[94px] mt-[-5px] bg-gray3 pb-[38px] pt-[18px] md:mt-[-143px] md:pb-[7px] lg:mt-[-292px] lg:pb-[94px] lg:pt-[39px]">
          <Container>
            <>
              <Button variant={BtnTypeEnum.orange} text="Заказать звонок" styles="lg:max-w-[210px]" />
              <div className="relative z-20 mt-[80px] flex flex-col md:mt-[120px] md:flex-row md:items-start lg:mt-[185px]">
                <h2 className="title_2 mb-[25px] md:w-[52%] md:pr-[60px] lg:pr-[133px]">
                  Дополнительные источники выручки для разных компаний
                </h2>
                <TabsList />
              </div>
            </>
          </Container>
        </div>
      </section>
    </>
  );
});

export default MainSection;
