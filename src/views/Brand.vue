<template>
<div class="w-screen"> 
  <div class="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-green-500/20 py-32 text-center shadow-xl shadow-gray-300">
    
    <img class="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.vans.com/is/image/VansBrand/SP24%20OLD%20MEETS%20KNU%20%2D%20DESKTOP%20LEADERBOARD%201420x290px?wid=1420" alt="" />
  </div>
</div>


  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center md:pr-8"> <!-- Menambah margin kanan pada elemen teks -->
        <p class="text-center font-bold text-green-500 md:text-left">Siapa Kami</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Beroperasi sejak 1967</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus accusamus esse cum, praesentium laudantium enim pariatur magnam accusantium illum animi? Quos quisquam at laborum eius?</p>
      </div>
      <div class="md:flex md:items-center md:pl-8 relative"> <!-- Menambah margin kiri pada elemen gambar -->
        <div class="h-64 md:h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg relative">
          <!-- Menambahkan lapisan warna hijau -->
          <div class="absolute inset-0 bg-green-500 opacity-20"></div>
          <img src="https://images.vans.com/is/image/VansBrand/SP24%5FSkateClassics%5FCore%5FAction%2Dv1%5FHP%5FShopByTile%5FDesktop%5F334x412?$fullres$" loading="lazy" alt="Foto oleh Martin Sanchez" height="400" width="400" class="max-w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
</div>



<aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">

  <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(0, 4)" :key="item.id">
        <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            {{ item.nama_produk }}</span
          >
          <h3 class="mt-3 mb-2 text-xl font-semibold xl:text-2xl">{{ item.harga }}</h3>
          <p class=" text-base font-light">{{ item.description }}</p>
          <p class=" text-base font-light">Stok:{{ item.stok }}</p>
          <p class=" mb-4 text-base font-light">Size:{{ item.size_chart }}</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
        </div>
    </article>
  </div>
</aside>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div class="md:flex md:items-center md:pl-8 relative"> <!-- Menambah margin kiri pada elemen gambar -->
        <div class="h-64 md:h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg relative">
          <!-- Menambahkan lapisan warna hijau -->
          <div class="absolute inset-0 bg-green-500 opacity-20"></div>
          <img src="https://images.vans.com/is/image/VansBrand/SP24_Omni_UR_NEO_HP_Secondary_D?$fullres$" loading="lazy" alt="Foto oleh Martin Sanchez" height="400" width="400" class="max-w-full h-full object-cover object-center" />
        </div>
      </div>
      <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center md:pr-8"> <!-- Menambah margin kanan pada elemen teks -->
        <p class="text-center font-bold text-green-500 md:text-left">Siapa Kami</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Beroperasi sejak 1967</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus accusamus esse cum, praesentium laudantium enim pariatur magnam accusantium illum animi? Quos quisquam at laborum eius?</p>
      </div>
    </div>
  </div>
</div>


<aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">

<div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
  <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(4, 8)" :key="item.id">
      <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
      <div class="flex-auto px-6 py-5">
        <span class="mb-2 flex items-center text-sm font-semibold">
          {{ item.nama_produk }}</span
        >
        <h3 class="mt-3 mb-2 text-xl font-semibold xl:text-2xl">{{ item.harga }}</h3>
        <p class=" text-base font-light">{{ item.description }}</p>
        <p class=" text-base font-light">Stok:{{ item.stok }}</p>
        <p class=" mb-4 text-base font-light">Size:{{ item.size_chart }}</p>
        <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span>
      </div>
  </article>
</div>
</aside>




</template>

<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />

<style>
  :root {
    font-family: 'Poppins'
  }
</style>

<script>
import { mapActions, mapGetters } from 'vuex';

export default{
  computed: {
    ...mapGetters('datauser', ['getDataUser']),
    ...mapGetters('produk', ['getAllProducts']),
    ...mapGetters('kontak', ['getDataKontak']),
    users(){
      return this.getDataUser;
    },
    produk(){
      return this.getAllProducts.data;
    },
    pesan(){
      return this.getDataKontak;
    }
  },
  methods:{
    ...mapActions('datauser', ['fetchDataUser']),
    ...mapActions('produk', ['fetchProducts']),
    ...mapActions('kontak', ['fetchDataKontak'])
  },
  mounted(){
    this.fetchDataUser();
    this.fetchProducts();
    this.fetchDataKontak();
  }
}
</script>