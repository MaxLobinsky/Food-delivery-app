<template>
  <div class="form-list">
    <div class="utp">
      <div class="utp-text">Для оформления заказа заполните форму ниже</div>
    </div>
    <div class="shops">
      <div class="client-form"></div>
    </div>
  </div>
</template>
  
  <script>
export default {
  methods: {},
};
</script>
  
  <style>
.form-list {
  background: transparent;
  width: 800px;
  height: 80vh;
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