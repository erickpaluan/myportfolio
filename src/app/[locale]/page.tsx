import Image from "next/image";
import { socialLinks } from "../../config";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Page({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations("Page");

  return (
        <section>
          <a href={socialLinks.twitter} target="_blank">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>

          <h1 className="mb-8 text-2xl font-medium tracking-tight">
            {t("title")}
          </h1>

          <div className="prose prose-neutral dark:prose-invert">
            <p>
              {t.rich("about", {
                a: (chunks) => <a href="/projects">{chunks}</a>,
                p: (chunks) => <p>{chunks}</p>,
              })}
            </p>
          </div>
        </section>
  );
}
