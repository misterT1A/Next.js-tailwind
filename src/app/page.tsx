import type { ReactElement } from 'react';

import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <article>
          <MainSection />
        </article>
      </main>
    </>
  );
}
