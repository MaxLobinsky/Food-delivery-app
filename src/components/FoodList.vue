<template>
  <div class="food-list">
    <FoodCard />
    <FoodCard />
    <FoodCard />
    <FoodCard />
    <FoodCard />
    <FoodCard />
  </div>
</template>
<script>
import FoodCard from "@/components/UI/FoodCard.vue";
export default {
  components: {
    FoodCard,
  },
};
</script>


<style>
.food-list {
  background: transparent;
  width: 70%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, auto)
}
</style>