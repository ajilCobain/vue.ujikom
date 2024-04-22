import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import Login from '../components/Login.vue';

import Brand from '../views/user/Brand.vue';
import Galeri from '../views/Galeri.vue';
import TentangKami from '../views/TentangKami.vue';
import Kontak from '../views/Kontak.vue';
import Footer from '../components/footer.vue';
import Navbar from '../components/navbar.vue';
import LayoutAdmin from '../layout/LayoutAdmin.vue';
import admin from '../views/admin/dasboard.vue';
import table from '../views/tabel/tabel_user.vue';
import profile from '../views/admin/profile.vue';
import kontak from '../views/tabel/tabel_kontak.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: Galeri
    },
    {
      path: '/tentangkami',
      name: 'tentangkami',
      component: TentangKami
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/admin',
      name: 'LayoutAdmin',
      component: LayoutAdmin,
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
      ]
    },
  ]
})



export default router
