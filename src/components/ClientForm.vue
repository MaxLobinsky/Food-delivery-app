<template>
  <div class="form-list">
    <form class="form" action="">
      <div class="">
        <div class="form-text">Для оформления заказа заполните форму ниже:</div>
      </div>
      <input class="form-input" type="text" placeholder="Ваше имя" required />
      <input
        class="form-input"
        type="email"
        placeholder="Электронная почта"
        required
      />
      <input
        class="form-input"
        type="tel"
        placeholder="Номер телефона"
        required
      />
      <input
        class="form-input"
        type="text"
        placeholder="Адрес доставки"
        required
      />
      <button class="form-btn">Заказать</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
