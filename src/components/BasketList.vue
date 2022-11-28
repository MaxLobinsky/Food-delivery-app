<template>
  <div>
    <div v-if="items.length < 1" class="basket-null">Ожидаем Ваш заказ!</div>
    <div v-if="items.length > 0" class="basket-list">
      <BasketCard
        v-for="(item, index) in items"
        :key="item"
        :item="item"
        @handleFoodClick="addToBasket"
        @deleteFromBasket="deleteFromBasket(index)"
      />
    </div>
    <div v-if="items.length" class="basket-total">
      <p class="total-name">Итого:</p>
      <p class="total-count">{{ basketTotalCost }} BYN</p>
    </div>
  </div>
</template>
  <script>
import BasketCard from "@/components/UI/BasketCard.vue";
import { mapActions } from "vuex";
export default {
  components: {
    BasketCard,
  },
  methods: {
    ...mapActions(["ADD_TO_BASKET", "DELETE_FROM_BASKET"]),
    addToBasket(title, count, price) {
      let food = {
        title,
        count,
        price,
      };
      this.ADD_TO_BASKET(food);
    },
    deleteFromBasket(index) {
      this.DELETE_FROM_BASKET(index);
    },
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  computed: {
    basketTotalCost() {
      if (this.items.length) {
        let result = [];
        for (let item of this.items) {
          result.push(item.price * item.count);
        }
        result = result.reduce((sum, elem) => {
          return sum + elem;
        });
        return result.toFixed(2);
      }
    },
  },
};
</script>