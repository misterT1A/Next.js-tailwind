import type { ReactElement } from 'react';

import Button from '../Button/Button';
import Container from '../Container/Container';
import TabsList from '../TabsList/TabsList';

const MainSection = (): ReactElement => {
  return (
    <>
      <section>
        <div className="bg-mainBG relative z-10 bg-gray3 bg-contain bg-center bg-no-repeat pb-[100px] pt-[50px] text-black md:mt-[-96px] md:pb-[47px] md:pt-[158px] lg:mt-[-92px] lg:pb-[333px]">
          <Container>
            <>
              <h1 className="mb-[32px] text-[36px] font-[700] leading-[110%] tracking-[-1.6px] md:text-[52px] md:tracking-[-1.9px] lg:mb-[40px] lg:text-[80px] lg:tracking-[-3.3px]">
                Монетизируйте клиентскую базу, не снижая NPS
              </h1>
              <p className="text-[16px] font-[400] leading-[20px] md:w-[393px] md:text-[14px] lg:w-[600px] lg:text-[24px] lg:leading-[32px]">
                Найдите идеальный баланс выручки <br></br> и удовлетворённости пользователей с платформой рекламной
                монетизации
              </p>
            </>
          </Container>
        </div>
        <div className="mt-[-5px] bg-gray3 pt-[18px] lg:mt-[-292px] lg:pb-[94px] lg:pt-[39px]">
          <Container>
            <>
              <Button text="Заказать звонок" styles="lg:max-w-[210px]" />
              <div className="relative z-20 mt-[80px] flex flex-col md:mt-[120px] md:flex-row md:items-start lg:mt-[185px]">
                <h3 className="mb-[25px] text-[24px] font-[700] leading-[31px] md:w-[52%] md:pr-[60px] md:text-[28px] md:leading-[120%] lg:pr-[133px] lg:text-[32px]">
                  Дополнительные источники выручки для разных компаний
                </h3>
                <TabsList />
              </div>
            </>
          </Container>
        </div>
      </section>
    </>
  );
};

export default MainSection;
