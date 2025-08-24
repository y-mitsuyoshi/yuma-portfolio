import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin(() => {
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
    getAnalytics(app)
  } catch (e) {
    console.error('Firebase analytics error', e)
  }
})
