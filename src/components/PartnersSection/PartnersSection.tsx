'use client';

import Image from 'next/image';
import { memo, useEffect, type ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { Sections, type ICompTypes } from '@/types/types';

import Container from '../Container/Container';

const PartnersSection = memo(function PartnersSection({ isActive, onInView }: ICompTypes): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(Sections.partnerSection);
    }
  }, [onInView, inView]);

  return (
    <section
      id={Sections.partnerSection}
      ref={ref}
      className={`bg-gray3 pb-[81px] pt-[61px] md:pt-[54px] lg:pb-[132px] lg:pt-[135px] ${isActive ? 'border-2 border-orange' : ''}`}
    >
      <Container>
        <div className="flex flex-col gap-[21px] md:flex-row md:gap-[14px]">
          <h3 className="title_3 w-[60%] md:w-1/4 md:pr-[20px] lg:w-[38%] lg:pr-0">Наши партнёры по монетизации</h3>
          <div className="flex flex-wrap justify-center gap-[9px] md:mt-[-10px] md:w-[75%] md:gap-[50px] lg:mt-[-20px] lg:w-[62%] lg:gap-[88px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/ClickWave.svg"
              alt="ClickWave"
              className="ml-[-20px] w-[49%] md:order-1 md:w-[25%]"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/NovaSpera.svg"
              alt="ClickWave"
              className="w-[49%] md:order-3 md:w-[25%]"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/images/Zyphronix.svg"
              alt="ClickWave"
              className="m md:w-[25% h-[20vw] w-auto md:order-2 md:h-[7vw] lg:h-[60px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
});

export default PartnersSection;
