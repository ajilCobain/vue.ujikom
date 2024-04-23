import axios from 'axios';

const galeri = {
  namespaced: true,
  state: {
    galeri: [],
    currentGaleri: null,
  },
  getters: {
    getAllGaleri: (state) => state.galeri,
    getGaleriById: (state) => state.currentGaleri,
    getCurrentGaleri: (state) => state.currentGaleri,
  },
  actions: {
    async fetchGaleri({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/galeri");
        commit("SET_GALERI", response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async fetchGaleriById({ commit }, galeriId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/galeri/${galeriId}`);
        commit("SET_CURRENT_GALERI", response.data);
      } catch (error) {
        console.error(error.response.message);
        throw error;
      }
    },
    async createGaleri({ commit }, galeriData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/galeri", galeriData);
        commit("ADD_GALERI", response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async updateGaleri({ commit }, galeriData) {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/galeri/${galeriData.id}`, galeriData);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async deleteGaleri({ commit }, galeriId) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/galeri/${galeriId}`);
        commit("DELETE_GALERI", galeriId);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_GALERI(state, galeri) {
      state.galeri = galeri;
    },
    SET_CURRENT_GALERI(state, galeri) {
      state.currentGaleri = galeri;
    },
    ADD_GALERI(state, newGaleri) {
      state.galeri.push(newGaleri);
    },
    DELETE_GALERI(state, galeriId) {
      state.galeri = state.galeri.filter(galeri => galeri.id !== galeriId);
    },
  },
};

export default galeri;
