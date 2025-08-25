<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-slate-800 mb-8">
          🔍 Analytics Debug Console
        </h1>
        
        <div class="space-y-6">
          <!-- Test Event Buttons -->
          <div class="bg-slate-50 rounded-xl p-6">
            <h2 class="text-xl font-semibold text-slate-700 mb-4">
              Test Custom Events
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                @click="testButtonClick"
                class="btn btn-primary"
              >
                Test Button Click
              </button>
              <button 
                @click="testSocialClick"
                class="btn btn-secondary"
              >
                Test Social Link
              </button>
              <button 
                @click="testPageEngagement"
                class="btn btn-success"
              >
                Test Page Engagement
              </button>
              <button 
                @click="testCustomEvent"
                class="btn btn-warning"
              >
                Test Custom Event
              </button>
            </div>
          </div>

          <!-- Event Log -->
          <div class="bg-slate-900 rounded-xl p-6">
            <h2 class="text-xl font-semibold text-white mb-4">
              📊 Event Tracking (Check GA4 or Network Tab)
            </h2>
            <div class="bg-slate-800 rounded-lg p-4">
              <code class="text-green-400 text-sm">
                // Events are sent to Google Analytics<br/>
                // Check Browser DevTools → Network tab for 'collect' requests<br/>
                // Or use GA4 DebugView for real-time verification
              </code>
            </div>
          </div>

          <!-- Instructions -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 class="text-xl font-semibold text-blue-800 mb-4">
              📝 How to Check Events
            </h2>
            <ol class="list-decimal list-inside space-y-2 text-blue-700">
              <li>Open Browser DevTools (F12)</li>
              <li>Go to Network tab</li>
              <li>Click test buttons above</li>
              <li>Look for 'collect' requests to Google Analytics</li>
              <li>Check request payload for event data</li>
              <li>Use GA4 DebugView for real-time verification</li>
            </ol>
          </div>

          <!-- Back to Home -->
          <div class="text-center">
            <nuxt-link 
              to="/" 
              class="btn btn-outline"
              @click="trackNavigationClick"
            >
              ← Back to Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary {
  background-color: rgb(37 99 235);
  color: white;
}

.btn-primary:hover {
  background-color: rgb(29 78 216);
}

.btn-secondary {
  background-color: rgb(147 51 234);
  color: white;
}

.btn-secondary:hover {
  background-color: rgb(126 34 206);
}

.btn-success {
  background-color: rgb(22 163 74);
  color: white;
}

.btn-success:hover {
  background-color: rgb(21 128 61);
}

.btn-warning {
  background-color: rgb(202 138 4);
  color: white;
}

.btn-warning:hover {
  background-color: rgb(161 98 7);
}

.btn-outline {
  border: 2px solid rgb(203 213 225);
  color: rgb(55 65 81);
}

.btn-outline:hover {
  border-color: rgb(148 163 184);
  background-color: rgb(248 250 252);
}
</style>

<script setup>
// Analytics tracking
const { $trackEvent } = useNuxtApp()

// Test event functions
const testButtonClick = () => {
  $trackEvent('test_button_click', {
    button_type: 'test',
    timestamp: new Date().toISOString(),
    page: 'debug'
  })
}

const testSocialClick = () => {
  $trackEvent('test_social_click', {
    platform: 'test_platform',
    action: 'test_click',
    timestamp: new Date().toISOString()
  })
}

const testPageEngagement = () => {
  $trackEvent('test_page_engagement', {
    engagement_time: Math.floor(Math.random() * 60) + 10,
    scroll_depth: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString()
  })
}

const testCustomEvent = () => {
  $trackEvent('test_custom_event', {
    custom_parameter_1: 'test_value_1',
    custom_parameter_2: 42,
    custom_parameter_3: true,
    timestamp: new Date().toISOString()
  })
}

const trackNavigationClick = () => {
  $trackEvent('debug_navigation', {
    destination: 'home',
    source: 'debug_page'
  })
}

// Page tracking
onMounted(() => {
  $trackEvent('debug_page_accessed', {
    access_time: new Date().toISOString()
  })
})

// Meta
useSeoMeta({
  title: 'Analytics Debug - Yuma Portfolio',
  description: 'Analytics debugging and testing console'
})
</script>
