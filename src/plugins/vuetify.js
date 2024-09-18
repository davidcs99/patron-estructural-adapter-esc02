/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        // Cambia los colores del borde en el tema claro
        /* colors: {
          primary: 'blue', // Color del borde primario
          'v-input-border': 'blue', // Cambia el color del borde de v-text-field
        }, */
        primary: colors.blue.darken4, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
      },
    },
  },
})
