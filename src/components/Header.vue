<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <p>+375(29)555 55 55</p>
        <!--         <ul class="navbar-list">
          <li class="navbar-item">
            <router-link class="navbar-link" :to="links[1].url">{{
              links[1].title
            }}</router-link>
          </li>
        </ul> -->
        <div class="basket-value" v-if="BASKET.length > 0">
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
.basket-value {
  position: absolute;
  width: 19px;
  height: 20.25px;
  left: 1301px;
  top: 49.41px;
}
</style>