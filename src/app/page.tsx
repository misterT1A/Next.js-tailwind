import type { ReactElement } from 'react';

import { BalanceBlock, FormSection, Header, MainSection, PartnersSection, ReportsSection } from '@/components';

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
          <FormSection />
        </article>
      </main>
    </>
  );
}
