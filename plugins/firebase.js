// plugins/firebase.js - Nuxt 4 & Vue 3対応
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

export default defineNuxtPlugin(() => {
  // クライアントサイドでのみ実行
  if (import.meta.client) {
    const app = initializeApp(firebaseConfig)
    try {
      getAnalytics(app)
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
