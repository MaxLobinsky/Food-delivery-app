<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="shop-container">
      <ShopList @handleShopClick="handleShopClick" :items="ITEMS" />
      <FoodList :items="shops" />
    </div>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
import FoodList from "@/components/FoodList.vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["ITEMS"]),
  },
  data() {
    return {
      shops: this.$store.state.items[0].food, /* items[0].food */
    };
  },
  methods: {
    handleShopClick(index) {
      this.shops = this.ITEMS[index].food;
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