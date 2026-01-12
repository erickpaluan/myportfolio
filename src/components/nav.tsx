"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { routing } from "../i18n/routing"; // Importe as rotas definidas no routing.tsx
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitcher from "./LanguageSwitcher";
import { metaData } from "@/config";

export function Navbar() {
  const locale = useLocale(); // Obtém o idioma atual
  const pathname = usePathname(); // Obtém a URL atual
  const t = useTranslations("Nav"); // Obtém as traduções para o namespace "Nav"

  // Navegação com base nas rotas definidas no routing.tsx
  const navItems = {
    "/projects": { nameKey: "projects" }, // Usamos a chave para tradução
    "/blog": { nameKey: "blog" },
    // "/photos": { nameKey: "photos" },
  };

  // Função para obter o caminho correto para cada item
  const getLocalizedPath = (path: string) =>
    routing.pathnames[path][locale] || path;

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link
            href={`/${locale}`}
            className="text-3xl font-semibold tracking-tight"
          >
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { nameKey }]) => (
            <Link
              key={path}
              href={getLocalizedPath(path)} // Ajusta o link com o idioma correto
              className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative ${
                pathname === getLocalizedPath(path)
                  ? "text-neutral-800 dark:text-neutral-200"
                  : ""
              }`}
            >
              {t(nameKey)} {/* Exibe a tradução do nome */}
            </Link>
          ))}
          <ThemeSwitch />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
