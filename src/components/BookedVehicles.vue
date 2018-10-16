<template>
 <div class="container">
    <div class="row d-flex justify-content-between home">
      <div class="col-md-4 card text-white bg-secondary mb-3 text-center " v-for="vehicle in bookedVehicles" :key="vehicle.id"
        style="max-width: 18rem;">
        <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
        <div class="card-body">
          {{vehicle.type}}
          <li class="card-title">{{vehicle.petrol}}</li>
          <li class="card-title">{{vehicle.course}} KM</li>
          <li class="card-title">{{vehicle.price}} PLN</li>
          <button class="btn" @click="deleteCar(vehicle.id)">Cancel reservation</button>
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
      }
      },
       created() {
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

</style>
