<template>
  <div class="search">
    <h2 class="search__title title-2">Поиск сотрудников</h2>
    <input 
      type="text"
      placeholder="Введите id или имя"
      class="input"
      @input="search"
    />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'search',
  methods: {
    ...mapMutations(['changeValue']),
    search({ target }) {
      this.changeValue(target.value.trim());
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.search {
  width: 240px;
  margin-bottom: 30px;
}

.search__title {
  margin-bottom: 14px;
}
.input {
  width: 100%;
  height: 46px;
  padding: 16px;
  color: $gray;
  border-radius: 8px;
  border: 1.5px solid $border-input-gray;
  &:focus {
    outline: none;
  }
}
</style>
