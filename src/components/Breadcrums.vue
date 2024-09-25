<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href || 'javascript:void(0)'"
        :disabled="item.disabled"
        @click="item.function(item.id || null)"
        id="breadcrumbItems"
      >
        {{
          (transformUpperCase
            ? $t(item.pathLabel).toUpperCase()
            : $t(item.pathLabel)) || null
        }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => [
          {
            text: "Inicio",
            disabled: false,
            href: '/'
          }
        ]
      },
      transformUpperCase: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  #breadcrumbItems {
    font-family: 'Roboto', sans-serif;
  }
</style>
