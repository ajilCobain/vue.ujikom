import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.token
    
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/login',
          credentials
        );
        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        commit('SET_TOKEN', token);
        commit ('SET_LOGIN_ERROR', null)
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login Failed";
        commit("SET_LOGIN_ERROR", errorMessage) 
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Pastikan untuk menghapus item 'user' juga jika diperlukan
      commit('SET_TOKEN', ''); // Cukup menghapus token dari state Vuex satu kali
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    
    SET_LOGIN_ERROR(state,error){
      state.loginError = error;
    },
  },
};

export default auth;