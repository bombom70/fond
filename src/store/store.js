import { createStore } from "vuex";
import { fetchUsers } from "../network/users";
import _ from 'lodash';

const store = createStore({
  state() {
    return {
      status: 'idle',
      users: []
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.users = payload;
    },
    changeStatus(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    async fetch({ commit }, params) {
      try {
        if (_.isEmpty(params)) {
          commit('addUsers', []);
          return ;
        } else if (params?.name) {
          commit('changeStatus', 'loading');
          const promises = params.name.split(',').map(name => {
            return fetchUsers({ username: name });
          });
          const resultData = await Promise.all(promises);
          commit('addUsers', _.flatten(resultData));
        } else if (params?.id) {
          commit('changeStatus', 'loading');
          const resultData = await fetchUsers(params);
          commit('addUsers', resultData);
        }
        commit('changeStatus', 'succeeded');
      } catch (error) {
        commit('changeStatus', 'failed');
      }
    }
  },
  getters: {
    getUsers: (state) => {
      return state.users;
    },
    getById: (state) => (id) => {
      return state.users.find(u => u.id === Number(id));
    },
    getStatus: (state) => {
      return state.status;
    },
  }
});

export default store;