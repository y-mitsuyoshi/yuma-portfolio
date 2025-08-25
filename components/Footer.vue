<template>
  <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Left side - Brand -->
        <div class="flex items-center mb-4 md:mb-0">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <span class="text-white font-bold text-sm">Y</span>
          </div>
          <div>
            <div class="text-white font-semibold">Yuma Mitsuyoshi</div>
            <div class="text-xs text-slate-500">Engineering Manager</div>
          </div>
        </div>
        
        <!-- Center - Navigation -->
        <div class="hidden md:flex items-center space-x-6 mb-4 md:mb-0">
          <nuxt-link to="/" class="footer-link">Home</nuxt-link>
          <nuxt-link to="/profile" class="footer-link">Profile</nuxt-link>
          <nuxt-link to="/skill" class="footer-link">Skills</nuxt-link>
          <nuxt-link to="/#creations" class="footer-link">Creations</nuxt-link>
          <nuxt-link to="/hobby" class="footer-link">Hobby</nuxt-link>
        </div>
        
        <!-- Right side - Tech Stack -->
        <div class="text-center md:text-right">
          <div class="text-sm text-slate-500 mb-1">Built with</div>
          <div class="flex items-center justify-center md:justify-end space-x-2 text-xs">
            <span class="tech-badge">Nuxt 4</span>
            <span class="tech-badge">Vue 3</span>
            <span class="tech-badge">Tailwind</span>
            <span class="tech-badge">Firebase</span>
          </div>
        </div>
      </div>
      
      <!-- Bottom row -->
      <div class="mt-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
        <div class="text-slate-500 mb-2 md:mb-0">
          © 2025 Yuma Mitsuyoshi. All rights reserved.
        </div>
        <div class="flex items-center space-x-4 text-slate-500">
          <span class="flex items-center">
            <font-awesome-icon icon="heart" class="w-4 h-4 mr-1 text-red-500" />
            Made with passion
          </span>
          <span class="flex items-center">
            <font-awesome-icon icon="laptop-code" class="w-4 h-4 mr-1 text-blue-500" />
            Open Source
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Vue 3 Composition API
</script>

<style scoped>
.footer-link {
  color: rgb(148 163 184);
  transition: color 0.3s ease;
  text-decoration: none;
  font-size: 0.875rem;
}

.footer-link:hover {
  color: rgb(59 130 246);
}

.footer-link.router-link-active {
  color: rgb(59 130 246);
}

.tech-badge {
  background: rgba(59, 130, 246, 0.1);
  color: rgb(147 197 253);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  font-weight: 500;
}
</style>
