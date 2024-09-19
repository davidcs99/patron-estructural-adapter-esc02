<template>
      <v-container v-if="!showForm">
        <v-card-title class="text-h5 mb-6">
              Lista de Vehiculos Registrados
        </v-card-title>
        <v-card-actions>
          <v-btn
                color="blue darken-1"
                text
                @click="newCar()"
                rounded 
                class="mb-6"
              >
                Registrar Vehiculo 
          </v-btn>
        </v-card-actions>
        <v-text-field
          v-model="search"
          label="Buscar"
          class="mb-4"
        ></v-text-field>

        <v-data-table
          :headers="headers"
          :items="filteredItems"
          :items-per-page="5"
          class="elevation-1"
        >
          <template #item.actions="{ item }">
            <v-btn icon @click="editItem(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-container>
      <v-container v-if="showForm">
        <v-card class="mx-auto pa-6" max-width="650" >
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
                        {{ "Tipo" }}
                        <span class="red-text"> *</span>
                    </template>
                  </v-text-field>
              </v-col>
            </v-row>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="closeForm()"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="submitForm()"
            >
              Enviar
            </v-btn>
          </v-card-actions>
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
          tipo_Especifico: '',
          tipo_vehiculo: ''
        },
        dialog:true,
        headers: [
          { title: 'Código Vin', value: 'vin' },
          { title: 'Marca', value: 'marca' },
          { title: 'Modelo', value: 'modelo' },
          { title: 'Año', value: 'anio' },
          { title: 'Color', value: 'color' },
          { title: 'Chasis', value: 'chasis' },
          { title: 'Placa', value: 'placa' },
          { title: 'RAM', value: 'ram' },
          { title: 'Ejes', value: 'numeroEjes' },
          { title: 'Asientos', value: 'numeroAsientos' },
          { title: 'Combustible', value: 'tipoCombustible' },
          { title: 'Potencia', value: 'potencia' },
          { title: 'Unidad', value: 'unidadPotencia' },
          { title: 'Tipo', value: 'tipoEspecifico' },
          { title: 'Tipo', value: 'tipoVehiculo' },
          { title: 'Acciones', value: 'actions', sortable: false }
        ],
        search: '',
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
        tipo:["CAMION", "CAMIONETA", "AUTO"],
        dataTable:[],
        showForm:false
      }
    },
    computed: {
    filteredItems() {
      if (!this.search) return this.dataTable;
      return this.dataTable.filter(item => {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
    methods: {
      async submitForm() {
        try {
              const costoMatricula= await axios.get(`/vehiculo/matricula?tipoVehiculo=${this.formData.tipo_vehiculo}`);

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
           alert('Su Vehículo se ha registrado con exito, \n'+' El costo de la matricula es '+costoMatricula.data)
           this.showForm=false
           this.clearForm()
           this.getData()
        } catch (error) {
          this.error = 'Error al registrar el vehiculo: ' + error.message;
        }
      },
      async getData() {
        try {
            const grid= await axios.get(`/vehiculo`);
            this.dataTable= grid.data
        } catch (error) {
          this.error = 'Error al registrar el vehiculo: ' + error.message;
        }
      },
      async editItem(item) {
        try {
          this.clearForm()
          this.showForm=true
          this.asignValues(item)
        } catch (error) {
          this.error = 'Error al registrar el vehiculo: ' + error.message;
        }
      },
      async closeForm() {
          this.showForm=false
          this.getData()
      } ,
      async asignValues(data) {
        this.formData.vin = data.vin
        this.formData.marca = data.marca
        this.formData.modelo = data.modelo
        this.formData.anio = data.anio
        this.formData.color = data.color
        this.formData.chasis = data.chasis
        this.formData.placa = data.placa
        this.formData.ram = data.ram
        this.formData.numero_ejes = data.numeroEjes
        this.formData.numero_asientos = data.numeroAsientos
        this.formData.tipo_combustible = data.tipoCombustible
        this.formData.potencia = data.potencia
        this.formData.unidad_potencia = data.unidadPotencia
        this.formData.tipo_Especifico = data.tipoEspecifico
        this.formData.tipo_vehiculo = data.tipoVehiculo
      } ,
      clearForm(){
        this.formData.vin = ''
        this.formData.marca = ''
        this.formData.modelo = ''
        this.formData.anio = ''
        this.formData.color = ''
        this.formData.chasis = ''
        this.formData.placa = ''
        this.formData.ram = ''
        this.formData.numero_ejes = ''
        this.formData.numero_asientos = ''
        this.formData.tipo_combustible = ''
        this.formData.potencia = ''
        this.formData.unidad_potencia = ''
        this.formData.tipo_Especifico = ''
        this.formData.tipo_vehiculo = ''
      },
      newCar(){
        this.clearForm()
        this.showForm=true
      }
    },
    mounted(){
      this.getData()
    }
  }
  </script>
 <style scoped>
 .red--text {
   color: red; 
 }
 </style>