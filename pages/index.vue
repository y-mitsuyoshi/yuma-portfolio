<template>
  <div id="home-page">
    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
          Yuma Mitsuyoshi's portfolio
        </h1>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Home</a>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Profile</a>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Skill</a>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Hobby</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
#home-page {
  background-image: url('~assets/png/home/background.png');
  background-size: cover;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
