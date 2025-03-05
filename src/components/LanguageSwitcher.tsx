'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  
  const toggleLanguage = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de navegação
    const newLocale = locale === 'en' ? 'pt' : 'en';
    router.replace(`/${newLocale}`); // Evita problemas de reidratação
  };

  return (
   
    <div className="flex items-center">
    <Link href="/"       onClick={toggleLanguage} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative">
    {locale === 'en' ? '🇧🇷' : '🇺🇸'}
    </Link>
  </div>

  
  );
}
