<template>
  <div class="navbarshop">
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
    <p style="margin-left:194px">Доставляем всегда горячую и вкусную еду!</p>
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


<style>
.navbarshop {
  display: flex;
  width: 1440px;
  height: 55px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 140%;
  color: #4d4c4c;
}
</style>