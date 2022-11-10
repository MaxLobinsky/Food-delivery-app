<template>
  <div class="basket-card">
    <div class="basket-card-img"></div>
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
.remove-btn {
  margin-top: 10px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #4d4c4c;
  font-size: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
}
.basket-card {
  width: 694px;
  height: 310px;
  left: 41px;
  top: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
  margin-left: 6px;
  background: #ffffff;
  border-radius: 4px;
  flex-shrink: 0;
  box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.25);
  /*   &:hover {
    box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.25);
  } */
}
.basket-card-img {
  width: 250px;
  height: 250px;
  max-width: 250px;
  max-height: 250px;
  margin-left: 20px;
  margin-top: 10px;
  background: #ffffff;
  border: 1.09444px solid #ffffff;
  border-radius: 197px;
}
.basket-card-info {
  display: flex;
  flex-direction: column;
  margin-left: 13px;
}
.basket-card-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #4d4c4c;
  margin-top: 90px;
}
.basket-card-count {
  display: flex;
  flex-direction: row;
  margin-top: 42px;
}
.basket-card-count-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
  width: 23.37px;
  height: 29px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
.basket-card-price-input {
  display: flex;
  align-items: center;
  padding: 2px 2px;
  margin-left: 13px;
  margin-right: 13px;
  width: 23.37px;
  height: 29px;
  background: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
  border-radius: 0;
}
.basket-card-price {
  margin-left: 60px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #222222;
}
</style>
