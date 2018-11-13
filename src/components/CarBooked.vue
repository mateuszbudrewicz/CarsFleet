<template>
  <div class="container ">
    <div class="card-header">{{this.vehicle.brand}} {{vehicle.model}}</div>
    <div class="card-body">
      <li>Type: {{vehicle.type}}</li>
      <li> Year of production: {{vehicle.year}}</li>
      <li> Petrol: {{vehicle.petrol}} </li>
      <li>Capacity: {{vehicle.capacity}} ccm</li>
      <li> Course: {{vehicle.course}} KM </li>
      <li> Gearbox: {{vehicle.gearbox}}</li>
      <div class="col-md-12">
        <br>
        <p class="price">{{vehicle.price}} PLN / Day</p>
        <hr>
        <span class="book"> Reservation: <br>{{vehicle.dateFrom}}</span>
        <br>
        <span class="book"> to {{vehicle.dateTo}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vehicle'],
    data() {
      return {

      }
    },
  }

</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  li {
    list-style-type: none;
  }

  .card-header {
    font-size: 120%;
  }

  .card-body {
    font-size: 105%;
  }

  .price {
    font-size: 120%;
    font-weight: bold;
  }

  .book {
    color: rgba(221, 229, 103);
    font-weight: bold
  }

  .modal {
    color: black;
  }

  .btn,
    {
    margin: 2px;
  }

</style>
