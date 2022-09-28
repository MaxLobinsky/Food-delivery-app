<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="shop-container">
      <ShopList @handleShopClick="handleShopClick" :items="items" />
      <FoodList :items="shops" />
    </div>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
import FoodList from "@/components/FoodList.vue";
import NavBar from "@/components/NavBar.vue";
import items from "@/seeders/items";
export default {
  data() {
    return {
      items: items,
      shops: null,
    };
  },
  methods: {
    handleShopClick(id) {
      this.shops=items[id-1].food
    },
  },
  components: {
    ShopList,
    FoodList,
    NavBar,
  },
};
</script>

<style>
.shop-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>