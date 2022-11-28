<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <div class="telephone">
          <p>+375(29)555 55 55</p>
        </div>
        <router-link class="basket-logo" to="/basket"
          ><img src="@/assets/images/icon.svg" alt=""
        /></router-link>
        <div v-if="BASKET.length > 0" class="basket-value">
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