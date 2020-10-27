<template>
    <v-col class="text-center">
       <h1>Enrollment Wizard</h1>
      <blockquote class="blockquote">
       Lorem ipsum dolor sit amet
        <footer>
          <small>
            <em>&mdash;Sam Wunimp Ortant</em>
          </small>
        </footer>
      </blockquote>
      <v-btn>
        <nuxt-link to="enroll" class="text-decoration-none">Go to Enrollment Landing Page</nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link to="app" class="text-decoration-none">Go to Admin Panel Layout</nuxt-link>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
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