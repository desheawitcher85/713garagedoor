/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://713garagedoor.com',
  generateRobotsTxt: false, // we have a custom robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/opengraph-image'],
  transform: async (config, path) => {
    let priority = 0.7

    if (path === '/') priority = 1.0
    else if ([
      '/garage-door-repair',
      '/garage-door-spring-repair',
      '/garage-door-opener-repair',
      '/garage-door-installation',
      '/commercial-garage-doors',
      '/emergency-garage-door-service',
    ].includes(path)) {
      priority = 0.9
    } else if (path.startsWith('/service-area')) {
      priority = 0.8
    } else if (path.startsWith('/resources')) {
      priority = 0.7
    } else if (['/about', '/contact', '/faq', '/reviews', '/get-a-quote'].includes(path)) {
      priority = 0.6
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
