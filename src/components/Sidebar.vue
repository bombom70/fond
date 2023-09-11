<template>
  <div class="sidebar">
    <SearchForm />
    <h2 class="title-2 mg-b-14">Результаты</h2>
    <EmployeeList/>
  </div>
</template>

<script>
import EmployeeList from './EmployeeList.vue';
import SearchForm from './SearchForm.vue';

export default {
  name: "sidebar",
  components: {
    EmployeeList,
    SearchForm,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.sidebar {
  width: 100%;
  max-width: 350px;
  padding: 20px 30px 71px 30px;
}

.mg-b-14 {
  margin-bottom: 14px;
}

@media (max-width:768px) {
  .sidebar {
    max-width: 100%;
    padding-bottom: 20px;
  }
}
</style>
