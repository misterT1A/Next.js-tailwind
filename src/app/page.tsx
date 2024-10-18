'use client';

import { useCallback, useState, type ReactElement } from 'react';

import { BalanceBlock, FormSection, MainSection, PartnersSection, ReportsSection } from '@/components';
import { Sections } from '@/types/types';

export default function Home(): ReactElement {
  const [activeSection, setActiveSection] = useState<string>('');
  const handleInView = useCallback((id: string): void => {
    setActiveSection(id);
  }, []);
  return (
    <article>
      <MainSection isActive={activeSection === Sections.mainSection} onInView={handleInView} />
      <BalanceBlock isActive={activeSection === Sections.balanceSection} onInView={handleInView} />
      <PartnersSection isActive={activeSection === Sections.partnerSection} onInView={handleInView} />
      <ReportsSection isActive={activeSection === Sections.reportsSection} onInView={handleInView} />
      <FormSection isActive={activeSection === Sections.formSection} onInView={handleInView} />
    </article>
  );
}
