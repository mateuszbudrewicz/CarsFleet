<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navig">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'HomePage' }"><i class="fas fa-home"></i> Home</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'CarList' }"><i class="fas fa-list-ul"></i> Cars fleet</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'BookedVehicles' }"><i class="fas fa-clipboard-check"></i> Booked Cars</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'AddVehicle' }"><i class="fas fa-plus"></i> Add Vehicle </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'About' }"><i class="fas fa-map-marked"></i> Contact</router-link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .navig,
  nav {
    padding: 10px;
    border-radius: 25px;
    background: none !important;

  }

  a {
    color: white;
    transition: 0.5s;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.02);
    transition: 0.7s;
  }

  .navbar-toggler {
    background-color: white;
  }

</style>
