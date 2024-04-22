<template>
  <div>
    <Navbar />
  </div>
  <router-view />
  <div id="footer">
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue';
import Navbar from './components/navbar.vue';


export default {
  components: {
    Navbar,
    Footer,
    
}
};
</script>