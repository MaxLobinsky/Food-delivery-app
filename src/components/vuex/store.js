import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import items from "@/seeders/items.json"

let store = new Vuex.Store({
  mutations: {
    SET_BASKET: (state, food) => {
      if (state.backet.length) {
        let isFoodExist = false;
        state.backet.map((item) => {
          if (item.title === food.title) {
            isFoodExist = true;
            item.count += food.count;
          }
        });
        if (!isFoodExist) state.backet.push(food);
      } else {
        state.backet.push(food);
      }
    },
    DELETE_CART: (state, index) => {
      state.backet.splice(index, 1);
    },
  },
  actions: {
    ADD_TO_BASKET({ commit }, food) {
      commit("SET_BASKET", food);
    },
    DELETE_FROM_BASKET({ commit }, index) {
      commit("DELETE_CART", index);
    },
  },
  state: {
    items: items
/*     [
      {
        id: 1,
        title: "McDonald",
        food: [
          { title: "Биг Мак", price: 8 },
          { title: "Роял", price: 8.2 },
          { title: "Биг Тейсти", price: 12 },
          { title: "Филе-о-фиш", price: 7.7 },
          { title: "Снэк-Бокс с крыльями", price: 9.9 },
          { title: "Картофель фри", price: 4 },
        ],
      },
      {
        id: 2,
        title: "KFC",
        food: [
          { title: "Чикенбургер", price: 3 },
          { title: "Чизбургер Де Люкс", price: 5.8 },
          { title: "Шефбургер", price: 6.2 },
          { title: "Наггетс Бокс", price: 6.5 },
          { title: "Брайтсы средние", price: 5.4 },
          { title: "4 ножки", price: 8.9 },
        ],
      },
      {
        id: 3,
        title: "Темпо",
        food: [
          { title: 'Пицца 31 см "Четыре сезона"', price: 22.80 },
          { title: 'Пицца 31 см "Везувий"', price: 15.30 },
          { title: 'Пицца 31 см "Пикантная"', price: 16.50 },
          { title: 'Пицца 31 см "Супер Пепперони"', price: 20 },
          { title: 'Пицца 31 см "Греческая"', price: 15.30 },
          { title: 'Пицца 31 см "Маргарита"', price: 22.80 },
        ],
      },
      {
        id: 4,
        title: "ДоДо пицца",
        food: [
          { title: 'Пицца 30 см "Домашняя"', price: 21.90 },
          { title: 'Пицца 30 см "ДоДо Микс"', price: 29.90 },
          { title: 'Пицца 30 см "Пепперони"', price: 21.90 },
          { title: 'Пицца 30 см "Песто"', price: 27.90 },
          { title: 'Пицца 30 см "Гавайская"', price: 24.90 },
          { title: 'Пицца 30 см "Итальянская"', price: 24.90 },
        ],
      },
      {
        id: 5,
        title: "Salad Drive",
        food: [
          { title: 'Кешью-кейк Кокос', price: 61 },
          { title: 'Десерт с ореховой карамелью', price: 59.09 },
          { title: 'Кешью-кейк Лимонный', price: 55.85 },
          { title: 'Торт грильяжный', price: 58.30 },
          { title: 'Торт детский Микки-Маус', price: 57.60 },
          { title: 'Торт Зимняя вишня', price: 41.50 },
        ],
      },
    ] */,
    backet: [],
  },
  getters: {
    ITEMS(state) {
      return state.items;
    },
    BASKET(state) {
      return state.backet;
    },
  },
  modules: {},
  plugins: [createPersistedState()],

});

export default store;
