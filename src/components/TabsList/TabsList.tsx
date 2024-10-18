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
              className={`transition-color tab_btn_1 relative z-10 w-1/2 px-[12px] py-[5px] duration-300 ease-in-out md:px-[22px] md:py-[6px] lg:px-[37px] lg:py-[10px] ${
                activeTab === index ? 'text-white' : 'text-gray1 hover:text-black'
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
      <div className="text_1 mt-[22px] min-h-[80px] md:mt-[19px] lg:min-h-[97px]">{content[activeTab]}</div>
    </div>
  );
};
export default TabsList;
