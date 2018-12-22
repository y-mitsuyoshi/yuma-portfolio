<template>
  <div id="background">
    <section class="container">
      <div>
        <h1 class="title is-1 title-margin">
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
        <div class="description">
          <h3 class="subtitle is-2">Skill</h3>
          <div class="box">
            <p class="title is-3">プログラミング言語</p>
            <p class="title is-4">自由に使いこなせる</p>
            <p class="title is-5">Ruby, Python3, ES6</p>
            <br/>
            <p class="title is-4">学習中</p>
            <p class="title is-5">Go</p>
          </div>
          <div class="box">
            <p class="title is-3">フレームワーク</p>
            <p class="title is-5">Ruby on Rails, Django, Bottle, Vue.js, Nuxt.js</p>
          </div>
          <div class="box">
            <p class="title is-3">DB</p>
            <p class="title is-5">Mysql, Redis, DynamoDB</p>
          </div>
          <div class="box">
            <p class="title is-3">Iaas</p>
            <p class="title is-5">AWS, GCP</p>
          </div>
          <div class="box">
            <p class="title is-3">インフラ</p>
            <p class="title is-5">Docker, Linux</p>
          </div>
          <div class="box">
            <p class="title is-3">その他</p>
            <p class="title is-5">機械学習, Slack, Git, Github, TravisCI, マイクロサービスアーキテクチャー, bugsnag, Google Apps Script, VBA</p>
          </div>
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

.description {
  margin-top: 50px;
  background-color: #fff5ee;
  background-size: cover;
  margin-bottom: 100px;
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

.title-margin {
  margin-top: 50px;
}
</style>
