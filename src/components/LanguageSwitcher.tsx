"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Obtém o caminho atual
  const locale = useLocale(); // Obtém o idioma atual

  const toggleLanguage = (event) => {
    event.preventDefault(); // Previne a navegação padrão
    const newLocale = locale === "en" ? "pt" : "en";

    // Substitui o idioma na URL sem alterar o restante do caminho
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    // Atualiza a URL sem recarregar a página
    router.replace(newPathname);
  };

  return (
    <div className="flex items-center">
      <Link
        href="#"
        onClick={toggleLanguage}
        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
      >
        {locale === "en" ? "🇧🇷" : "🇺🇸"}
      </Link>
    </div>
  );
}
