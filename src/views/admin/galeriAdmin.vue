<template>
  <div class="-ml-28 w-screen flex justify-center">
    <div class="mt-8 max-w-screen-lg px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Daftar Gambar</p>
        <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah Gambar
        </button>
      </div>

      <!-- Tabel -->
      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">ID</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Gambar</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Dibuat pada</th>
              <th class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Diperbarui pada</th>
            </tr>
          </thead>
          <tbody class="lg:border-gray-300">
            <tr v-for="galeri in getAllGaleri?.data" :key="galeri.id">
              <td class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">{{ galeri.id }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">
                <img :src="galeri.gambar" alt="Gambar Produk" class="h-16 w-16">
              </td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ galeri.createdAt }}</td>
              <td class="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-6">{{ galeri.updatedAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Akhir Tabel -->

      <!-- Modal dan Form Input -->
      <transition name="modal">
        <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg">
            <h2 class="text-lg font-bold mb-4">Tambah Gambar</h2>
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="imageUrl" class="block text-sm font-medium text-gray-700">URL Gambar:</label>
                <input type="text" id="imageUrl" v-model="imageUrl" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
              </div>
              <div class="flex justify-end">
                <button type="submit" class="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">Tambah</button>
                <button @click="showModal = false" class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-md ml-2">Batal</button>
              </div>
            </form>
          </div>
        </div>
      </transition>
      <!-- Akhir Modal dan Form Input -->
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      showModal: false,
      imageUrl: ''
    }
  },
  computed: {
    ...mapGetters('galeri', ['getAllGaleri']),
  },
  mounted() {
    this.$store.dispatch('galeri/fetchGaleri');
  },
  methods: {
    ...mapActions('galeri', ['fetchGaleri', 'createGaleri']),
    handleSubmit() {
      // Handle form submission
      if (this.imageUrl.trim() !== '') {
        this.createGaleri({ gambar: this.imageUrl })
          .then(() => {
            console.log('Gambar berhasil ditambahkan');
            this.imageUrl = ''; // Clear input field
            this.showModal = false; // Close modal
            this.$store.dispatch('galeri/fetchGaleri'); // Fetch galeri data again
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        alert('URL gambar tidak boleh kosong');
      }
    }
  },
};
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
