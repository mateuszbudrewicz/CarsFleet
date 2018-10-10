<template>
  <div v-if="vehicle" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">Edit {{ vehicle.brand }} {{ vehicle.model }} Vehicle</h1>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Brand:
        </div>
        <div class="col-md-6 input-group ">
          <input type="text" class="form-control" name="brand" v-model="vehicle.brand">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Model:
        </div>
        <div class="col-md-6 input-group ">
          <input type="text" class="form-control" name="model" v-model="vehicle.model">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Type:
        </div>
        <div class="col-md-6 input-group ">
          <select class="form-control" v-model="vehicle.type">
            <option>Normal</option>
            <option>Minivan</option>
            <option>Motorcycle</option>
          </select>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Petrol:
        </div>
        <div class="col-md-6 input-group ">
          <select class="form-control" v-model="vehicle.petrol">
            <option>PB</option>
            <option>PB/LPG</option>
            <option>ON</option>
          </select>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Course:
        </div>
        <div class="col-md-6 input-group ">
          <input type="number" class="form-control" name="course" v-model="vehicle.course">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Price:
        </div>
        <div class="col-md-6 input-group ">
          <input type="number" class="form-control" name="price" v-model="vehicle.price">
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success" @click="EditVehicle()">Edit Vehicle</button>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'

  export default {
    data() {
      return {
        vehicle: null
      }
    },
    methods: {
      EditVehicle() {
        this.vehicle.slug = slugify(this.vehicle.brand + " " + this.vehicle.model, {
          replacement: '-',
          remove: /[$*_+~,()'"!\-;@]/g,
          lower: true
        })
        db.collection('vehicles').doc(this.vehicle.id).update({
            brand: this.vehicle.brand,
            model: this.vehicle.model,
            type: this.vehicle.type,
            petrol: this.vehicle.petrol,
            course: this.vehicle.course,
            price: this.vehicle.price,
            slug: this.vehicle.slug
          })
          .then(() => {
            this.$router.push({
              name: 'CarList'
            })
          }).catch(err => {
            console.log(err)
          })
      }

    },
    created() {
      let ref = db.collection('vehicles').where('slug', '==', this.$route.params.vehicle_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.vehicle = doc.data()
          this.vehicle.id = doc.id
        });
      }).catch((err) => {

      });
    }
  }

</script>

<style scoped>
  .form-group {
    margin: 3px;
  }
  .btn {
    margin-top: 10px;
  }
  .input-group {
    margin-top: 5px;
  }
</style>
