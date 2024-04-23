<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-md p-6 max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">Edit Produk</h1>
      <form @submit.prevent="updateProduk">
        <div class="mb-4">
          <label for="nama_produk" class="block text-sm font-medium text-gray-700">Nama Produk</label>
          <input type="text" id="nama_produk" v-model="formData.nama_produk" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea id="description" v-model="formData.description" rows="4" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
        </div>
        <div class="mb-4">
          <label for="gambar" class="block text-sm font-medium text-gray-700">URL Gambar</label>
          <input type="text" id="gambar" v-model="formData.gambar" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
        </div>
        <div class="mb-4">
          <label for="harga" class="block text-sm font-medium text-gray-700">Harga</label>
          <input type="text" id="harga" v-model="formData.harga" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
        </div>
        <div class="mb-4">
          <label for="size_chart" class="block text-sm font-medium text-gray-700">Size Chart</label>
          <select id="size_chart" v-model="formData.size_chart" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="stok" class="block text-sm font-medium text-gray-700">Stok</label>
          <input type="number" id="stok" v-model="formData.stok" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit Produk</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      formData: {
        nama_produk: '',
        description: '',
        gambar: '',
        harga: '',
        size_chart: 'S',
        stok: 0
      }
    };
  },
  computed: {
    ...mapGetters('produk', ['getProductById']),
    produk(){
      return this.getProductById
    }
  },
  methods: {
  ...mapActions('produk', ['fetchProductById', 'updateProduct', 'deleteProduct']), // Perbaiki pemanggilan aksi dengan nama yang benar
  
  async updateProduk() {
    const product = {
      id: this.$route.params.id, // Perbaiki pengambilan ID
      nama_produk: this.formData.nama_produk, // Ambil nilai dari formData
      description: this.formData.description,
      gambar: this.formData.gambar,
      harga: this.formData.harga,
      size_chart: this.formData.size_chart,
      stok: this.formData.stok,
    };
    try {
      const success = await this.$store.dispatch('produk/updateProduct', product); // Perbaiki pemanggilan aksi dengan nama yang benar
      if (success) {
        this.$router.push('/admin/produk')
        alert("Berhasil memperbarui produk");
      }
    } catch(error) {
      alert("Gagal memperbarui produk");
    }
  },
  
  async fetchData() {
  await this.fetchProductById(this.$route.params.id);
  const produk = this.produk.data;
  console.log(produk); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
  if (produk) {
    this.formData = {
      nama_produk: produk.nama_produk,
      description: produk.description,
      gambar: produk.gambar,
      harga: produk.harga,
      size_chart: produk.size_chart,
      stok: produk.stok
    };
  }
}

},

  mounted() {
    this.fetchData(); // Fetch product data when component is mounted
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
