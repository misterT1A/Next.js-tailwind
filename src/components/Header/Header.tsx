'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { useState, type ReactElement } from 'react';

import { Sections } from '@/types/types';

import Container from '../Container/Container';

const links = ['Преимущества', 'Как работаем'];

const Header = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (event: MouseEvent<HTMLAnchorElement>): void => {
    const element = (event.target as HTMLElement).textContent;
    switch (element) {
      case 'Преимущества':
        const section1 = document.getElementById(Sections.balanceSection);
        if (section1) {
          section1.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
        break;
      case 'Как работаем':
        const section2 = document.getElementById(Sections.reportsSection);
        if (section2) {
          section2.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-gray3 py-[15px] md:py-[32px] xl:py-[48px]">
      <Container>
        <div className="flex items-center justify-between md:px-[10px] lg:px-0">
          <div className="relative z-50 w-fit rounded-lg bg-white px-[34px] py-[5px] font-[900] text-black md:px-[48px] md:text-[22px] md:font-extrabold">
            LOGO
          </div>
          <button
            onClick={toggleMenu}
            className="relative z-50 h-[32px] w-[32px] rounded-lg border-[2px] border-orange p-[4px] focus:outline-none md:h-[44px] md:w-[44px] lg:hidden"
          >
            <span
              className={`block h-[2px] w-full origin-center transform bg-orange transition ${
                menuOpen ? 'translate-y-1.5 rotate-45 md:translate-y-2.5' : ''
              }`}
            ></span>
            <span
              className={`mt-1 block h-[2px] w-full transform bg-orange transition md:mt-2 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`mt-1 block h-[2px] w-full transform bg-orange transition md:mt-2 ${
                menuOpen ? '-translate-y-1.5 -rotate-45 md:-translate-y-2.5' : ''
              }`}
            ></span>
          </button>
          <nav
            className={`fixed right-0 top-0 z-40 flex h-full w-full transform flex-col justify-center bg-white text-black transition md:w-[41%] ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:static lg:h-fit lg:translate-x-0 lg:bg-transparent`}
          >
            <ul className="flex flex-col items-start p-8 font-[700] lg:flex lg:flex-row lg:justify-end lg:gap-[65px] lg:p-0 lg:tracking-[0.5px]">
              {links.map((elem, index) => (
                <li key={index} className="mb-4 lg:mb-0">
                  <Link
                    onClick={handleScroll}
                    href="#"
                    className="text-[14px] transition hover:text-orange active:underline"
                  >
                    {elem}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
