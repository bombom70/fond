import { createStore } from "vuex";
import { fetchUsers } from "../network/users";
const store = createStore({
  state() {
    return {
      value: "",
      users: []
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.users = payload;
    },
    changeValue(state, payload) {
      state.value = payload;
    }
  },
  actions: {
    fetch({ commit }) {
      fetchUsers().then(res => commit('addUsers', res));
    }
  },
  getters: {
    filteredUsers: (state) => {
      const values = state.value.toLowerCase().split(",");
      const prepareValues = values.map(v => v.trim());
      return state.users.filter(({ id, username }) => {
        return username.toLowerCase().includes(state.value.toLowerCase()) 
          || prepareValues.indexOf(username.toLowerCase()) > -1
          || id === Number(state.value);
      });
    },
    getById: (state) => (id) => {
      return state.users.find(u => u.id === Number(id));
    },
    getValue: (state) => {
      return state.value;
    }
  }
});

export default store;