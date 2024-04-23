import { createStore } from 'vuex';
import auth from './modules/auth';
import produk from './modules/produk';
import kontak from './modules/kontak';
import datauser from './modules/profile';
import galeri from './modules/galeri';


const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    produk,
    kontak,
    datauser,
    galeri
  },
});

export default store;