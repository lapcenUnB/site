export const navbar: NavbarT = {
  links: [
    {
      text: 'Projetos',
      href: '/#projetos',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
    {
      text: 'Postagens',
      links: [
        {
          text: 'Todas',
          href: '/postagens',
        },
        {
          text: 'Sináptica Entrelinhas',
          href: '/categoria/sinaptica-entrelinhas',
        },
        {
          text: 'Notícias',
          href: '/categoria/noticias',
        },
      ],
    },
  ],
  actions: [{ type: 'button', text: 'Contato', href: '/contact' }],
};

type NavbarT = {
  links: Link[];
  actions: {
    type: string;
    text: string;
    href: string;
  }[];
};

type Link =
  | {
      text: string;
      href: string;
    }
  | {
      text: string;
      links: Link[];
    };
