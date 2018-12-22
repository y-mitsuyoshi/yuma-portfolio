<template>
  <div id="background">
    <section class="container">
      <div>
        <logo/>
        <h1 class="title is-1">
          Yuma Mitsuyoshi's portfolio
        </h1>
        <h2 class="title is-2">
          Web Engineer
        </h2>
        <div class="links">
          <a
            href="/"
            class="button--green">
            Home</a>
          <a
            href="/profile"
            class="button--green">Profile</a>
          <a
            href="/skill"
            class="button--green">Skill</a>
          <a
            href="/hobby"
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
#background {
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
  color: #07090a;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
