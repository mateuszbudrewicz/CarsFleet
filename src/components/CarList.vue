<template>
  <div class="container">
    <div class="row d-flex justify-content-between home">


      <div class="col-md-4 card text-white bg-secondary mb-3 text-center " v-if="vehicle.book == false" v-for="vehicle in vehicles" :key="vehicle.id"
        style="max-width: 18rem;">
        <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
        <div class="card-body">
          {{vehicle.type}}
          <li class="card-title">{{vehicle.petrol}}</li>
          <li class="card-title">{{vehicle.course}} KM</li>
          <li class="card-title">{{vehicle.price}} PLN</li>
          <button class="btn btn-warning">
            <router-link :to="{ name: 'EditVehicle', params: {vehicle_slug: vehicle.slug} }">
              Edit
            </router-link>
          </button>
          <button class="btn btn-success" @click="bookCar(vehicle)">Book</button>
          <button class="btn" @click="deleteCar(vehicle.id)">Delete</button>
        </div>
      </div>

    <div class="col-md-4 card text-white bg-secondary mb-3 text-center not-allowed" v-if="vehicle.book == true" v-for="vehicle in vehicles" :key="vehicle.id"
        style="max-width: 18rem; opacity: 0.8">
        <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
        <div class="card-body">
          {{vehicle.type}}
          <li class="card-title">{{vehicle.petrol}}</li>
          <li class="card-title">{{vehicle.course}} KM</li>
          <li class="card-title">{{vehicle.price}} PLN</li>
          <p class="book">ZAREZERWOWANY</p>
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
        bookedVehicles: [],
        brand: '',
        model: '',
        type: '',
        petrol: '',
        course: '',
        price: '',
        slug: null,
        book: false,
        id: ''
      }
    },
    methods: {
      deleteCar(id) {
        db.collection('vehicles').doc(id).delete()
          .then(() => {
            this.vehicles = this.vehicles.filter(vehicle => {
              return vehicle.id != id
            })
          })
      },
      bookCar(vehicle){
         db.collection('bookedVehicles').add({
            brand: vehicle.brand,
            model: vehicle.model,
            type: vehicle.type,
            petrol: vehicle.petrol,
            course: vehicle.course,
            price: vehicle.price,
            slug: vehicle.slug,
            book: vehicle.book = true,
            idList: vehicle.id
          })
        db.collection('vehicles').doc(vehicle.id).update({
            book: this.book = true,
          })
            .then(() => {
            this.$router.push({
              name: 'BookedVehicles'
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

<style>
.home{
  margin-bottom: 50px;
}
.book{
  color: red
  
}
.not-allowed {
  cursor: not-allowed;
  }
</style>
