// app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://clean-sweep.net/';

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


  const routes = [...staticRoutes];

  return routes;
}
