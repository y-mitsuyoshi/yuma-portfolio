<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900"
  >
    <!-- Header with improved navigation -->
    <header
      class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60"
    >
      <nav class="container mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo/Brand -->
          <div class="flex items-center">
            <nuxt-link to="/" class="group flex items-center space-x-2">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden"
              >
                <img 
                  src="~/assets/icon.png" 
                  alt="Yuma Mitsuyoshi" 
                  class="w-6 h-6 object-contain"
                />
              </div>
              <div class="hidden sm:block">
                <div class="text-xl font-bold text-slate-800">
                  Yuma Mitsuyoshi
                </div>
                <div class="text-sm text-slate-500">Engineering Manager</div>
              </div>
            </nuxt-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <nuxt-link to="/" class="nav-link">
              <font-awesome-icon icon="home" class="w-4 h-4 mr-2" />
              Home
            </nuxt-link>
            <nuxt-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" class="w-4 h-4 mr-2" />
              Profile
            </nuxt-link>
            <nuxt-link to="/skill" class="nav-link">
              <font-awesome-icon icon="laptop-code" class="w-4 h-4 mr-2" />
              Skills
            </nuxt-link>
            <nuxt-link to="/#creations" class="nav-link">
              <font-awesome-icon icon="lightbulb" class="w-4 h-4 mr-2" />
              Creations
            </nuxt-link>
            <nuxt-link to="/hobby" class="nav-link">
              <font-awesome-icon icon="heart" class="w-4 h-4 mr-2" />
              Hobby
            </nuxt-link>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <font-awesome-icon
                :icon="mobileMenuOpen ? 'times' : 'bars'"
                class="w-5 h-5"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-show="mobileMenuOpen"
          class="md:hidden py-4 border-t border-slate-200"
        >
          <div class="flex flex-col space-y-2">
            <nuxt-link
              to="/"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="home" class="w-4 h-4 mr-3" />
              Home
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="user" class="w-4 h-4 mr-3" />
              Profile
            </nuxt-link>
            <nuxt-link
              to="/skill"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="laptop-code" class="w-4 h-4 mr-3" />
              Skills
            </nuxt-link>
            <nuxt-link
              to="/#creations"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="lightbulb" class="w-4 h-4 mr-3" />
              Creations
            </nuxt-link>
            <nuxt-link
              to="/hobby"
              class="mobile-nav-link"
              @click="mobileMenuOpen = false"
            >
              <font-awesome-icon icon="heart" class="w-4 h-4 mr-3" />
              Hobby
            </nuxt-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main content with improved spacing -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer components -->
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style>
/* Navigation Links */
.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: rgb(51 65 85);
  font-weight: 500;
  transition: all 0.2s;
}

.nav-link:hover {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

.nav-link.router-link-active {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: rgb(51 65 85);
  transition: all 0.2s;
}

.mobile-nav-link:hover {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

.mobile-nav-link.router-link-active {
  color: rgb(37 99 235);
  background-color: rgb(239 246 255);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgb(241 245 249);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(203 213 225);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(148 163 184);
}
</style>
