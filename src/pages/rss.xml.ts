import rss from '@astrojs/rss';

import { SITE_CONFIG, METADATA_CONFIG, APP_BLOG_CONFIG } from '~/utils/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const get = async () => {
  if (!APP_BLOG_CONFIG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Não encontrado',
    });
  }

  const posts = await fetchPosts();

  return rss({
    title: `Postagens de ${SITE_CONFIG.name}`,
    description: METADATA_CONFIG?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
      author: post.author,
    })),

    trailingSlash: SITE_CONFIG.trailingSlash,
  });
};
