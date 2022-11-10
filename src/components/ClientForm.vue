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

<style lang="scss">
.form {
  width: 406px;
  height: 383px;
}
.form-list {
  background: transparent;
  width: 35%;
  height: 80vh;
  display: flex;
  flex-direction: column;
}
.form-input {
  border-radius: 0;
  background-color: transparent;
  color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  height: 80px;
}
.form-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 10px 12px;
  width: 133px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 40px;
  color: #ffffff;
  border-color: #6fa701;
  background: #6fa701;
  border-radius: 5px;
  &:active {
    background-color: #9ddd2a;
  }
}
.utp {
  width: 252px;
  height: 185px;
  left: 0px;
  top: 0px;
  background-color: #6fa701;
}
.form-text {
  margin-top: 70px;
  margin-bottom: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4d4c4c;
}
.client-form {
  box-sizing: border-box;
  width: 252px;
  height: 250px;
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
