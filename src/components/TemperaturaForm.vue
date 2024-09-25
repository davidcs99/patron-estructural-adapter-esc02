<template lang="">
  <CoreInterfaceV1
    title="Registro de Temperaturas"
    :itemsBreadcrums="itemsBreadcrums"
    :showRequiredFieldsLabel="true"
  > 
  <div>
   <ListTemperaturas
   v-if="true"/>
    
  </div>
</CoreInterfaceV1>

</template>
<script>
import ListTemperaturas from '@/components/ListTemperaturas.vue';
import CoreInterfaceV1 from '@/components/CoreInterfaceV1.vue';


export default {
  components: {
    CoreInterfaceV1,
    ListTemperaturas
    },
    data(){
      return{
        breadcrumsMaster: [
            {
              label: 'Inicio',
              pathLabel: 'Inicio',
              function: () => (window.parent.location = '/'),
              id: 0
            },
            {
              label: 'Registro de Temperatura',
              /* pathLabel: 'technique.register-technique', */
              id: 1
            }
          ]
      }
    },
    computed: {
      itemsBreadcrums() {
        return this.breadcrumsMaster.filter(item => {
          item['disabled'] = item.id == this.stepId;
          if (!item['pathLabel']) {
            item['pathLabel'] = `${this.pathLabelComponent}.${item['label']}`;
          }
          return item.id <= this.stepId;
        });
      }
    },
}
</script>
<style lang="">
  
</style>