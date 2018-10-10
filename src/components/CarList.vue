<template>
    <div class="container">
            <div class="row">
            <div class="col-md-4 card text-white bg-secondary mb-3" v-for="vehicle in vehicles" :key="vehicle.id" style="max-width: 18rem;">
              <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
              <div class="card-body">
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
export default {
    data() {
      return {
        vehicles: [{
            brand: 'Opel',
            model: 'Vectra',
            course: '235000',
            petrol: 'PB/LPG',
            price: '10000',
            id: 1
          },
          {
            brand: 'Lexus',
            model: 'IS',
            course: '70000',
            petrol: 'PB',
            price: '75000',
             id: 2
          },
          {
            brand: 'Renault',
            model: 'Traffic',
            course: '370000',
            petrol: 'Diesel',
            price: '20000',
             id: 3
          }
        ]
      }
    },
    methods: {
        deleteCar(id){
            this.vehicles = this.vehicles.filter(vehicle => {
                return vehicle.id != id
            })
        }
    }
  }
</script>

<style>

</style>
