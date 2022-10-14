<template>
  <div class="food-card">
    <div class="food-card-img"></div>
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
<style lang="scss">
.food-card {
  display: flex;
  flex-direction: row;
  width: 404px;
  height: 220px;
  background: #ffffff;
  border-radius: 0px 125px 0px 150px;
  margin: 30px;
  box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.06);
  }
}

.food-card-img {
  width: 185px;
  height: 185px;
  max-width: 185px;
  max-height: 185px;
  margin-left: 20px;
  margin-top: 10px;
  background: #FFFFFF;
  border: 1.09444px solid #FFFFFF;
  border-radius: 197px;
}
.food-card-info {
  display: flex;
  flex-direction: column;
  margin-left: 13px;
}
.food-card-count {
  display: flex;
  flex-direction: row;
}
.food-card-title {
  max-height: 22px;
  max-width: 165px;
  margin-top: 35px;
  margin-bottom: 42px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #4d4c4c;
}

.food-card-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 10px 12px;
  width: 133px;
  height: 40px;
  margin-bottom: 40px;
  background: #6fa701;
  border-radius: 5px;
  &:active {
    background-color: #9ddd2a;
  }
}
.food-card-btn-text {
  color: #ffffff;
}

.food-card-price-input {
  align-items: flex-end;
  padding: 2px 2px;
  margin-left: 13px;
  margin-right: 13px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  border-radius: 0;
}
.food-card-price {
  margin-left: 35px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #222222;
}

.food-card-count-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
  width: 14.88px;
  height: 20px;
  left: 275.12px;
  top: 99px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
</style>