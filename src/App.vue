<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view />
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
  body {
    color: white;
    background-image: url('https://lh3.googleusercontent.com/hj6Ak-dyrL-IiHFZxNGfxTDTrs-z7p4otp9tOsUblMnLpmtxSLfd-giU8vqM5EkktdHABEtZp1UfybPvZfyJmmONi67urAO4xtFiLonUW2KxTvJpBcJZqIAs3xVHSbUZELsruhJYMCLmY0BFXYq1G2Nbr3wO1jUSA9MMSubM8BjOYqRRtxeayiHPanxjKhYkoeFvaHjNBTiA6PN6LYrr0gaT-4hK5K-zpqSPvN20ENkZwloli8CBkwxYYxe_ZUnwetsdLpr4QRC4bjFFdq4uWn8l6xdn2D33cefl_nDwzpXsdt9VbLzl9duD7ZJXbE0TioHjsLZ0y-eH7MGEhzX3QK-sG7yCs4DPjJaNzfvjahaSQTNFsz75Y-rHrBPy21L2TQoBnBhvZqN4TtCw5hzklWpmeB2YP2j48TqQwJuY4koHjrpRHkygBNtzVXiLlbor3Sh_pSNqEZmEJkB0jZGF8JU8DoqzBFRRxtAV956-L5eJyWcotRWOioJFXJ87QQSKqStvn8-tT48dC0T6mahGvI9j76egOpw5bYE7m_VY7YNHgd2RA185Syu9HVW_c3hKCsZHuAc8Z2G_3op-OrdVswmSul8cbx8mE1DRc43BjR1amXr0F8kQrf-n_lxoDhQpq6kaGZrm8juB6DaZb2EQfzd5=w959-h636-no');
    background-attachment: fixed;
    background-size: cover;
    /* background-image: url('../src/assets/img/garage.png'); */
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
