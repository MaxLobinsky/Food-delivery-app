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
        v-for="(item, index) in items"
        :key="item"
        @click="setCafe(index), isActive=index"
        :class="{ isActive: isActive == index }"
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
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setCafe(index) {
      this.$emit("handleShopClick", index);
    },
  },
};
</script>