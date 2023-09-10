<template>
  <header>
    <div class="container header-wrapper">
      <h1 class="title">Жилфонд</h1>
      <span>Пользователь</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 50px;
  margin-bottom: 44px;
}
.title {
  color: $red;
  font-size: 32px;
  font-weight: 700;
}

@media (max-width:768px) {
  .header-wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
