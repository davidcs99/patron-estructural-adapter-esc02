<template>
    <v-container>
      <v-card class="mx-auto pa-6" max-width="650">
        <v-form @submit.prevent="submitForm">
          <v-card-title class="text-h5 mb-6">
            Formulario de Registro Vehicular
          </v-card-title>
  
          <v-text-field
            v-model="formData.vin"
            required
            variant="outlined"
            clearable
            :rules="[v => !!v || 'Campo requerido !!']"
            color="blue darken-1"
          >
            <template v-slot:label>
                {{ "Código Vin" }}
                <span class="red-text"> *</span>
            </template>
          </v-text-field>
          <v-row class=" mt-2">
            <v-col
                 cols="6"
                 sm="4"
                 md="4"
               >
                <v-text-field
                  v-model="formData.ram"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "RAM" }}
                      <span class="red-text"> *</span>
                  </template>
                </v-text-field>
            </v-col>
            <v-col
                 cols="6"
                 sm="4"
                 md="4"
               >
                <v-text-field
                  v-model="formData.placa"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "Placa" }}
                      <span class="red-text"> *</span>
                  </template>
                  
                </v-text-field>
            </v-col>
            <v-col
                 cols="6"
                 sm="4"
                 md="4"
               >
                <v-autocomplete
                  v-model="formData.tipo_vehiculo"
                  :items="tipo"
                  
                  label="Tipo Vehiculo"
                  required
                  variant="outlined"
                  clearable
                   :rules="[v => !!v || 'Campo requerido !!']"
                   color="blue darken-1"
                ></v-autocomplete>
            </v-col>
          </v-row>
          <v-text-field
            v-model="formData.chasis"
            required
            variant="outlined"
            clearable
            :rules="[v => !!v || 'Campo requerido !!']"
            color="blue darken-1"
          >
            <template v-slot:label>
                {{ "Número de Chasis" }}
                <span class="red-text"> *</span>
            </template>
          </v-text-field>

          <v-row class=" mt-2">
            <v-col
                 cols="6"
                 sm="6"
                 md="6"
               >
                <v-autocomplete
                  v-model="formData.marca"
                  :items="carBrands"
                  
                  label="Marca"
                  required
                  variant="outlined"
                  clearable
                   :rules="[v => !!v || 'Campo requerido !!']"
                   color="blue darken-1"
                ></v-autocomplete>
            </v-col>
            <v-col
                 cols="6"
                 sm="6"
                 md="6"
               >
               <v-autocomplete
                 v-model="formData.modelo"
                 :items="carModels"
                 label="Modelo"
                 required
                 variant="outlined"
                 clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
               ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row class=" mt-2">
            <v-col
                 cols="3"
                 sm="3"
                 md="3"
               >
               <v-autocomplete
                 v-model="formData.color"
                 :items="colors"
                 
                 label="Color"
                 required
                 variant="outlined"
                 clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
               ></v-autocomplete>
            </v-col>
            <v-col
                 cols="3"
                 sm="3"
                 md="3"
               >
                <v-text-field
                  v-model="formData.anio"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  type="number"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "Año" }}
                      <span class="red-text"> *</span>
                  </template>
                </v-text-field>
            </v-col>
            <v-col
                 cols="3"
                 sm="3"
                 md="3"
               >
                <v-text-field
                  v-model="formData.numero_ejes"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  type="number"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "Ejes" }}
                      <span class="red-text"> *</span>
                  </template>
                </v-text-field>
            </v-col>
            <v-col
                 cols="3"
                 sm="3"
                 md="3"
               >
                <v-text-field
                  v-model="formData.numero_asientos"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  type="number"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "Asientos" }}
                      <span class="red-text"> *</span>
                  </template>
                  
                </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="5"
              sm="5"
              md="5">
              <v-autocomplete
                 v-model="formData.tipo_combustible"
                 :items="gas"
                 
                 label="Tipo de combustible"
                 required
                 variant="outlined"
                 clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
               ></v-autocomplete>
            </v-col>
             <v-col
                 cols="3"
                 sm="3"
                 md="3"
               >
                <v-text-field
                color="blue darken-1"
                  v-model="formData.potencia"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  type="number"
                >
                  <template v-slot:label>
                      {{ "Potencia" }}
                      <span class="red-text"> *</span>
                  </template>
                </v-text-field>
            </v-col>
            <v-col
                 cols="4"
                 sm="4"
                 md="4"
               >
               <v-autocomplete
               color="blue darken-1"
                 v-model="formData.unidad_potencia"
                 :items="potencia"
                 label="Unidad de Potencia"
                 required
                 variant="outlined"
                 clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
               ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row class=" mt-2">
            <v-col
                 cols="6"
                 sm="6"
                 md="6"
               >
                <v-text-field
                  v-model="formData.tipo_Especifico"
                  required
                  variant="outlined"
                  clearable
                  :rules="[v => !!v || 'Campo requerido !!']"
                  color="blue darken-1"
                >
                  <template v-slot:label>
                      {{ "Tipo Especifico" }}
                      <span class="red-text"> *</span>
                  </template>
                </v-text-field>
            </v-col>
          </v-row>
          <v-btn
            type="submit"
            color="primary"
            block
            style="margin-right: 36px;"
            outlined
            rounded
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card>
      
    </v-container>
  </template>
  
  <script>
import axios from '@/plugins/axios';

  export default {
    data() {
      return {
        formData: {
          vin: '',
          marca: '',
          modelo: '',
          anio: '',
          color: '',
          chasis: '',
          placa: '',
          ram: '',
          numero_ejes: '',
          numero_asientos: '',
          tipo_combustible: '',
          potencia: '',
          unidad_potencia: '',
          tipo_Especifico: ''
        },
        carBrands: [
            'Toyota',
            'Honda',
            'Ford',
            'Chevrolet',
            'BMW',
            'Mercedes-Benz',
            'Audi',
            'Volkswagen',
            'Hyundai',
            'Nissan'
        ],
        colors :[
          'Rojo',
          'Verde',
          'Azul',
          'Amarillo',
          'Cian',
          'Magenta',
          'Negro',
          'Blanco',
          'Naranja',
          'Púrpura',
        ],
        carModels :[
           'Camry',
           'Civic',
           'Mustang',
           'Malibu',
           'A4',
           'Jetta',
           'Elantra',
           'Altima',
        ],
        gas :[
           'Super', 
           'Diesel', 
           'Extra', 
           'Ecopais', 
        ],
        potencia :[
           'HP',
           'kW',
        ],
        tipo:["CAMION", "CAMIONETA", "AUTO"]
      }
    },
    methods: {
      async submitForm() {
        try {
           await axios.post('/vehiculo',  
            {
              vin: this.formData.vin,
              marca: this.formData.marca,
              modelo: this.formData.modelo,
              anio:this.formData.anio,
              color: this.formData.color,
              chasis: this.formData.chasis,
              placa:this.formData.placa,
              ram: this.formData.ram,
              numeroEjes:this.formData.numero_ejes,
              numeroAsientos:this.formData.numero_asientos,
              tipoCombustible: this.formData.tipo_combustible,
              potencia:this.formData.potencia,
              unidadPotencia: this.formData.unidad_potencia,
              tipoEspecifico: this.formData.tipo_Especifico,
              tipoVehiculo: this.formData.tipo_vehiculo
            }
           );
          const response = await axios.get('/vehiculo');
          console.log('Formulario enviado:', this.formData)
           console.log(response.data)
          /* this.dialog = false
          alert("Usuario Guardado exitosamente")
          this.nombre= "",
          this.apellido= "",
          this.usuario= "", */
          this.password= ""
        } catch (error) {
          this.error = 'Error al obtener usuarios: ' + error.message;
        }
      },
    }
  }
  </script>
 <style scoped>
 .red--text {
   color: red; /* Establece el color del texto a rojo */
 }
 </style>