<template>
  <div class="shop-list">
    <div class="utp">
      <div class="utp-text">
        Выбери свои любимые блюда из любого ресторана, а мы доставим всего за 40
        минут
      </div>
    </div>
    <div class="shops">
      <div
        class="shop"
        @click="setCafe(item)"
        v-for="item in items"
        :key="item"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setCafe(item) {
      this.$emit("handleShopClick", item.id);
    },
  },
};
</script>

<style>
.shop-list {
  background: transparent;
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
}
.utp {
  width: 252px;
  height: 185px;
  left: 0px;
  top: 0px;
  background-color: #6fa701;
}
.utp-text {
  color: #ffffff;
  padding: 20px 33px 40px 30px;
}
.shop {
  box-sizing: border-box;
  width: 252px;
  height: 42px;
  background-color: #c0ef69;
  border-bottom: 3px solid #ffffff;
  padding-left: 30px;
}
.shop:hover {
  background-color: #9ddd2a;
  cursor: pointer;
}
.isActive {
  background-color: #9ddd2a;
}
</style>