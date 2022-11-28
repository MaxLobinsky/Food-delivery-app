<template>
  <div class="food-card">
    <div class="food-card-img">Изображение</div>
    <div class="food-card-info">
      <div class="food-card-title">{{ item.title }}</div>
      <div class="food-card-count">
        <button class="food-card-count-button" @click="countMinus">-</button>
        <input class="food-card-price-input" v-model="count" />
        <button class="food-card-count-button" @click="countPlus">+</button>
        <div class="food-card-price">
          {{ (item.price * count).toFixed(2) }} BYN
        </div>
      </div>
      <button class="food-card-btn" @click="onSubmit">
        <div class="food-card-btn-text">Заказать</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onSubmit() {
      this.$emit(
        "handleFoodClick",
        this.item.title,
        this.count,
        this.item.price
      );
    },
    countPlus() {
      this.count++;
    },
    countMinus() {
      if (this.count > 1) this.count--;
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