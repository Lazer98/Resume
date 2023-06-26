

import { createStore } from 'vuex';

const store = createStore({
  state: {
    language: "english"
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {
    updateLanguage: ({ commit }, language) => {
      console.log("NEW LANGUAGE FOUND "+language);
      commit('setLanguage', language);
    },
  },
  getters: {
    getLanguage: state => state.language,
  },
});

export default store;
