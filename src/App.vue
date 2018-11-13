<template>
  <div id="app">
    <Navbar />
       <transition name="fade">
    <router-view/>
       </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body{
  color: white;
  background-image: url('../src/assets/img/garage.jpg');
  background-attachment: fixed;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
