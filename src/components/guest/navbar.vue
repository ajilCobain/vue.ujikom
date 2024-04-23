<template>
  <nav class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"> 
      <span class="mr-2 text-4xl text-emerald-500"> 
        <img src="../../public/9455208d2a320711e8d5ad6c789fc4d2-removebg-preview.png" alt="" height="30" width="30" style="background-color: black;border-radius:50% ;">
      </span>
      <p class="text-green-700"> Casse Youth</p>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <router-link to="/"><li class="font-bold md:mr-12"><a href="#">Tentang Kami</a></li></router-link>
        <router-link to="/brand">
        <li class="font-bold md:mr-12"><a href="">Produk</a></li></router-link>
        <router-link to="/galeri">
        <li class="font-bold md:mr-12"><a href="#">Galeri</a></li></router-link>
        <router-link to="/kontak">
        <li class="font-bold md:mr-12"><a href="#">Kontak</a></li></router-link>
        <li class="md:mr-12">
          <input type="text" placeholder="Cari..." class="px-3 py-1 border rounded-md" v-model="searchQuery" @input="performSearch">
        </li>
        <li class="md:mr-12">
          <a v-if="searchResults.length > 0" :href="searchResults[0].link">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [ // data produk, galeri, kontak
        { nama: 'Produk', deskripsi: 'Deskripsi produk', link: '/brand' },
        { nama: 'Galeri', deskripsi: 'Deskripsi galeri', link: '/galeri' },
        { nama: 'Kontak', deskripsi: 'Deskripsi kontak', link: '/kontak' },
        { nama: 'tentang kami', deskripsi: 'Deskripsi tentang kami', link: '/' }
      ],
      searchQuery: '', // variabel untuk menyimpan kueri pencarian
      searchResults: [] // variabel untuk menyimpan hasil pencarian
    }
  },
  methods: {
    performSearch() {
      // Logika pencarian
      this.searchResults = this.items.filter(item => {
        // Sesuaikan logika pencarian berdasarkan kebutuhan
        return item.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               item.deskripsi.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
}
</script>
