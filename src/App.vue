<template>
  <Header />
  <main class="container main">
    <Sidebar />
    <RouterView />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: "App",
  components: {
    Header,
    Sidebar
  },
}
</script>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
@import './assets/styles/variables.scss';

.main {
  display: flex;
  height: 575px;
  border-radius: 10px;
  box-shadow: $shadow;
  overflow: hidden;
}

@media (max-width:768px) {
  .main {
    flex-direction: column;
    height: 100%;
  }
}
</style>
