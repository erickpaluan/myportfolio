import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { use } from "react";
//import PageLayout from "@/components/PageLayout";

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("Projects");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{t("title")}</h1>
      <Link href="https://github.com/erickpaluan/pim4" target="_blank">
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              2023
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description")}
          </p>
        </div>
      </Link>
    </section>
  );
}
