import axios from 'axios';

const produk = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
  },
  getters: {
    isprodukenticated: (state) => !!state.token
    
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/login',
          credentials
        );
        const token = response.data.token;

        localStorage.setItem('token', token);
        

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
      commit('SET_TOKEN', '');
      commit('SET_TOKEN', null);
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

export default produk;