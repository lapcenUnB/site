import { getAsset } from './utils/permalinks';

export const headerData = {
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

export const footerData = {
  links: [
    {
      title: 'Notícias',
      links: [
        { text: 'Veja todos', href: '/categoria/noticias' },
        { text: 'LAPCEN é criada', href: '/criacao-da-lapcen' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { text: 'Sináptica Entrelinhas', href: '/categoria/sinaptica-entrelinhas' },
        // { text: 'Sobre pesquisa 1', href: '/categoria/pesquisa1' },
      ],
    },
    {
      title: 'Recursos',
      links: [{ text: 'Biblioteca virtual', href: '#' }],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/lapcenunb/' },
    { ariaLabel: 'Link Tree', icon: 'tabler:brand-linktree', href: 'https://linktr.ee/lapcenunb' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@lapcenunb' },
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },

    /* Manter RSS para acessibilidade */
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Website feito por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/artistrea"> artistrea </a>(<a class="text-blue-600 hover:underline dark:text-gray-200" href="https://struct.unb.br">atualmente na Struct</a>)
    <br/>
    Logotipo e cores principais feitas por <a class="text-blue-600 hover:underline dark:text-gray-200" href="#">Ana Laura Abreu</a>
  `,
};
