// plugins/sitemap.js
export default defineNuxtPlugin(() => {
  // サイトマップ生成用の設定
  const sitemapRoutes = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString()
    },
    {
      url: '/profile',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    {
      url: '/skill',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    {
      url: '/hobby',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString()
    }
  ]

  // サイトマップXMLを生成
  const generateSitemap = () => {
    const baseUrl = 'https://yuma-portfolio.web.app'
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    sitemapRoutes.forEach(route => {
      sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    })

    sitemap += `
</urlset>`

    return sitemap
  }

  // robots.txtを生成
  const generateRobots = () => {
    const baseUrl = 'https://yuma-portfolio.web.app'
    
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# 不要なクロールを防ぐ
Disallow: /debug-analytics
Disallow: /_nuxt/
Disallow: /.output/`
  }

  // グローバルに公開（必要に応じて）
  return {
    provide: {
      generateSitemap,
      generateRobots
    }
  }
})
