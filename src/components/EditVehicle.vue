<template>
    <div v-if="vehicle" class="container">
        <div class="row">
            <div class="col-md-12">
<h1>Edit  {{ vehicle.brand }} {{ vehicle.model }} Vehicle</h1>
            </div>
        </div>
        
   <div class="row">
            <div class="col-md-12">
                <div class="input-group">
      <label for="brand">Brand:</label>
      <input type="text" class="form-control" name="brand" v-model="vehicle.brand">
      <label for="model">Model:</label>
      <input type="text" class="form-control" name="model" v-model="vehicle.model">
      Type: <select class="form-control" v-model="vehicle.type">
        <option>Normal</option>
        <option>Minivan</option>
        <option>Motorcycle</option>
      </select>
      Petrol: <select class="form-control" v-model="vehicle.petrol">
        <option>PB</option>
        <option>PB/LPG</option>
        <option>ON</option>
      </select>
      <label for="course">Course:</label>
      <input type="number" class="form-control" name="course" v-model="vehicle.course">
      <label for="price">Price:</label>
      <input type="number" class="form-control" name="price" v-model="vehicle.price">
      <button class="btn" @click="EditVehicle()">Edit</button>
    </div> 
            </div>
        </div>
          
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
data(){
    return{
        vehicle: null
    }
},
    methods: {
        EditVehicle(){
            console.log("edit", this.vehicle.brand, this.vehicle.model, this.vehicle.type, this.vehicle.petrol, this.vehicle.course, this.vehicle.price )
        this.vehicle.slug = slugify( this.vehicle.brand + " " + this.vehicle.model, {
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
                this.$router.push({ name: 'CarList'})
            }).catch(err => {
                console.log(err)
            })
        }
        
    },
created(){
    let ref = db.collection('vehicles').where('slug', '==', this.$route.params.vehicle_slug)
    ref.get().then( snapshot => {
        snapshot.forEach(doc => {
            this.vehicle = doc.data()
            this.vehicle.id = doc.id
        });
    }).catch((err) => {
        
    });
}
}
</script>

<style>

</style>
