<template>
  <div class="food-list">
    <FoodCard
      v-for="item in items"
      :key="item"
      :title="item.title"
      :price="item.price"
    />
  </div>
</template>
<script>
import FoodCard from "@/components/UI/FoodCard.vue";
export default {
  components: {
    FoodCard,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
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