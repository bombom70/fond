<template>
  <router-link :to="url" class="employee">
    <img class="employee__img" src="~@/assets/avatar.png" alt="avatar"/>
    <div class="employee__info" :class="{'active': id === Number(this.$route.params.id)}">
      <p class="employee__name">{{ username }}</p>
      <span class="employee__mail">{{ email }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name:"employee",
  props: ['id', 'username', 'email'],
  computed: {
    url() {
      return `/${this.id}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.employee {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: $white;
  box-shadow: $shadow;
  text-decoration: none;
}
.employee__img {
  width: 70px;
  height: 70px;
}
.employee__info {
  padding: 15px;
}
.employee__name {
  font-weight: 600;
}

.employee__mail {
  color: $gray;
}

.active {
  background: $gray-active-el;
}
</style>
