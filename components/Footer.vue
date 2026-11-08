<template>
  <footer class="border-t border-dark-line bg-dark text-dark-text">
    <div class="container-page py-10">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3">
            <span
              class="grid h-9 w-9 place-items-center border border-dark-line font-serif text-base text-white"
              aria-hidden="true"
            >
              YM
            </span>
            <div>
              <p class="text-sm font-semibold text-white">Yuma Mitsuyoshi</p>
              <p class="label-mono mt-0.5 text-[10px] text-dark-text/60">
                Engineering Manager
              </p>
            </div>
          </div>
          <p class="mt-5 max-w-xs text-xs leading-6 text-dark-text/60">
            バックエンド開発を軸に、技術マネジメントと組織づくりに携わっています。
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p class="label-mono text-dark-text/60">Index</p>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in footerLinks" :key="item.label">
              <a
                v-if="item.href"
                :href="item.href"
                class="text-sm text-dark-text/80 transition-colors hover:text-accent-bright focus-visible:outline-accent-bright"
              >
                {{ item.label }}
              </a>
              <nuxt-link
                v-else
                :to="item.to"
                class="text-sm text-dark-text/80 transition-colors hover:text-accent-bright focus-visible:outline-accent-bright"
              >
                {{ item.label }}
              </nuxt-link>
            </li>
          </ul>
        </nav>

        <div>
          <p class="label-mono text-dark-text/60">Built with</p>
          <p class="mt-4 font-mono text-xs leading-6 text-dark-text/70">
            Nuxt 4 / Vue 3<br />
            Tailwind CSS / Firebase
          </p>
          <p class="mt-4 font-mono text-[10px] text-dark-text/60">
            SSG · Firebase Hosting
          </p>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-dark-line pt-6 text-[11px] text-dark-text/60 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ currentYear }} Yuma Mitsuyoshi. All rights reserved.</p>
        <p class="font-mono">Designed &amp; built with care.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
  { label: 'Skills', to: '/skill' },
  { label: 'Work', href: '/#creations' },
  { label: 'Hobbies', to: '/hobby' },
]

const currentYear = new Date().getFullYear()
</script>
