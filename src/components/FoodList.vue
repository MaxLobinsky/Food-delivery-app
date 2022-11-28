<template>
  <div class="food-list">
    <FoodCard
      v-for="item in items"
      :key="item"
      :item="item"
      @handleFoodClick="addToBasket"
    />
  </div>
</template>
<script>
import FoodCard from "@/components/UI/FoodCard.vue";
import { mapActions } from "vuex";
export default {
  components: {
    FoodCard,
  },
  methods: {
    ...mapActions(["ADD_TO_BASKET"]),
    addToBasket(title, count, price) {
      let food = {
        title,
        count,
        price,
      };
      this.ADD_TO_BASKET(food);
    },
  },
  props: {
    items: {
      type: Object,
      default: {},
    },
  },
};
</script>