<template>
    <v-col class="text-center">
      Hello world
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'landing-page',
  mounted() {
    const theme = localStorage.getItem('useDarkTheme')
    if (theme) {
      if (theme == 'true') {
        this.$vuetify.theme.dark = true
      } else this.$vuetify.theme.dark = false
    }
  },
}
</script>