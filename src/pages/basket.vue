<template>
  <div class="md-body">
    <div>
      <NavBar />
    </div>
    <div class="food-list">
      <FoodList :items="BASKET" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FoodList from "@/components/FoodList.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["BASKET"]),
  },
  components: {
    NavBar,
    FoodList,
  },
};
</script>

<style>
  .food-list {
    background: transparent;
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  </style>