<template>
    <div class="container">
            <div class="row">
            <div class="col-md-4 card text-white bg-secondary mb-3" v-for="vehicle in vehicles" :key="vehicle.id" style="max-width: 18rem;">
              <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
              <div class="card-body">
                {{vehicle.type}}
                <li class="card-title">{{vehicle.petrol}}</li>
                <li class="card-title">{{vehicle.course}} KM</li>
                <li class="card-title">{{vehicle.price}} PLN</li>
                <button class="btn" @click="deleteCar(vehicle.id)">Delete</button>
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
        vehicles: []
      }
    },
    methods: {
        deleteCar(id){
            this.vehicles = this.vehicles.filter(vehicle => {
                return vehicle.id != id
            })
        }
    },
    created(){
        db.collection('vehicles').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let vehicle = doc.data();
            vehicle.id = doc.id;
            this.vehicles.push(vehicle);
          });
        });
    }
  }
</script>

<style>

</style>
