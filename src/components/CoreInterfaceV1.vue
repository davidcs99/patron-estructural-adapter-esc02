<template>
  <v-container class="pa-5" fluid>
    <v-card elevation="10" class="pa-5">
      <v-card-title class="d-inline-block">
        <v-row>
          <Breadcrums
            v-if="true"
            :transformUpperCase="transformUpperCaseBreadcrums"
            :items="itemsBreadcrums"
          ></Breadcrums>
        </v-row>
        <v-row class="pl-6">
          <v-tooltip bottom v-if="showButtomBack">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                
                small
                icon
                @click="goBack()"
                color="primary"
                :class="showButtomBack && 'mr-4'"
              >
                <v-icon   small>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <span>Regresar</span>
          </v-tooltip>
          <TitleH1 :text="title" :class="showButtomBack && 'mt-1'" />
        </v-row>
        <v-row
          v-if="showRequiredFieldsLabel"
          :class="showButtomBack ? 'pl-15' : 'pl-1'"
        >
          <span id="requiredFieldSpan" class="ml-5">
            ({{ '*'}})
            {{ 'Campos requeridos' }}
          </span>
        </v-row>
      </v-card-title>
      <v-card-text class="mt-10">
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import Breadcrums from '@/components/Breadcrums.vue';
  
  import TitleH1 from '@/components/TitleH1.vue';

  export default {
    name: 'CoreInterfaceV1',
    components: {
      Breadcrums,
      TitleH1
    },
    data(){
/*       itemsBreadcrums: [
          {
            label: 'home',
            pathLabel: 'commons.labels.home',
            function: () => (window.parent.location = '/'),
            id: 0
          },
          {
            label: 'register-technique',
            pathLabel: 'technique.register-technique',
            id: 1
          }
        ] */
    },
    props: {
      showBreadcrums: {
        type: Boolean,
        default: true
      },
      transformUpperCaseBreadcrums: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      showButtomBack: {
        type: Boolean,
        default: true
      },
      itemsBreadcrums: {
        type: Array,
        default: () => []
      },
      showRequiredFieldsLabel: {
        type: Boolean,
        default: false
      },
      callBackFunctionBackButton: {
        type: Function,
        default: null
      }
    },
    methods: {
      goBack() {
        let itemIdDisabled = this.itemsBreadcrums.find(
          element => element.disabled === true
        );
        let stepId = (itemIdDisabled?.id ?? 0) - (itemIdDisabled?.id ? 1 : 0);
        if (stepId) {
          this.$emit('returnStep', stepId);
        } else {
          if (this.callBackFunctionBackButton) {
            this.callBackFunctionBackButton();
          } else {
            window.parent.location = '/';
          }
        }
      }
    }
  };
</script>

<style type="text/css" scoped>
  #requiredFieldSpan {
    color: red;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
</style>
