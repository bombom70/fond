<template>
  <div class="emploee-lits">
    <span v-if="filteredUsers.length < 1">ничего не найдено</span>
    <EmployeeItem
      v-else
      v-for="employee in filteredUsers"
      :key="employee.id"
      :id="employee.id"
      :username="employee.username"
      :email="employee.email"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EmployeeItem from './EmployeeItem.vue';

export default {
  name: "employees",
  components: {
    EmployeeItem,
  },
  computed: {
    ...mapGetters(['filteredUsers'])
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.emploee-lits {
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: scroll;
  width: 321px;
  height: 100%;
}

@media (max-width: 768px) {
  .emploee-lits {
    width: 100%;
  }
}
</style>
