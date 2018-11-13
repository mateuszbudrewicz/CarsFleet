<template>
  <div class="container">
    <div class="row d-flex justify-content-start home">
      <div class="col-md-4 card text-white bg-secondary mb-3 text-center " v-for="vehicle in bookedVehicles" :key="vehicle.id"
        style="max-width: 18rem;">
        <div class="backgroundCard">
          <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
          <div class="card-body">
            <li class="text-center">Type: {{vehicle.type}}</li>
            <li> Year of production: {{vehicle.year}}</li>
            <li> Petrol: {{vehicle.petrol}} </li>
            <li>Capacity: {{vehicle.capacity}} ccm</li>
            <li> Course: {{vehicle.course}} KM </li>
            <li> Gearbox: {{vehicle.gearbox}}</li>
            <div class="col-md-12">
              <hr>
              <span class="bookedtext"> Reservation: <br>{{vehicle.dateFrom}}</span>
              <br>
              <span> to {{vehicle.dateTo}}</span>
              <p></p>
              <button class="btn btn-warning" @click="deleteCar(vehicle.id); sendID(vehicle.idList)">Cancel reservation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import db from '@/firebase/init'
  export default {
    data() {
      return {
        vehicles: [],
        bookedVehicles: []
      }
    },
    methods: {
      deleteCar(id) {
        db.collection('bookedVehicles').doc(id).delete()
          .then(() => {
            this.bookedVehicles = this.bookedVehicles.filter(vehicle => {
              return vehicle.id != id
            })
          })
      },
      sendID(id) {
        db.collection('vehicles').doc(id).update({
            book: this.book = false,
          })
          .then(() => {
            this.$router.push({
              name: 'CarList'
            })
          })
      },
    },
    created() {
      db.collection('vehicles').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let vehicle = doc.data();
            vehicle.id = doc.id;
            this.vehicles.push(vehicle);
          });
        });
      db.collection('bookedVehicles').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let vehicle = doc.data();
            vehicle.id = doc.id;
            this.bookedVehicles.push(vehicle);
          });
        });
    }
  }

</script>

<style scoped>
  li {
    list-style-type: none;
  }

  .bookedtext {
    font-weight: bold;
  }

  .backgroundCard {
    display: block;
    position: relative;
    z-index: 1;
  }

  .backgroundCard::after {
    background: url('../assets/img/lock.png');
    background-repeat: no-repeat;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.3;
    z-index: -1;
  }

  .bg-secondary {
    background-color: white !important;
  }

  .card-header {
    color: black;
    font-weight: bold;
  }

  .card-body {
    color: black;
    font-size: 110%;
    font-weight: bold;

  }

  .card {
    margin: 35px;
    -webkit-box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    transition: 0.5s;
  }

  .card:hover {
    transform: scale(1.05);
    transition: 0.7s;
  }

</style>
