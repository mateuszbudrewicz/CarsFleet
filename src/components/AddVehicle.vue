<template>
  <div class="container">
    <h2>Add Vehicle</h2>
    <div class="input-group">
      <label for="brand">Brand:</label>
      <input type="text" class="form-control" name="brand" v-model="brand">
      <label for="model">Model:</label>
      <input type="text" class="form-control" name="model" v-model="model">
      Type: <select class="form-control" v-model="type">
        <option>Normal</option>
        <option>Minivan</option>
        <option>Motorcycle</option>
      </select>
      Petrol: <select class="form-control" v-model="petrol">
        <option>PB</option>
        <option>PB/LPG</option>
        <option>ON</option>
      </select>
      <label for="course">Course:</label>
      <input type="number" class="form-control" name="course" v-model="course">
      <label for="price">Price:</label>
      <input type="number" class="form-control" name="price" v-model="price">
      <button class="btn" @click="AddVehicle()">Submit</button>
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
        slug: null
      }
    },
    methods: {
        AddVehicle(){
            this.slug = slugify(this.brand + this.model + this.course, {
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
                slug: this.slug
            })
            .then(() => {
                this.$router.push({ name: 'CarList'})
            })
        }
    }
  }

</script>

<style>

</style>
