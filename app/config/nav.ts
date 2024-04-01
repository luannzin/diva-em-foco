export type HeaderLink = {
  name: string;
  href: string;
  description: string;
  tag: string;
};

export const headerLinks: HeaderLink[] = [
  {
    name: "Cuidados com o cabelo",
    href: "/categoria/cabelo",
    description: "Cuidados com o cabelo",
    tag: "cabelo",
  },
  {
    name: "Corpo e Banho",
    href: "/categoria/corpo-e-banho",
    description: "Cuidados com o corpo e banho",
    tag: "corpo e banho",
  },
  {
    name: "SkinCare",
    href: "/categoria/skincare",
    description: "Cuidados com a pele",
    tag: "skincare",
  },
  {
    name: "Maquiagem",
    href: "/categoria/maquiagem",
    description: "Maquiagem",
    tag: "maquiagem",
  },
  {
    name: "Perfumes",
    href: "/categoria/perfumes",
    description: "Perfumes",
    tag: "perfumes",
  },
];
