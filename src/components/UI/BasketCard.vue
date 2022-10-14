<template>
  <div class="basket-card">
    <div>
      <div>{{ item.title }}</div>
      <div>{{ (item.price * item.count).toFixed(2) }} BYN</div>
      <input class="food-prise" v-model="item.count" />
      <button @click="countMinus">-</button>
      <button @click="countPlus">+</button>
      <span style="cursor: pointer" @click="deleteFromBasket">X</span>
      <!--       <button @click="onSubmit" class="btn">
        <div class="btn-text">Заказать</div>
      </button> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["DELETE_FROM_BASKET"]),
    onSubmit() {
      this.$emit(
        "handleFoodClick",
        this.item.title,
        this.item.count,
        this.item.price
      );
    },
    countPlus() {
      this.item.count++;
    },
    countMinus() {
      if (this.item.count > 0) this.item.count--;
      if (this.item.count === 0) this.deleteFromBasket();
    },
    deleteFromBasket() {
      this.$emit("deleteFromBasket");
    },
  },
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
};
</script>

  <style lang="scss">
.btn-text {
  color: #ffffff;
}
.food-prise {
  text-align: center;
}
.basket-card {
  width: 694px;
  height: 310px;
  left: 41px;
  top: 30px;
  margin-bottom: 5px;
  margin-left: 6px;
  background: #ffffff;
  flex-shrink: 0;
  &:hover {
    box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>