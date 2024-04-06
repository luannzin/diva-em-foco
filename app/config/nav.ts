export type HeaderLink = {
  name: string;
  href: string;
  description: string;
  tag: string;
  keywords: string;
};

export const headerLinks: HeaderLink[] = [
  {
    name: "Cuidados com o cabelo",
    href: "/categoria/cabelo",
    description: "Cuidados com o cabelo",
    tag: "cabelo",
    keywords: "cabelo, como cuidar do cabelo, dicas sobre cabelo",
  },
  {
    name: "Corpo e Banho",
    href: "/categoria/corpo-e-banho",
    description: "Cuidados com o corpo e banho",
    tag: "corpo e banho",
    keywords: "corpo, banho, cuidados com o corpo, cuidados com o banho",
  },
  {
    name: "Skincare",
    href: "/categoria/skincare",
    description: "Cuidados com a pele",
    tag: "skincare",
    keywords: "skincare, cuidados com a pele, dicas sobre skincare",
  },
  {
    name: "Maquiagem",
    href: "/categoria/maquiagem",
    description: "Maquiagem",
    tag: "maquiagem",
    keywords: "maquiagem, dicas sobre maquiagem, como fazer maquiagem",
  },
  {
    name: "Perfumes",
    href: "/categoria/perfumes",
    description: "Perfumes",
    tag: "perfumes",
    keywords: "perfumes, dicas sobre perfumes, como escolher perfumes",
  },
];
