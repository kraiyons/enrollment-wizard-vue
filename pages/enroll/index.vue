<template>
    <v-col class="text-center">
        <h1>Enrollment Wizard</h1>
        <v-row>
            <v-col>
                <v-card
                    elevation="6"
                    shaped
                    tile
                >
                    <v-card-title>Create your own eCommerce site now!</v-card-title>
                    <v-card-subtitle>We're with you on your journey towards infinite possibilities.</v-card-subtitle>
                    <v-card-actions>
                        <v-btn><nuxt-link to="enroll/process" class="text-decoration-none">Start now</nuxt-link></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    elevation="6"
                    shaped
                    tile
                >
                    <v-card-title>Are you curious about what we can offer?</v-card-title>
                    <v-card-subtitle class="text-align-left">Read our FAQ page to know more about the service.</v-card-subtitle>
                    <v-card-actions>
                        <v-btn ><nuxt-link to="enroll/process" class="text-decoration-none">Read now</nuxt-link></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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