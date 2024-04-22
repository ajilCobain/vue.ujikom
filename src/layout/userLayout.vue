<template>
    <navbar></navbar>
    <RouterView/>
    <Footer></Footer>
</template>

<script setup>
import Footer from "@/components/guest/footer.vue";
import navbar from "../components/guest/navbar.vue"
</script>