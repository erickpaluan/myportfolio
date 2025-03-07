import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
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
    <div className="max-w-[490px]">
      {t("project-title")}
      {t("project-description")}
    </div>
  );
}
