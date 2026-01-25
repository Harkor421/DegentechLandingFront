'use client';

import { LanguageProvider } from './LanguageProvider';

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
