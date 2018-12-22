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
        <div class="description">
          <h3 class="subtitle is-2">profile</h3>
          <div class="box">
            <p class="title is-3">Summary</p>
            <p class="title is-5">
              1990年三重県生まれの奈良育ちのwebエンジニアです。
              <br/>
              大学、大学院時代は主に計量社会学を専攻しており、RやSPSS、Pythonなどを触っていました。
              就職はこれから食いっぱぐれの無いようにとIT企業に入社しました。そこで、プログラミングや
              設計の面白さに気づき、この業界に向いていると感じました。しかしながら、Sierではレガシーな
              技術、設計手法、開発手法を使用していたり、自分の成長ステージとは異なると感じ退職し、web業界に身を置くようになりました。
            </p>
          </div>
          <div class="box">
            <p class="title is-3">History</p>
            <p class="title is-5">
              2013年3月 関西学院大学社会学部 卒業
              <br/>
              2015年3月 関西学院大学社会学研究科 修了
              <br/>
              2015年4月 500名規模のSierに入社
              <br/>
              2016年12月 金融系のweb系企業に入社
            </p>
          </div>
          <div class="box">
            <p class="title is-3">エンジニアとしての考え方</p>
            <p class="title is-5">
              hoge
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
