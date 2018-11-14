<template>
  <div class="container">
    <div class="row navi">
      <div class="col-md-2">
      </div>
      <div class="col-md-6 col-sm-6  btn-group d-flex justify-content-center" role="group">
        <i class="fas fa-clipboard-check" @click="show(vehicles)"> Show available cars</i>
        <i class="fas fa-receipt" @click="showAll()"> The whole fleet</i>

      </div>
      <div class="col-md-4 col-sm-12">
        <input class="form-control col-sm-6" type="text" placeholder="Search car" aria-label="Search car" v-model="searchCar">
      </div>
    </div>

    <div class="row d-flex justify-content-start home">
      <CarBooked v-for="vehicle in filteredCars" class="col-md-4 card text-white bg-secondary mb-3 text-center bookedCar"
        :vehicle="vehicle" v-if="vehicle.book == true" :key="vehicle.id" style="max-width: 18rem; opacity: 0.8"></CarBooked>
      <Car v-for="vehicle in filteredCars" class="col-md-4 card text-white bg-secondary mb-3 text-center" :vehicle="vehicle"
        v-if="vehicle.book == false" :key="vehicle.id" style="max-width: 18rem">
      </Car>
    </div>
  </div>

</template>

<script>
  import db from '@/firebase/init'
  import Car from '@/components/Car'
  import CarBooked from '@/components/CarBooked'


  export default {
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
        dateto: ''
      }
    },
    components: {
      Car,
      CarBooked,
    },
    computed: {
      filteredCars() {
        return this.vehicles.filter((vehicle) => {
          return vehicle.brand.toLowerCase().match(this.searchCar.toLowerCase()) || vehicle.model.toLowerCase().match(
            this.searchCar.toLowerCase())
        })
      }
    },
    methods: {
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
      show(vehicles) {
        let arr = []
        for (let i in this.vehicles) {
          if (this.vehicles[i].book == false) {
            arr.push(this.vehicles[i])
          }
        }
        this.availableCars = arr;
        this.vehicles = this.availableCars
      },
      showAll() {
        location.reload()
      }
    },
    mounted() {
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fa-clipboard-check,
  .fa-receipt {
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .navi {
    margin: 4px;
  }

  .home {
    margin-bottom: 50px;
  }

  .price {
    font-size: 120%;
    font-weight: bold;
  }

  .book {
    color: red;
    font-weight: bold
  }

  .modal {
    color: black;
  }

  .btn,
    {
    margin: 2px;
  }

  .bookedCar {
    cursor: not-allowed;
  }

  .card {
    margin: 35px;
    background-image: url('https://lh3.googleusercontent.com/VKI8NDmfuuc2o34LEp44aT5w2Mggl8uQ2pSdT4nbW4NmB2SMIlc_WhdajtFgEnluWlF8ivx08wvbfUgWXyfyjYG5mUOaPuQh0JxnhlfmlpChvmghABjz4SY8jcb4WGTpc1pcBUehifA9CJ_d2cnWVyDtjYTr_q_pmZj7ymVgCwV9sp1cW81w-40nhpoNLz2vVOwYYHdrBmZyGkqc3F-fgmrG2KNwwXhS077MFwM4QWR3_Y25CN51ZmoYPF6R3kReTLXKtgh9Eh7K5qn9xE1t7ZZfTxqQquS-XKK-apGdxgGQVu32ITFBst74tSKgjnslnMz896-1y_tdnek3gWnz5nHVKblwBweg6tMq7sxld6hmxmsBcNx1OTYkUWnVNA3P_wqmx5OubT5VjweXZBVw7pSvoY5Y-F5ohYOGhNqVC2s0XVtZctVIQ7xd-fYlJj6YShet4pHW_SXAcpjhdZbE6Eugr_0uWTaizCNKqvhERJSUB4wh6_DC0NfKZMtVOw_U5NGGQJqEAMG5gjPE1h71YNGKdZw8_-IXadPt57RZqe9RzKoqKBBPxRZcLJFx6RzzeJUZ2abKcqa3uWv-D3GIdghn1PWeAAcR0JjQIvZpoAetLWv5afhfCP2e7bTQFZKuA2ylZRJPRf3nqI-rYwmghX1f=w666-h617-no');
    /* background-image: url('../assets/img/speed.png'); */
    -webkit-box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
    background-color: rgb(91, 96, 14, 0.8) !important;
    transition: 0.5s;

  }

  .card:hover {
    transform: scale(1.05);
    transition: 0.7s;
  }

  input {
    opacity: 0.7;
  }

</style>
