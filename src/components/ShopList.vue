<template>
  <div class="shop-list">
    <div class="utp">
      <div class="utp-text">
        Выбери свои любимые блюда из любого ресторана, а мы доставим всего за 40
        минут
      </div>
    </div>
    <div class="shops">
      <p class="shop">McDonald's</p>
      <p class="shop">KFC</p>
      <p class="shop">Темпо</p>
      <p class="shop">ДоДо пицца</p>
      <p class="shop">Гирос-Кебаб</p>
    </div>
  </div>
</template>

<style>
.shop-list {
  background: transparent;
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
}
.shops {
  width: 252px;
  height: auto;
  background-color: #c0ef69;
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
.shop {
  border-bottom: 3px solid #FFFFFF;
  margin: 2px;
  padding-left: 30px;
}
</style>