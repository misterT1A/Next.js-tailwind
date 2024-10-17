'use client';

import type { ReactElement } from 'react';
import { useState } from 'react';

const TabsList = (): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Операторам', 'ОТТ сервисам'];
  const content = [
    'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации',
    'Дополнительные возможности обогащения данных об аудитории и монетизации',
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center md:w-[48%] lg:gap-[20px]">
      <div className="relative w-full">
        <div className="flex rounded-[6px] bg-white">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`transition-color relative z-10 w-1/2 px-[12px] py-[5px] text-[12px] font-[700] duration-300 ease-in-out md:px-[22px] md:py-[6px] md:text-[16px] md:leading-[21px] lg:px-[37px] lg:py-[10px] lg:text-[24px] lg:leading-[32px] ${
                activeTab === index ? 'text-white' : 'text-gray1'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          className="absolute left-0 top-0 h-full w-1/2 rounded-[5px] bg-black transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${activeTab * 100}%)`,
          }}
        />
      </div>
      <div className="mt-[22px] min-h-[80px] text-[16px] font-[400] leading-[20px] md:mt-[19px] md:text-[14px] lg:min-h-[97px] lg:text-[22px] lg:leading-[32px]">
        {content[activeTab]}
      </div>
    </div>
  );
};
export default TabsList;
