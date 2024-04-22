<template>
    <div class="flex">
      <sidebar/>
      <div class="admin-container">
        <div class="admin-content">
          <router-view/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from "../admin/sidebar.vue";
  </script>
  
  <style scoped>
  .flex {
    display: flex;
  }

  .sidebar {
    
  }
  .admin-container {
    flex: 6; /* Membuat wadah admin menempati sisa ruang yang tersedia */
    padding-left: 3px;
    padding-top: 40px; /* Menambahkan padding agar konten admin tidak menempel pada side bar */
  }
  
  .admin-content {
    /* Isi styling konten admin di sini */
  }
  </style>