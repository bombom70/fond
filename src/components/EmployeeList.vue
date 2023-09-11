<template>
  <div class="emploee-lits">
    <span class="msg-result" v-if="getStatus === 'idle' || (!$route.query.id && !$route.query.name)">Начните поиск</span>
    <div v-else-if="getStatus === 'loading'">Loading...</div>
    <div v-else-if="getStatus === 'failed'">Упс, что-то пошло не так...</div>
    <span v-else-if="getUsers.length < 1 && getStatus === 'succeeded'">ничего не найдено</span>
    <EmployeeItem
      v-else
      v-for="employee in getUsers"
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
    ...mapGetters(['getUsers', 'getStatus'])
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.emploee-lits {
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
  width: 321px;
  height: 100%;
}

.msg-result {
  color: $gray;
}

@media (max-width: 768px) {
  .emploee-lits {
    width: 100%;
  }
}
</style>
