<template>
  <div class="food-card">
    <div>{{ title }}</div>
    <div>{{ price * count }} BYN</div>
    <button class="btn"><div class="btn-text">Заказать</div></button>
    <br/>
    <button @click="countMinus">-</button>
    <input class="food-prise" v-model="count" />
    <button @click="countPlus">+</button>
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
    countPlus() {
      this.count++;
    },
    countMinus() {
      if (this.count > 1) this.count--;
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style>
.btn-text {
  color: #ffffff;
}
.food-prise {
text-align: center;
}
.food-card {
  width: 404px;
  height: 220px;
  left: 41px;
  top: 30px;
  background: #ffffff;
  border-radius: 0px 125px 0px 150px;
  margin: 25px;
}
/* .food-card:hover {
  animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
}
@keyframes trambling-animation {
    0%, 50%, 100% {
        transform: translateY(2px);
    }
    10%, 30% {
        transform: translateY(-2px);
    }
    20%, 40% {
        transform: translateY(2px);
    }
} */
</style>