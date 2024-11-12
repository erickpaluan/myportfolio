export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Projeto Integrado Multidisciplinar (PIM) 4",
    year: 2023,
    description:
      "Projeto criado para a conclusão do quarto semestre do curso de Análise e Desenvolvimento de Sistemas da UNIP Ribeirão Preto - 2023.",
    url: "https://github.com/erickpaluan/pim4",
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
