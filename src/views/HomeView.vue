<template>
  <div class="home" :class="{'empty': !employee}">
    <span
      v-if="!employee"
    >
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
    <div v-else class="employee-wrapper">
      <img class="employee-wrapper__img" src="~@/assets/avatar-big.png" alt="avatar"/>
      <div class="employee-wrapper__info">
        <h2 class="title-2">{{ employee?.name }}</h2>
        <p>
          <span>email: </span>
          {{ employee?.email }}
        </p>
        <p>
          <span>phone: </span>
          {{ employee?.phone }}
        </p>
        <h2 class="title-2 mg-t-b-10px">О себе:</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ratione suscipit facilis a cum asperiores, voluptatibus placeat officia, nesciunt minima ipsam et eligendi repellendus porro cupiditate voluptates. Assumenda, harum magnam.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      employee: null
    }
  },
  computed: {
    ...mapGetters(['getById'])
  },
  updated() {
    this.employee = this.getById(this.$route.params.id);
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.home {
  width: 100%;
  padding: 30px 20px;
  border-left: 1px solid $border-input-gray;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
}

.employee-wrapper {
  display: flex;
  align-content: center;
  gap: 60px;
}

.employee-wrapper__img {
  width: 100%;
  max-width: 424px;
  max-height: 286px;
}

.employee-wrapper__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mg-t-b-10px {
  margin: 10px 0;
}

@media (max-width: 1280px) {
  .employee-wrapper {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>