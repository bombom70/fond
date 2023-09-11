<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import _ from 'lodash';
import qs from 'query-string';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const inputValue = ref("");

const doSearch = (value) => {
  if (_.isEmpty(value)) {
    router.push('/');
    store.dispatch('fetch', {});
    return;
  }
  const parsed = qs.parse(location.search);
  if (Number(value)) {
    parsed.id = value;
    parsed.name = null;
  } else {
    parsed.id = null;
    parsed.name = value.split(',').map(v => _.capitalize(v.trim())).join(',');
  }
  const newUrl = qs.stringifyUrl({
      url: '/',
      query: {
        ...parsed
      }
    }, {
      skipEmptyString: true,
      skipNull: true,
    });
    router.push(newUrl);
    store.dispatch('fetch', parsed);
}

const search = _.debounce(doSearch, 1000);

onMounted(() => {
  const parsed = qs.parse(location.search);
  const key = Object.keys(parsed)[0];
  inputValue.value = parsed[key];
  doSearch(parsed[key]);
});

</script>

<template>
  <div class="search">
    <h2 class="search__title title-2">Поиск сотрудников</h2>
    <input 
      type="text"
      placeholder="Введите id или имя"
      class="input"
      @input="search($event.target.value)"
      :value="inputValue"
    />
  </div>
</template>

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
