<template>
  <div class="basket-card">
    <div class="basket-card-img">Изображение</div>
    <div class="basket-card-info">
      <div class="basket-card-title">{{ item.title }}</div>
      <div class="basket-card-count">
        <button class="basket-card-count-button" @click="countMinus">-</button>
        <input class="basket-card-price-input" v-model="item.count" />
        <button class="basket-card-count-button" @click="countPlus">+</button>
        <div class="basket-card-price">
          {{ (item.price * item.count).toFixed(2) }} BYN
        </div>
      </div>
    </div>
    <div class="remove-btn" style="cursor: pointer" @click="deleteFromBasket"
      >X</div
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["DELETE_FROM_BASKET"]),
/*     onSubmit() {
      this.$emit(
        "handleFoodClick",
        this.item.title,
        this.item.count,
        this.item.price
      );
    }, */
    countPlus() {
      this.item.count++;
    },
    countMinus() {
      if (this.item.count > 0) this.item.count--;
      if (this.item.count === 0) this.DELETE_FROM_BASKET();
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
