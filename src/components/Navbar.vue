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
            <router-link :to="{ name: 'HomePage' }">Home</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'CarList' }">Cars fleet</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'BookedVehicles' }">Booked Cars</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'AddVehicle' }">Add Vehicle </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{ name: 'About' }">About</router-link>
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
.navig, a{
    background-color: rgb(134, 133, 133)!important;
    padding: 10px;
    border-radius: 25px;
    color: rgb(236, 236, 236)!important;
}
</style>
