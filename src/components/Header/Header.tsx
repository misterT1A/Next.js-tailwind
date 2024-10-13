'use client';

import Link from 'next/link';
import { useState, type ReactElement } from 'react';

import Container from '../Container/Container';

const Header = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray3 py-[15px] font-[family-name:var(--font-geist-Onest)] xl:py-[48px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="relative z-10 w-fit rounded-lg bg-white px-[34px] py-[5px] font-[900] text-black xl:px-[48px] xl:text-[22px] xl:font-extrabold">
            LOGO
          </div>
          <button
            onClick={toggleMenu}
            className="border-orange relative z-10 h-[32px] w-[32px] rounded-lg border-[2px] p-[4px] focus:outline-none lg:hidden"
          >
            <span
              className={`bg-orange block h-[2px] w-full origin-center transform transition-all duration-300 ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`bg-orange mt-1 block h-[2px] w-full transform transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`bg-orange mt-1 block h-[2px] w-full transform transition-all duration-300 ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </button>
          <nav
            className={`fixed right-0 top-0 flex h-full w-full transform flex-col justify-center bg-white text-black transition-transform duration-300 md:w-[41%] ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:static lg:h-fit lg:translate-x-0 lg:bg-transparent`}
          >
            <ul className="flex flex-col items-start p-8 font-[700] lg:flex lg:flex-row lg:justify-end lg:gap-[68px] lg:p-0 lg:tracking-[0.5px]">
              <li className="mb-4 lg:mb-0">
                <Link href="#" className="text-[14px]">
                  Преимущества
                </Link>
              </li>
              <li className="mb-4 lg:mb-0">
                <Link href="#" className="text-[14px]">
                  Как работаем
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
