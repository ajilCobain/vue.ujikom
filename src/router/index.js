import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Login from '../components/Login.vue';
import addProduk from '../views/admin/addProduk.vue'
import Brand from '../views/Brand.vue';
import Galeri from '../views/Galeri.vue';
import TentangKami from '../views/TentangKami.vue';
import Kontak from '../views/Kontak.vue';
import Footer from '../components/guest/footer.vue';
import Navbar from '../components/guest/navbar.vue';
import LayoutAdmin from '../layout/layout.vue';
import admin from '../views/admin/dashboard.vue';
import tabel from '../views/tabel/tabel_user.vue';
import profile from '../views/admin/profile.vue';
import kontak from '../views/tabel/table_kontak.vue';
import produk from '../views/admin/produk.vue';
import LayoutUser from '../layout/userLayout.vue';
import editProduk from '../views/admin/editProduk.vue';

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/admin',
      name: 'layout',
      component: LayoutAdmin,
      beforeEnter: guardMyroute,
      children: [
          {
            path: '/admin',
            name: 'admin',
            component: admin,
          },
          {
            path: '/admin/tabel',
            name: 'tabel',
            component: tabel,
          },
          {
            path: '/admin/profile',
            name: 'profile',
            component: profile,
          },
          {
            path: '/admin/kontak',
            name: 'AdminKontak',
            component: kontak
          },
          {
            path: '/admin/produk',
            name: 'AdminProduk',
            component: produk
          },
          {
            path: '/admin/addProduk',
            name: 'addProduk',
            component: addProduk
          },
          {
            path: '/admin/editProduk/:id',
            name: 'editProduk',
            component: editProduk
          },
      ]
    },
    {
      path: '/',
      name: 'layoutUser',
      component: LayoutUser,
      children: [
          {
            path: '/',
            name: 'home',
            component: Home,
          },
          {
            path: '/kontak',
            name: 'kontak',
            component: Kontak,
          },
          {
            path: '/brand',
            name: 'brand',
            component: Brand,
          },
          {
            path: '/galeri',
            name: 'galeri',
            component: Galeri
          },
          {
            path: '/tentangKami',
            name: 'TentangKami',
            component: TentangKami
          },
          
         
      ]
    },
  ]
})



export default router
