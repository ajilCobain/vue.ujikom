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
    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(0, 8)" :key="item.id">
      <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
      <div class="flex-auto px-6 py-5">
        <span class="mb-2 flex items-center text-sm font-semibold">{{ item.nama_produk }}</span>
        <h3 class="mt-3 mb-2 text-xl font-semibold xl:text-2xl">{{ item.harga }}</h3>
        <p class=" text-base font-light">{{ item.description }}</p>
        <p class=" text-base font-light">Stok:{{ item.stok }}</p>
        <p class=" mb-4 text-base font-light">Size:{{ item.size_chart }}</p>
        <!-- Button WhatsApp -->
        <div class="mt-6">
          <a href="https://wa.me/+627815607435">
            <button class="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" id="whatsapp" x="0" y="0" version="1.1" viewBox="0 0 100 100" xml:space="preserve"><g id="Graphics-x2F-App-Icons-x2F-WhatsApp"><g id="Icon_6_"><linearGradient id="Background_13_" x1="50.723" x2="50.723" y1="627.233" y2="625.746" gradientTransform="matrix(60 0 0 -60 -2993 37639)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#62FA7F"></stop><stop offset=".686" stop-color="#22CC40"></stop><stop offset="1" stop-color="#05B723"></stop></linearGradient><path id="Background_7_" fill="url(#Background_13_)" d="M28.4 5H26c-2 .1-4.6.2-5.7.5-1.8.4-3.5.9-4.9 1.6-1.6.8-3.1 1.9-4.4 3.2-1.3 1.3-2.3 2.7-3.2 4.4-.7 1.4-1.3 3.1-1.6 4.8-.2 1.2-.4 3.8-.5 5.8V74c.1 2 .2 4.6.5 5.7.4 1.8.9 3.5 1.6 4.9.8 1.6 1.9 3.1 3.2 4.4 1.3 1.3 2.7 2.3 4.4 3.2 1.4.7 3.1 1.3 4.8 1.6 1.2.2 3.8.4 5.8.5h48.7c2-.1 4.6-.2 5.7-.5 1.8-.4 3.5-.9 4.9-1.6 1.6-.8 3.1-1.9 4.4-3.2 1.3-1.3 2.3-2.7 3.2-4.4.7-1.4 1.3-3.1 1.6-4.8.2-1.2.4-3.8.5-5.8V25.3c-.1-2-.2-4.6-.5-5.7-.4-1.8-.9-3.5-1.6-4.9-.8-1.6-1.9-3.1-3.2-4.4C88.4 9 87 8 85.3 7.1c-1.4-.7-3.1-1.3-4.8-1.6-1.2-.2-3.8-.4-5.8-.5H28.4z"></path><path id="WhatsApp-Icon" fill="#fff" d="M66.6 54.4c-.8-.4-4.8-2.3-5.5-2.6-.7-.3-1.3-.4-1.8.4s-2.1 2.6-2.5 3.1c-.5.5-.9.6-1.7.2-.8-.4-3.4-1.2-6.5-3.9-2.4-2.1-4-4.7-4.5-5.5-.5-.8 0-1.2.4-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.2-.4-1.8-4.3-2.5-5.9-.7-1.5-1.3-1.3-1.8-1.4h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.7-2.8 6.6 0 3.9 2.9 7.6 3.3 8.2.4.5 5.7 8.5 13.7 11.9 1.9.8 3.4 1.3 4.6 1.7 1.9.6 3.7.5 5.1.3 1.5-.2 4.8-1.9 5.4-3.7.7-1.8.7-3.4.5-3.7-.4-.4-.9-.6-1.7-1M51.3 75c-4.8 0-9.4-1.3-13.5-3.7l-1-.6-10 2.6 2.7-9.7-.6-1c-2.6-4.2-4-9-4-14 0-14.5 11.9-26.3 26.5-26.3C58.3 22.3 65 25 70 30c5 5 7.7 11.6 7.7 18.6C77.7 63.1 65.8 75 51.3 75m22.5-48.8c-6-6-14-9.3-22.5-9.3-17.5 0-31.8 14.2-31.8 31.7 0 5.6 1.5 11 4.2 15.8l-4.5 16.4L36 76.4c4.6 2.5 9.9 3.9 15.2 3.9C68.7 80.3 83 66.1 83 48.6c.1-8.4-3.2-16.4-9.2-22.4"></path></g></g></svg>
              Hubungi Kami
            </button>
          </a>
        </div>
        <!-- End Button WhatsApp -->
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
  <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(0, 8)" :key="item.id">
      <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
      <div class="flex-auto px-6 py-5">
        <span class="mb-2 flex items-center text-sm font-semibold">
          {{ item.nama_produk }}</span
        >
        <h3 class="mt-3 mb-2 text-xl font-semibold xl:text-2xl">{{ item.harga }}</h3>
        <p class=" text-base font-light">{{ item.description }}</p>
        <p class=" text-base font-light">Stok:{{ item.stok }}</p>
        <p class=" mb-4 text-base font-light">Size:{{ item.size_chart }}</p>
        <div class="mt-6">
          <a :href="'https://wa.me/087815607435?text=Saya%20mau%20pesan%20baju%20' + encodeURIComponent(item.nama_produk)">
            <button class="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" id="whatsapp" x="0" y="0" version="1.1" viewBox="0 0 100 100" xml:space="preserve"><g id="Graphics-x2F-App-Icons-x2F-WhatsApp"><g id="Icon_6_"><linearGradient id="Background_13_" x1="50.723" x2="50.723" y1="627.233" y2="625.746" gradientTransform="matrix(60 0 0 -60 -2993 37639)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#62FA7F"></stop><stop offset=".686" stop-color="#22CC40"></stop><stop offset="1" stop-color="#05B723"></stop></linearGradient><path id="Background_7_" fill="url(#Background_13_)" d="M28.4 5H26c-2 .1-4.6.2-5.7.5-1.8.4-3.5.9-4.9 1.6-1.6.8-3.1 1.9-4.4 3.2-1.3 1.3-2.3 2.7-3.2 4.4-.7 1.4-1.3 3.1-1.6 4.8-.2 1.2-.4 3.8-.5 5.8V74c.1 2 .2 4.6.5 5.7.4 1.8.9 3.5 1.6 4.9.8 1.6 1.9 3.1 3.2 4.4 1.3 1.3 2.7 2.3 4.4 3.2 1.4.7 3.1 1.3 4.8 1.6 1.2.2 3.8.4 5.8.5h48.7c2-.1 4.6-.2 5.7-.5 1.8-.4 3.5-.9 4.9-1.6 1.6-.8 3.1-1.9 4.4-3.2 1.3-1.3 2.3-2.7 3.2-4.4.7-1.4 1.3-3.1 1.6-4.8.2-1.2.4-3.8.5-5.8V25.3c-.1-2-.2-4.6-.5-5.7-.4-1.8-.9-3.5-1.6-4.9-.8-1.6-1.9-3.1-3.2-4.4C88.4 9 87 8 85.3 7.1c-1.4-.7-3.1-1.3-4.8-1.6-1.2-.2-3.8-.4-5.8-.5H28.4z"></path><path id="WhatsApp-Icon" fill="#fff" d="M66.6 54.4c-.8-.4-4.8-2.3-5.5-2.6-.7-.3-1.3-.4-1.8.4s-2.1 2.6-2.5 3.1c-.5.5-.9.6-1.7.2-.8-.4-3.4-1.2-6.5-3.9-2.4-2.1-4-4.7-4.5-5.5-.5-.8 0-1.2.4-1.6.4-.4.8-.9 1.2-1.4.4-.5.5-.8.8-1.3.3-.5.1-1-.1-1.4-.2-.4-1.8-4.3-2.5-5.9-.7-1.5-1.3-1.3-1.8-1.4h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.7-2.8 6.6 0 3.9 2.9 7.6 3.3 8.2.4.5 5.7 8.5 13.7 11.9 1.9.8 3.4 1.3 4.6 1.7 1.9.6 3.7.5 5.1.3 1.5-.2 4.8-1.9 5.4-3.7.7-1.8.7-3.4.5-3.7-.4-.4-.9-.6-1.7-1M51.3 75c-4.8 0-9.4-1.3-13.5-3.7l-1-.6-10 2.6 2.7-9.7-.6-1c-2.6-4.2-4-9-4-14 0-14.5 11.9-26.3 26.5-26.3C58.3 22.3 65 25 70 30c5 5 7.7 11.6 7.7 18.6C77.7 63.1 65.8 75 51.3 75m22.5-48.8c-6-6-14-9.3-22.5-9.3-17.5 0-31.8 14.2-31.8 31.7 0 5.6 1.5 11 4.2 15.8l-4.5 16.4L36 76.4c4.6 2.5 9.9 3.9 15.2 3.9C68.7 80.3 83 66.1 83 48.6c.1-8.4-3.2-16.4-9.2-22.4"></path></g></g></svg>
              Hubungi Kami
            </button>
          </a>
        </div>
        <!-- <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Read Now</span> -->
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