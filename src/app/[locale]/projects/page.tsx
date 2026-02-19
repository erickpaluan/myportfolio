import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = params;

  setRequestLocale(locale);

  const t = useTranslations("Projects");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{t("title")}</h1>

      <div className="flex flex-col gap-8">
        {/* Projeto 1 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title01")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              10+ anos em produção, economia de 520h/ano
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description01")}
          </p>
        </div>

        {/* Projeto 2 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title02")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              Reconhecimento pela Microsoft
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description02")}
          </p>
        </div>

        {/* Projeto 3 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title03")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              20.000+ Downloads
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description03")}
          </p>
        </div>

        {/* Projeto 4 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title04")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              Site + Infraestrutura completa
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description04")}
          </p>
        </div>

        {/* Projeto 5 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title05")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              Sistema Interno
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description05")}
          </p>
        </div>

        {/* Projeto 6 */}
        <div>
          <div className="w-full flex justify-between items-baseline">
            <span className="text-black dark:text-white font-medium tracking-tight">
              {t("project-title06")}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
              Design Lead, Campanhas Completas
            </span>
          </div>
          <p className="prose prose-neutral dark:prose-invert pt-3">
            {t("project-description06")}
          </p>
        </div>
      </div>
    </section>
  );
}
