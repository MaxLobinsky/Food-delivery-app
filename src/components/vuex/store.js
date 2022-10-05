import Vuex from "vuex";

let store = new Vuex.Store({
  mutations: {
    /*      SET_ITEMS_TO_STATE: (state, items) => {
      state.items = items;
    }, */
    SET_BASKET: (state, title) => {
      state.backet.push(title);
      console.log(state.backet);
    },
  },
  actions: {
    /*      GET_ITEMS_FROM_API({ commit }) {
return axios("/", {
            method: "GET",
          }).then((items) => {
            commit(SET_ITEMS_TO_STATE, items);
          });
        }, */
    ADD_TO_BASKET({ commit }, title) {
      commit("SET_BASKET", title);
    },
  },
  state: {
    items: [
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
      { id: 3, title: "Темпо" },
      { id: 4, title: "ДоДо пицца" },
      { id: 5, title: "Гирос-Кебаб" },
    ],
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
});

export default store;
