<template>
  <div >
    <div>
      <NavBar />
    </div>
    <div class="basket-container">
      <ClientForm />
      <BasketList :items="BASKET" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ClientForm from "@/components/ClientForm.vue";
import BasketList from "@/components/BasketList.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["BASKET"]),
  },
  components: {
    NavBar,
    BasketList,
    ClientForm,
  },
};
</script>

<style>
.basket-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>