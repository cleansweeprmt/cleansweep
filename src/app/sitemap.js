// app/sitemap.js
import {fetchBlogSlugs} from './lib/fetchPosts'

export default async function sitemap() {
  const slugs = await fetchBlogSlugs();
  const baseUrl = 'https://cleansweep.com';

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/about`,
          de: `${baseUrl}/de/about`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/es/services`,
          de: `${baseUrl}/de/services`,
        },
      },
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/articles`,
          de: `${baseUrl}/articles`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${baseUrl}/contact`,
          de: `${baseUrl}/contact`,
        },
      },
    }
  ];

  const blogRoutes = slugs.map(slug => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        es: `${baseUrl}/es/articles/${slug}`,
        de: `${baseUrl}/de/articles/${slug}`,
      },
    },
  }));

  const routes = [...staticRoutes, ...blogRoutes];

  return routes;
}
