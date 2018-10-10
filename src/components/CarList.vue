<template>
    <div class="container">
            <div class="row">
            <div class="col-md-4 card text-white bg-secondary mb-3" v-for="vehicle in vehicles" :key="vehicle.id" style="max-width: 18rem;">
              <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
              <div class="card-body">
                <li class="card-title">{{vehicle.petrol}}</li>
                <li class="card-title">{{vehicle.course}} KM</li>
                <li class="card-title">{{vehicle.price}} PLN</li>
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
            price: '10000'
          },
          {
            brand: 'Lexus',
            model: 'IS',
            course: '70000',
            petrol: 'PB',
            price: '75000'
          },
          {
            brand: 'Renault',
            model: 'Traffic',
            course: '370000',
            petrol: 'Diesel',
            price: '20000'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
