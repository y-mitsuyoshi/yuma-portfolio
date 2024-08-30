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
          <h3 class="subtitle is-2">Hobby</h3>
          <div class="box">
            <p class="title is-3">お酒</p>
            <p class="title is-5">
              特にウイスキーが好きです! 好きな銘柄はラガブーリン16年です。
              ビールもワインも飲みます。ジン、ウォッカ、ラム、ワイン、日本酒、焼酎何でも飲めます。
            </p>
          </div>
          <div class="box">
            <p class="title is-3">海外旅行</p>
            <p class="title is-5">
              学生時代はバックパッカーで世界各国を旅していました。
              今までで約30ヶ国に行きました。好きな国はハンガリーやウズベキスタンです。
              今でも長期の休暇があればフラっと海外に行ったりしています!
            </p>
          </div>
          <div class="box">
            <p class="title is-3">映画</p>
            <p class="title is-5">
              映画も好きでよく見ています。シネコンよりも単館が好きです。
              好きな監督はホドロフスキーで特にホーリー・マウンテンが好きです。
            </p>
          </div>
          <div class="box">
            <p class="title is-3">ボードゲーム</p>
            <p class="title is-5">
              週末はよくボードゲームをしています。好きなボードゲームはバトルラインです!
            </p>
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
