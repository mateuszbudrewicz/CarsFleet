<template>
  <div v-if="vehicle" class="container">
    <div class="home">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Edit {{ vehicle.brand }} {{ vehicle.model }} Vehicle</h1>
        </div>
      </div>
      <div class="col-md-12 home">
        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Brand:
          </div>
          <div class="col-md-6 input-group ">
            <select class="form-control" v-model="vehicle.brand">
              <option v-for="brand in brands" :key="brand.id">{{brand}}</option>
            </select>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Model:
          </div>
          <div class="col-md-6 input-group" v-switch="vehicle.brand">

            <input type="text" class="form-control" name="model" v-model="vehicle.model" v-case="'Other'">

            <select class="form-control" v-model="vehicle.model" v-case="'Audi'">
              <option v-for="audi in audis" :key="audi.id">{{audi}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'BMW'">
              <option v-for="bmw in bmws" :key="bmw.id">{{bmw}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Citroen'">
              <option v-for="citroen in citroens" :key="citroen.id">{{citroen}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Dacia'">
              <option v-for="dacia in dacias" :key="dacia.id">{{dacia}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Fiat'">
              <option v-for="fiat in fiats" :key="fiat.id">{{fiat}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Ford'">
              <option v-for="ford in fords" :key="ford.id">{{ford}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Honda'">
              <option v-for="honda in hondas" :key="honda.id">{{honda}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Hyundai'">
              <option v-for="hyundai in hyundais" :key="hyundai.id">{{hyundai}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Kia'">
              <option v-for="kia in kias" :key="kia.id">{{kia}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Lexus'">
              <option v-for="lexus in lexuss" :key="lexus.id">{{lexus}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Mazda'">
              <option v-for="mazda in mazdas" :key="mazda.id">{{mazda}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Mercedes-Benz'">
              <option v-for="mercedes in mercedess" :key="mercedes.id">{{mercedes}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Nissan'">
              <option v-for="nissan in nissans" :key="nissan.id">{{nissan}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Opel'">
              <option v-for="opel in opels" :key="opel.id">{{opel}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Peugeot'">
              <option v-for="peugeot in peugeots" :key="peugeot.id">{{peugeot}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Polonez'">
              <option v-for="polonez in polonezs" :key="polonez.id">{{polonez}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Renault'">
              <option v-for="renault in renaults" :key="renault.id">{{renault}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Saab'">
              <option v-for="saab in saabs" :key="saab.id">{{saab}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Seat'">
              <option v-for="seat in seats" :key="seat.id">{{seat}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Skoda'">
              <option v-for="skoda in skodas" :key="skoda.id">{{skoda}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Toyota'">
              <option v-for="toyota in toyotas" :key="toyota.id">{{toyota}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Volkswagen'">
              <option v-for="volkswagen in volkswagens" :key="volkswagen.id">{{volkswagen}}</option>
            </select>

            <select class="form-control" v-model="vehicle.model" v-case="'Volvo'">
              <option v-for="volvo in volvos" :key="volvo.id">{{volvo}}</option>
            </select>


          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Year of production:
          </div>
          <div class="col-md-6 input-group ">
            <input type="number" class="form-control" name="year" v-model="vehicle.year">
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Type:
          </div>
          <div class="col-md-6 input-group ">
            <select class="form-control" v-model="vehicle.type">
              <option v-for="type in types" :key="type.id">{{type}}</option>
            </select>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Capacity:
          </div>
          <div class="col-md-6 input-group ">
            <select class="form-control" v-model="vehicle.capacity">
              <option v-for="capacity in capacities" :key="capacity.id">{{capacity}}</option>
            </select>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Petrol:
          </div>
          <div class="col-md-6 input-group ">
            <select class="form-control" v-model="vehicle.petrol">
              <option v-for="petrol in petrols" :key="petrol.id">{{petrol}}</option>
            </select>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-md-2 input-group mb-2">
            Gearbox:
          </div>
          <div class="col-md-6 input-group ">
            <select class="form-control" v-model="vehicle.gearbox">
              <option v-for="gearbox in gearboxs" :key="gearbox.id">{{gearbox}}</option>
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
  </div>
</template>



<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'
  import {
    vSwitch,
    vCase,
    vDefault
  } from 'v-switch-case'

  export default {
    directives: {
      'switch': vSwitch,
      'case': vCase,
      'default': vDefault
    },
    data() {
      return {
        vehicle: null,

        brands: [],
        petrols: [],
        types: [],
        capacities: [],
        gearboxs: [],

        audis: [],
        bmws: [],
        citroens: [],
        dacias: [],
        fiats: [],
        fords: [],
        hondas: [],
        hyundais: [],
        kias: [],
        lexuss: [],
        mazdas: [],
        mercedess: [],
        nissans: [],
        opels: [],
        peugeots: [],
        polonezs: [],
        renaults: [],
        saabs: [],
        seats: [],
        skodas: [],
        toyotas: [],
        volkswagens: [],
        volvos: [],
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
            year: this.vehicle.year,
            petrol: this.vehicle.petrol,
            gearbox: this.vehicle.gearbox,
            capacity: this.vehicle.capacity,
            course: this.vehicle.course,
            price: this.vehicle.price,
            slug: this.vehicle.slug,
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

      db.collection('brands').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let brand = doc.data()
            let tab = brand.brand
            for (let i in tab) {
              this.brands.push(tab[i])
            }
          });
        });

      db.collection('models').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let model = doc.data()
            let tab0 = model.Audi
            let tab1 = model.BMW
            let tab2 = model.Citroen
            let tab3 = model.Dacia
            let tab4 = model.Fiat
            let tab5 = model.Ford
            let tab6 = model.Honda
            let tab7 = model.Hyundai
            let tab8 = model.Kia
            let tab9 = model.Lexus
            let tab10 = model.Mazda
            let tab11 = model.Mercedes
            let tab12 = model.Nissan
            let tab13 = model.Opel
            let tab14 = model.Peugeot
            let tab15 = model.Polonez
            let tab16 = model.Renault
            let tab17 = model.Saab
            let tab18 = model.Seat
            let tab19 = model.Skoda
            let tab20 = model.Toyota
            let tab21 = model.Volkswagen
            let tab22 = model.Volvo



            for (let i in tab0) {
              this.audis.push(tab0[i])
            }
            for (let i in tab1) {
              this.bmws.push(tab1[i])
            }
            for (let i in tab2) {
              this.citroens.push(tab2[i])
            }
            for (let i in tab3) {
              this.dacias.push(tab3[i])
            }
            for (let i in tab4) {
              this.fiats.push(tab4[i])
            }
            for (let i in tab5) {
              this.fords.push(tab5[i])
            }
            for (let i in tab6) {
              this.hondas.push(tab6[i])
            }
            for (let i in tab7) {
              this.hyundais.push(tab7[i])
            }
            for (let i in tab8) {
              this.kias.push(tab8[i])
            }
            for (let i in tab9) {
              this.lexuss.push(tab9[i])
            }
            for (let i in tab10) {
              this.mazdas.push(tab10[i])
            }
            for (let i in tab11) {
              this.mercedess.push(tab11[i])
            }
            for (let i in tab12) {
              this.nissans.push(tab12[i])
            }
            for (let i in tab13) {
              this.opels.push(tab13[i])
            }
            for (let i in tab14) {
              this.peugeots.push(tab14[i])
            }
            for (let i in tab15) {
              this.polonezs.push(tab15[i])
            }
            for (let i in tab16) {
              this.renaults.push(tab16[i])
            }
            for (let i in tab17) {
              this.saabs.push(tab17[i])
            }
            for (let i in tab18) {
              this.seats.push(tab18[i])
            }
            for (let i in tab19) {
              this.skodas.push(tab19[i])
            }
            for (let i in tab20) {
              this.toyotas.push(tab20[i])
            }
            for (let i in tab21) {
              this.volkswagens.push(tab21[i])
            }
            for (let i in tab22) {
              this.volvos.push(tab22[i])
            }

          });
        });


      db.collection('petrols').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let petrol = doc.data()
            let tab = petrol.petrol
            for (let i in tab) {
              this.petrols.push(tab[i])
            }
          })
        })

      db.collection('types').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let type = doc.data()
            let tab = type.type
            for (let i in tab) {
              this.types.push(tab[i])
            }
          })
        })
      db.collection('capacities').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let capacity = doc.data()
            let tab = capacity.capacity
            for (let i in tab) {
              this.capacities.push(tab[i])
            }
          })
        })
      db.collection('gearboxs').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let gearbox = doc.data()
            let tab = gearbox.gearbox
            for (let i in tab) {
              this.gearboxs.push(tab[i])
            }
          })
        })
    }
  }

</script>

<style scoped>
  .container {
    margin-top: 60px;
  }

  .input-group {
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 2px black;
  }

  .form-group {
    margin: 3px;
  }

  .btn {
    margin-top: 10px;
  }

  .input-group {
    margin-top: 5px;
  }

  .home {
    margin-bottom: 50px;
  }

</style>
