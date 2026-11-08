<template>
  <section class="border-t border-dark-line bg-dark text-dark-text">
    <div class="container-page py-20 md:py-24">
      <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p class="label-mono text-dark-text/60">06 / Contact</p>
          <h2 class="title-display mt-5 text-5xl text-white sm:text-6xl">
            Let's connect.
          </h2>
          <p class="mt-6 max-w-md text-sm leading-7 text-dark-text/75">
            お気軽にご連絡ください。技術・組織づくり・生成AIの活用など、
            関心のあるテーマからお話しできます。
          </p>
          <p class="mt-8 font-mono text-[11px] text-dark-text/60">
            NARA, JAPAN — UTC+9
          </p>
        </div>

        <div>
          <div class="border-y border-dark-line">
            <div class="grid gap-px bg-dark-line sm:grid-cols-2">
              <a
                v-for="(social, index) in primarySocialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-between gap-4 bg-dark py-4 focus-visible:outline-accent-bright sm:px-5"
                :aria-label="social.label"
                @click="trackSocialClick(social.platform)"
              >
                <span class="flex items-center gap-3">
                  <font-awesome-icon
                    :icon="social.icon"
                    class="h-4 w-4 text-dark-text/60 transition-colors group-hover:text-accent-bright"
                  />
                  <span
                    class="text-sm text-dark-text transition-colors group-hover:text-white"
                  >
                    {{ social.label }}
                  </span>
                </span>
                <span
                  class="font-mono text-[10px] tracking-wider text-dark-text/60 transition-colors group-hover:text-accent-bright"
                >
                  0{{ index + 1 }} ↗
                </span>
              </a>
            </div>

            <a
              :href="blogLink.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between gap-4 border-t border-dark-line py-4 focus-visible:outline-accent-bright sm:px-5"
              :aria-label="blogLink.label"
              @click="trackSocialClick(blogLink.platform)"
            >
              <span class="flex items-center gap-3">
                <font-awesome-icon
                  :icon="blogLink.icon"
                  class="h-4 w-4 text-dark-text/60 transition-colors group-hover:text-accent-bright"
                />
                <span
                  class="text-sm text-dark-text transition-colors group-hover:text-white"
                >
                  {{ blogLink.label }}
                </span>
              </span>
              <span
                class="font-mono text-[10px] tracking-wider text-dark-text/60 transition-colors group-hover:text-accent-bright"
              >
                0{{ socialLinks.length }} ↗
              </span>
            </a>
          </div>

          <dl class="mt-12 grid grid-cols-2 gap-x-8 gap-y-7">
            <div v-for="item in contactInfo" :key="item.label">
              <dt class="label-mono text-dark-text/60">{{ item.label }}</dt>
              <dd class="mt-2 text-sm text-white">{{ item.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $trackEvent } = useNuxtApp()

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/y-mitsuyoshi',
    platform: 'github',
    icon: ['fab', 'github-square'],
  },
  {
    label: 'X',
    href: 'https://x.com/MitsuyoshiYuma',
    platform: 'x',
    icon: ['fab', 'x-twitter'],
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/yuma.mitsuyoshi',
    platform: 'facebook',
    icon: ['fab', 'facebook-square'],
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yuma.mitsuyoshi/',
    platform: 'instagram',
    icon: ['fab', 'instagram'],
  },
  {
    label: 'Blog',
    href: 'https://tabilike.hatenablog.com',
    platform: 'blog',
    icon: ['fas', 'rss'],
  },
]

const primarySocialLinks = socialLinks.slice(0, 4)
const blogLink = socialLinks[4]

const contactInfo = [
  { label: 'Name', value: 'Yuma Mitsuyoshi' },
  { label: 'Role', value: 'Engineering Manager' },
  { label: 'Specialty', value: 'Backend Development' },
  { label: 'Focus', value: 'Team Management' },
]

const trackSocialClick = (platform) => {
  $trackEvent('social_link_click', {
    platform: platform,
    section: 'contact',
    action: 'external_link',
  })
}

onMounted(() => {
  $trackEvent('contact_section_viewed', {
    section: 'contact',
  })
})
</script>
