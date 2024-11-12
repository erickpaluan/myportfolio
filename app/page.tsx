import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
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
        UI Design & Frontend.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Graduated in Information Systems, I specialize in graphic design, social
        media management, IT, and UI/UX design.
        </p>
        <p>
        With a passion for technology and a natural curiosity, I am continuously learning and developing new skills, my approach is calm and solution-focused, with a strong ability to tackle diverse challenges.
        </p>
        <p>
        Sharing knowledge and gaining insights across different areas energizes me, and I firmly believe in teamwork as a pathway to personal and professional growth.
        </p>
        <p>
        Take a look at my <a href="/projects">projects</a> and see how I can help you! ;)

          
        </p>

      </div>
    </section>
  );
}
