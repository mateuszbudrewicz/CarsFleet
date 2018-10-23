<template>
  <div class="container">
    <div class="search">
    </div>
    <div class="row d-flex justify-content-between home">
      <div class="col-md-4 card text-white bg-secondary mb-3 text-center " v-if="vehicle.book == false" v-for="vehicle in vehicles"
        :key="vehicle.id" style="max-width: 18rem;">
        <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
        <div class="card-body row">
          <li> {{vehicle.type}}</li>
          <li> Year of production: {{vehicle.year}}</li>
          <li> Petrol: {{vehicle.petrol}} </li>
          <li>Capacity: {{vehicle.capacity}} ccm</li>
          <li> Course: {{vehicle.course}} KM </li>
          <li> Gearbox: {{vehicle.gearbox}}</li>
          <div class="col-md-12">
            <p class="price">{{vehicle.price}} PLN</p>
            <button type="button" class="btn btn-primary col-md-9" data-toggle="modal" data-target="#exampleModalCenter">
              Book
            </button>
            <button class="btn btn-warning col-md-4">
              <router-link :to="{ name: 'EditVehicle', params: {vehicle_slug: vehicle.slug} }">
                Edit
              </router-link>
            </button>
            <button class="btn btn-danger col-md-4" @click="deleteCar(vehicle.id)">Delete</button>
          </div>
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Book {{vehicle.brand}} {{vehicle.model}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Wybierz termin rezerwacji:</p>
                <p>Od: <input type="date" name="bday" v-model="datefrom"></p>
                <p>Do: <input type="date" name="bday" v-model="dateto"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button class="btn btn-success" data-dismiss="modal" @click="bookCar(vehicle)">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 card text-white bg-secondary mb-3 text-center not-allowed" v-if="vehicle.book == true" v-for="vehicle in vehicles"
        :key="vehicle.id" style="max-width: 18rem; opacity: 0.8">
        <div class="card-header">{{vehicle.brand}} {{vehicle.model}}</div>
        <div class="card-body row">
          <li> {{vehicle.type}}</li>
          <li> Year of production: {{vehicle.year}}</li>
          <li> Petrol: {{vehicle.petrol}} </li>
          <li>Capacity: {{vehicle.capacity}} ccm</li>
          <li> Course: {{vehicle.course}} KM </li>
          <li> Gearbox: {{vehicle.gearbox}}</li>
          <div class="col-md-12">
            <p class="price">{{vehicle.price}} PLN</p>
            <p class="book"> Reservation: <br>{{vehicle.dateFrom}} to {{vehicle.dateTo}}</p>
          </div>
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
    methods: {
      deleteCar(id) {
        db.collection('vehicles').doc(id).delete()
          .then(() => {
            this.vehicles = this.vehicles.filter(vehicle => {
              return vehicle.id != id
            })
          })
      },
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

  .not-allowed {
    cursor: not-allowed;
  }

  .modal {
    color: black;
  }

  .btn, {
    margin: 2px;
  }
.card{
  margin: 10px;
}
</style>
