import type { ReactElement } from 'react';

import BalanceBlock from '@/components/BalanceBlock/BalanceBlock';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import ReportsSection from '@/components/ReportsSection/ReportsSection';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <article>
          <MainSection />
          <BalanceBlock />
          <PartnersSection />
          <ReportsSection />
        </article>
      </main>
    </>
  );
}
