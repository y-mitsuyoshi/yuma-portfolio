/**
 * SEO設定用のコンポーザブル
 * 各ページで統一されたSEO設定を行う
 */
export const useSeo = (options = {}) => {
  const siteConfig = {
    siteName: 'Yuma Mitsuyoshi Portfolio',
    siteUrl: 'https://yuma-portfolio.web.app',
    authorName: 'Yuma Mitsuyoshi',
    defaultTitle: 'Yuma Mitsuyoshi - Engineering Manager & Full-Stack Developer',
    defaultDescription: 'バックエンド開発を軸とした技術マネジメントとフルスタック開発に従事。10年以上の開発経験を活かし、チーム育成と技術革新を推進しています。PHP、Go、Java、Vue.js、Nuxt.jsなどの技術スタックでWebアプリケーション開発。',
    defaultImage: '/og-image.png',
    defaultKeywords: 'Yuma Mitsuyoshi,Engineering Manager,Full-Stack Developer,Backend Developer,PHP,Go,Java,Vue.js,Nuxt.js,Web Development,Team Management,技術マネジメント,フルスタック開発,バックエンド開発',
    twitterHandle: '@MitsuyoshiYuma',
    language: 'ja',
    locale: 'ja_JP'
  }

  const {
    title = siteConfig.defaultTitle,
    description = siteConfig.defaultDescription,
    image = siteConfig.defaultImage,
    keywords = siteConfig.defaultKeywords,
    type = 'website',
    section = '',
    publishedTime = '',
    modifiedTime = '',
    author = siteConfig.authorName,
    canonical = '',
    noindex = false,
    nofollow = false
  } = options

  // 完全なURL生成
  const fullUrl = canonical || `${siteConfig.siteUrl}${useRoute().path}`
  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`

  // ページタイトルの生成
  const pageTitle = title === siteConfig.defaultTitle 
    ? title 
    : `${title} | ${siteConfig.siteName}`

  // メタタグの設定
  useSeoMeta({
    // 基本メタタグ
    title: pageTitle,
    description,
    keywords,
    author,
    robots: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`,
    
    // Open Graph
    ogTitle: pageTitle,
    ogDescription: description,
    ogImage: fullImageUrl,
    ogImageAlt: `${title} - ${siteConfig.siteName}`,
    ogUrl: fullUrl,
    ogType: type,
    ogSiteName: siteConfig.siteName,
    ogLocale: siteConfig.locale,
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: siteConfig.twitterHandle,
    twitterCreator: siteConfig.twitterHandle,
    twitterTitle: pageTitle,
    twitterDescription: description,
    twitterImage: fullImageUrl,
    twitterImageAlt: `${title} - ${siteConfig.siteName}`,
    
    // Article specific (for blog posts, etc.)
    ...(type === 'article' && {
      articleAuthor: author,
      articleSection: section,
      ...(publishedTime && { articlePublishedTime: publishedTime }),
      ...(modifiedTime && { articleModifiedTime: modifiedTime })
    }),
    
    // Additional meta tags
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    httpEquiv: {
      'X-UA-Compatible': 'IE=edge'
    }
  })

  // カノニカルURL
  useHead({
    link: [
      {
        rel: 'canonical',
        href: fullUrl
      }
    ]
  })

  // 構造化データ（JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: pageTitle,
    description,
    url: fullUrl,
    image: fullImageUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.authorName,
      url: siteConfig.siteUrl,
      jobTitle: 'Engineering Manager & Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Various Companies'
      },
      sameAs: [
        'https://github.com/y-mitsuyoshi',
        'https://x.com/MitsuyoshiYuma',
        'https://www.facebook.com/yuma.mitsuyoshi',
        'https://www.instagram.com/yuma.mitsuyoshi/'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.authorName,
      url: siteConfig.siteUrl
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    inLanguage: siteConfig.language,
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime })
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })

  return {
    siteConfig,
    fullUrl,
    pageTitle
  }
}
