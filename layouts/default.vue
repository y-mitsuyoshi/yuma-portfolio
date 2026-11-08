<template>
  <div class="flex min-h-screen flex-col bg-paper text-ink">
    <header class="sticky top-0 z-50 border-b border-line bg-paper">
      <nav class="container-page" aria-label="Main navigation">
        <div class="flex h-20 items-center justify-between gap-6">
          <nuxt-link
            to="/"
            class="group flex items-center gap-3"
            @click="mobileMenuOpen = false"
          >
            <span
              class="relative grid h-10 w-10 place-items-center border border-ink bg-paper-raised"
              aria-hidden="true"
            >
              <span class="font-serif text-lg leading-none">YM</span>
              <span
                class="absolute -right-px -top-px h-1.5 w-1.5 bg-accent"
                aria-hidden="true"
              ></span>
            </span>
            <span class="leading-tight">
              <span class="block text-sm font-semibold tracking-tight">
                Yuma Mitsuyoshi
              </span>
              <span class="label-mono block text-[10px]">
                Engineering Manager
              </span>
            </span>
          </nuxt-link>

          <div class="hidden items-center gap-7 md:flex">
            <template v-for="item in navItems" :key="item.label">
              <a
                v-if="item.href"
                :href="item.href"
                class="nav-link"
                @click="mobileMenuOpen = false"
              >
                <span class="nav-index">{{ item.index }}</span>
                {{ item.label }}
              </a>
              <nuxt-link
                v-else
                :to="item.to"
                class="nav-link"
                @click="mobileMenuOpen = false"
              >
                <span class="nav-index">{{ item.index }}</span>
                {{ item.label }}
              </nuxt-link>
            </template>
          </div>

          <button
            type="button"
            class="grid h-10 w-10 place-items-center border border-line-strong text-ink transition-colors hover:border-ink md:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-navigation"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="relative block h-3 w-4" aria-hidden="true">
              <span
                class="absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-200"
                :class="mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''"
              ></span>
              <span
                class="absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-200"
                :class="mobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''"
              ></span>
            </span>
          </button>
        </div>

        <div
          v-show="mobileMenuOpen"
          id="mobile-navigation"
          class="border-t border-line md:hidden"
        >
          <template v-for="item in navItems" :key="`mobile-${item.label}`">
            <a
              v-if="item.href"
              :href="item.href"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <span>{{ item.label }}</span>
              <span class="label-mono">{{ item.index }}</span>
            </a>
            <nuxt-link
              v-else
              :to="item.to"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <span>{{ item.label }}</span>
              <span class="label-mono">{{ item.index }}</span>
            </nuxt-link>
          </template>
        </div>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/', index: '01' },
  { label: 'Profile', to: '/profile', index: '02' },
  { label: 'Skills', to: '/skill', index: '03' },
  { label: 'Work', href: '/#creations', index: '04' },
  { label: 'Hobbies', to: '/hobby', index: '05' },
]
</script>

<style>
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  padding-block: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
  transition: color 180ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0.15rem;
  left: 0;
  height: 1px;
  background-color: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms ease;
}

.nav-link:hover {
  color: var(--color-ink);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.nav-link.router-link-active {
  color: var(--color-accent);
}

.nav-index {
  font-size: 0.5625rem;
  color: var(--color-ink-muted);
}

.nav-link.router-link-active .nav-index {
  color: var(--color-accent);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.9rem;
  border-bottom: 1px solid var(--color-line);
  font-size: 0.875rem;
  color: var(--color-ink-soft);
  transition: color 180ms ease;
}

.mobile-nav-link:last-child {
  border-bottom: 0;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--color-accent);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: var(--color-paper);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-line-strong);
}
</style>
