<template>
  <div class="navbar-shop">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link class="navbar-link" :to="links[0].url">{{
          links[0].title
        }}</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" :to="links[1].url">{{
          links[1].title
        }}</router-link>
      </li>
    </ul>
    <div class="advertising">Доставляем всегда горячую и вкусную еду!</div>
  </div>
</template>

<script>
import { links, app } from "@/_config";
export default {
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
};
</script>