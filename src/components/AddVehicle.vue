<template>
  <div class="container">
    <h2 class="text-center">Add Vehicle</h2>
    <div class="col-md-12 home">
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Brand:
        </div>
        <div class="col-md-6 input-group ">
          <input type="text" class="form-control" name="brand" v-model="brand">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Model:
        </div>
        <div class="col-md-6 input-group ">
          <input type="text" class="form-control" name="model" v-model="model">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Type:
        </div>
        <div class="col-md-6 input-group ">
          <select class="form-control" v-model="type">
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
          <select class="form-control" v-model="petrol">
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
          <input type="number" class="form-control" name="course" v-model="course">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-2 input-group mb-2">
          Price:
        </div>
        <div class="col-md-6 input-group ">
          <input type="number" class="form-control" name="price" v-model="price">
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success" @click="AddVehicle()">Add new Vehicle</button>
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
        brand: '',
        model: '',
        type: '',
        petrol: '',
        course: '',
        price: '',
        slug: null,
      }
    },
    methods: {
      AddVehicle() {
        this.slug = slugify(this.brand + " " + this.model, {
          replacement: '-',
          remove: /[$*_+~,()'"!\-;@]/g,
          lower: true
        })
        db.collection('vehicles').add({
            brand: this.brand,
            model: this.model,
            type: this.type,
            petrol: this.petrol,
            course: this.course,
            price: this.price,
            slug: this.slug,
          })
          .then(() => {
            this.$router.push({
              name: 'CarList'
            })
          })
      }
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
  .home{
    margin-bottom: 50px;
  }
</style>
