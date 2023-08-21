import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blogs',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: 'button', text: 'Contato', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Blog',
      links: [
        { text: 'Veja todos', href: '/blog' },
        { text: 'Sobre pesquisa 1', href: '/category/documentation' },
      ],
    },
    {
      title: 'Notícias',
      links: [
        { text: 'Veja todas', href: '/blog' },
        { text: 'LAPCEN é criada', href: '/criacao-da-lapcen' },
      ],
    },
    {
      title: 'Recursos',
      links: [{ text: 'Biblioteca virtual', href: '#' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Feito por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/artistrea"> Artur Padovesi Piratelli (artistrea)</a>
  `,
};
