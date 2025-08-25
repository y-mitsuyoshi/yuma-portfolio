// plugins/firebase.js - Nuxt 4 & Vue 3対応
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent, setCurrentScreen } from 'firebase/analytics'

export default defineNuxtPlugin(() => {
  // クライアントサイドでのみ実行
  if (import.meta.client) {
    const config = useRuntimeConfig()
    const firebaseConfig = {
      apiKey: config.public.FIREBASE_API_KEY,
      authDomain: config.public.FIREBASE_AUTH_DOMAIN,
      databaseURL: config.public.FIREBASE_DATABASE_URL,
      projectId: config.public.FIREBASE_PROJECT_ID,
      storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
      appId: config.public.FIREBASE_APP_ID,
      measurementId: config.public.FIREBASE_MEASUREMENT_ID,
    }

    const app = initializeApp(firebaseConfig)
    let analytics = null

    try {
      // measurementId が空だと Analytics 初期化は失敗するため、存在チェック
      if (firebaseConfig.measurementId) {
        analytics = getAnalytics(app)
      }
    } catch (e) {
      // Analytics初期化エラーを無視
    }

    // Analytics ヘルパー関数
    const trackEvent = (eventName, parameters = {}) => {
      if (analytics) {
        logEvent(analytics, eventName, parameters)
      }
    }

    const trackPageView = (pageName) => {
      if (analytics) {
        setCurrentScreen(analytics, pageName)
        logEvent(analytics, 'page_view', { 
          page_title: pageName,
          page_location: window.location.href 
        })
      }
    }

    // ルート変更時の自動追跡
    const router = useRouter()
    router.afterEach((to) => {
      nextTick(() => {
        const pageName = to.meta?.title || to.name || to.path
        trackPageView(pageName)
      })
    })

    return {
      provide: {
        firebaseApp: app,
        analytics,
        trackEvent,
        trackPageView,
      },
    }
  }
})
