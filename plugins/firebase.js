// plugins/firebase.js - Nuxt 4 & Vue 3対応
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

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
    try {
      // measurementId が空だと Analytics 初期化は失敗するため、存在チェック
      if (firebaseConfig.measurementId) {
        getAnalytics(app)
      }
    } catch (e) {
      // Analytics初期化エラーを無視
      console.warn('Firebase Analytics initialization failed:', e)
    }

    return {
      provide: {
        firebaseApp: app,
      },
    }
  }
})
