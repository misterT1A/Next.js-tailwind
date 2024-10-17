import type { ReactElement } from 'react';

import BalanceBlock from '@/components/BalanceBlock/BalanceBlock';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <article>
          <MainSection />
          <BalanceBlock />
        </article>
      </main>
    </>
  );
}
