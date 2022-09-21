<template>
  <div>
  <div>
    <NavBar />
  </div>
  <div class="shop-container">
    <ShopList />
    <FoodList />
  </div>
</div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
import FoodList from "@/components/FoodList.vue";
import NavBar from "@/components/NavBar.vue";
export default {
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