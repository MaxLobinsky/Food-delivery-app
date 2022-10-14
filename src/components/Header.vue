<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <div class="telephone">
          <p>+375(29)555 55 55</p>
        </div>
        <!--         <ul class="navbar-list">
          <li class="navbar-item">
            <router-link class="navbar-link" :to="links[1].url">{{
              links[1].title
            }}</router-link>
          </li>
        </ul> -->
        <img class="basket-logo" src="@/assets/images/icon.svg" alt="">
        <div v-if="BASKET.length>0" class="basket-value">
          ({{ BASKET.length }})
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { links, app } from "@/_config";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
  computed: {
    ...mapGetters(["BASKET"]),
  },
};
</script>

<style lang="scss">
.telephone {
  margin-left: 50px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: #4a4a4a;
}
.basket-logo {
  margin-left: 935px;
  margin-bottom: 7px;
}
.basket-value {
  width: 19px;
  height: 20.25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  color: #4a4a4a;
}
</style>