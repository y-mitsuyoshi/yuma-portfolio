<template>
  <section class="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
    <div class="container mx-auto px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p class="text-xl text-slate-300">お気軽にご連絡ください</p>
        </div>

        <!-- Social Links -->
        <div class="social-links-container mb-12">
          <a
            href="https://www.facebook.com/yuma.mitsuyoshi"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link facebook"
            aria-label="Facebook"
            @click="trackSocialClick('facebook')"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              class="social-icon"
            />
            <span class="social-label">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/yuma.mitsuyoshi/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link instagram"
            aria-label="Instagram"
            @click="trackSocialClick('instagram')"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="social-icon"
            />
            <span class="social-label">Instagram</span>
          </a>

          <a
            href="https://github.com/y-mitsuyoshi"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link github"
            aria-label="GitHub"
            @click="trackSocialClick('github')"
          >
            <font-awesome-icon
              :icon="['fab', 'github-square']"
              class="social-icon"
            />
            <span class="social-label">GitHub</span>
          </a>

          <a
            href="https://x.com/MitsuyoshiYuma"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link x"
            aria-label="X"
          >
            <font-awesome-icon
              :icon="['fab', 'x-twitter']"
              class="social-icon"
            />
            <span class="social-label">X</span>
          </a>

          <a
            href="http://tabilike.hatenablog.com"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link blog"
            aria-label="Blog"
          >
            <font-awesome-icon :icon="['fas', 'rss']" class="social-icon" />
            <span class="social-label">Blog</span>
          </a>
        </div>

        <!-- Contact Info -->
        <div
          class="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
        >
          <h3 class="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon icon="user" />
              </div>
              <div>
                <div class="contact-label">Name</div>
                <div class="contact-value">Yuma Mitsuyoshi</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon icon="briefcase" />
              </div>
              <div>
                <div class="contact-label">Role</div>
                <div class="contact-value">Engineering Manager</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon icon="laptop-code" />
              </div>
              <div>
                <div class="contact-label">Specialty</div>
                <div class="contact-value">Backend Development</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <font-awesome-icon icon="users" />
              </div>
              <div>
                <div class="contact-label">Focus</div>
                <div class="contact-value">Team Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-width: 100px;
}

.social-link:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
}

.social-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.social-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(203 213 225);
  transition: color 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.social-link:hover .social-label {
  color: white;
}

.social-link.facebook:hover .social-icon {
  color: #1877f2;
}

.social-link.github:hover .social-icon {
  color: #ffffff;
}

.social-link.instagram:hover .social-icon {
  color: #e1306c;
}

.social-link.x:hover .social-icon {
  color: #000000;
}

.social-link.blog:hover .social-icon {
  color: #ff6b35;
}

.social-icon {
  color: rgb(203 213 225);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(147 197 253);
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.875rem;
  color: rgb(148 163 184);
  margin-bottom: 0.25rem;
}

.contact-value {
  font-weight: 600;
  color: white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .social-links-container {
    gap: 1rem;
    max-width: 100%;
    padding: 0 1rem;
  }

  .social-link {
    padding: 0.75rem;
    min-width: 85px;
    flex: 0 0 auto;
  }

  .social-icon {
    font-size: 2rem;
  }

  .social-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .social-links-container {
    gap: 0.75rem;
    padding: 0 0.5rem;
  }

  .social-link {
    padding: 0.5rem;
    min-width: 75px;
  }

  .social-icon {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
  }

  .social-label {
    font-size: 0.7rem;
  }
}
</style>

<script setup>
// Analytics tracking functions
const { $trackEvent } = useNuxtApp()

const trackSocialClick = (platform) => {
  $trackEvent('social_link_click', {
    platform: platform,
    section: 'contact',
    action: 'external_link'
  })
}

// Track contact section view
onMounted(() => {
  $trackEvent('contact_section_viewed', {
    section: 'contact'
  })
})
</script>
