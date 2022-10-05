<template>
  <div>
    <div class="food-list">
      <FoodCard
        v-for="item in items"
        :key="item"
        :title="item.title"
        :price="item.price"
        @handleFoodClick="addToBasket"
      />
    </div>
  </div>
</template>
<script>
import FoodCard from "@/components/UI/FoodCard.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      /*       basket: [], */
    };
  },
  components: {
    FoodCard,
  },
  methods: {
    ...mapActions(["ADD_TO_BASKET"]),
    addToBasket(title, count, price) {
      let food = {
        title,
        count,
        price: price*count
      };
      this.ADD_TO_BASKET(food);
      /*       this.basket.push({count, title})
      console.log(this.basket) */
    },
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