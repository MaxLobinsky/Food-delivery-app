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
  <style lang="scss">
.basket-list {
  margin-top: 70px;
  background: #ffffff;
  width: 720px;
  height: 670px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.basket-null {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  width: 720px;
  height: 670px;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-style: normal;
  color: #4d4c4c;
  font-weight: 600;
  font-size: 40px;
  line-height: 24px;
}
.basket-total {
  display: flex;
  position: relative;
  bottom: 0;
  margin: 16px;
  justify-content: center;
}
.total-name {
  margin-right: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4d4c4c;
}
.total-count {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
</style>