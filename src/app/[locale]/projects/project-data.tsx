import { useTranslations } from "next-intl";

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

//const t = useTranslations("Projects");

export const projects: Project[] = [
  {
    title: "Titulo Projeto 1", // Call t directly without using a template literal
    year: 2023,
    description: "Descricao Projeto 1", // Call t directly here as well
    url: "https://github.com/erickpaluan/pim4",
  },
  {
    title: "Titulo Projeto 2", // Call t directly without using a template literal
    year: 2023,
    description: "Descricao Projeto 2", // Call t directly here as well
    url: "https://github.com/erickpaluan/pim4",
  },
  {
    title: "Titulo Projeto 3", // Call t directly without using a template literal
    year: 2023,
    description: "Descricao Projeto 3", // Call t directly here as well
    url: "https://github.com/erickpaluan/pim4",
  },
];
