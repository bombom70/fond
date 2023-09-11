<template>
  <div class="sidebar">
    <SearchForm />
    <h2 class="title-2 mg-b-14">Результаты</h2>
    <span v-if="!getValue" class="msg-result">Начните поиск</span>
    <EmployeeList v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EmployeeList from './EmployeeList.vue';
import SearchForm from './SearchForm.vue';

export default {
  name: "sidebar",
  components: {
    EmployeeList,
    SearchForm,
  },
  computed: {
    ...mapGetters(['getValue'])
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.sidebar {
  width: 100%;
  max-width: 350px;
  padding: 20px 30px 43px 30px;
}

.mg-b-14 {
  margin-bottom: 14px;
}

.msg-result {
  color: $gray;
}

@media (max-width:768px) {
  .sidebar {
    max-width: 100%;
  }
}
</style>
