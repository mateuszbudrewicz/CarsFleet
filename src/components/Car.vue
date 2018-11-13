<template>
  <div class="container">
    <div class="card-header">{{vehicle.brand}} {{vehicle.model}}
      <router-link tag="span" :to="{ name: 'EditVehicle', params: {vehicle_slug: vehicle.slug} }"><i class="fas fa-pencil-alt col-md-1"></i>
      </router-link>
      <i class="far fa-trash-alt col-md-1" @click="deleteCar(vehicle.id)"></i>
    </div>
    <div class="card-body">
      <li>Type: {{vehicle.type}}</li>
      <li> Year of production: {{vehicle.year}}</li>
      <li class="textInCard"> Petrol: {{vehicle.petrol}} </li>
      <li class="textInCard">Capacity: {{vehicle.capacity}} ccm</li>
      <li> Course: {{vehicle.course}} KM </li>
      <li> Gearbox: {{vehicle.gearbox}}</li>
      <p class="price">{{vehicle.price}} PLN / Day</p>
      <i :class="!showEdit ? 'fas fa-arrow-circle-down' : 'fas fa-arrow-circle-up'" @click="showEdit = !showEdit"></i>
      <transition name="fade" mode="out-in">
        <div class="col-md-12 text-center" v-if="showEdit">
          <hr>
          <p>Date of reservation:</p>
          <p class="col-md-12">Start: <input class="form-control" type="date" name="bday" v-model="datefrom"></p>
          <p class="col-md-12">End: <input class="form-control" type="date" name="bday" v-model="dateto"></p>
          <p></p>
          <i class="fas fa-calendar-plus mb-3 " @click="bookCar(vehicle)"> Book this car</i>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
  import db from '@/firebase/init'


  export default {
    props: ['vehicle'],
    data() {
      return {
        vehicles: [],
        bookedVehicles: [],
        availableCars: [],
        searchCar: '',
        brand: '',
        model: '',
        year: '',
        type: '',
        capacity: '',
        petrol: '',
        gearbox: '',
        course: '',
        price: '',
        slug: null,
        book: false,
        id: '',
        datefrom: '',
        dateto: '',
        showEdit: false
      }
    },
    methods: {
      deleteCar(id) {
        db.collection('vehicles').doc(id).delete()
          .then(() => {
            this.vehicles = this.vehicles.filter(vehicle => {
              return vehicle.id != id
            })
            location.reload()
          })
      },
      bookCar(vehicle) {
        db.collection('bookedVehicles').add({
          brand: vehicle.brand,
          model: vehicle.model,
          type: vehicle.type,
          year: vehicle.year,
          capacity: vehicle.capacity,
          petrol: vehicle.petrol,
          gearbox: vehicle.gearbox,
          course: vehicle.course,
          price: vehicle.price,
          slug: vehicle.slug,
          book: vehicle.book = true,
          idList: vehicle.id,
          dateFrom: this.datefrom,
          dateTo: this.dateto
        })
        db.collection('vehicles').doc(vehicle.id).update({
            book: this.book = true,
            dateFrom: this.datefrom,
            dateTo: this.dateto
          })
          .then(() => {
            this.$router.push({
              name: 'BookedVehicles'
            })
          })
      },

    }
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

  .navi {
    margin: 4px;
  }

  .far,
  .fas {
    cursor: pointer;
  }

  .fa-arrow-circle-down,
  .fa-arrow-circle-up {
    font-size: 35px;
  }

  .fa-calendar-plus {
    font-size: 22px;
  }

  input {
    opacity: 0.7;
    color: black;
  }

  .home {
    margin-bottom: 50px;
  }

  .card-header {
    font-size: 115%;
  }

  .card-body {
    font-size: 105%;
  }

  .price {
    font-size: 120%;
    font-weight: bold;
  }

  .textInCard {
    font-weight: bold;
  }

  .btn,
    {
    margin: 2px;
  }

</style>
