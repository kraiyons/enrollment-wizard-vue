<template>
    <v-col class="text-center">
        <h1>Random Sample</h1>
        <blockquote class="blockquote">
            Lorem ipsum dolor sit amet
            <footer>
                <small>
                <em>&mdash;Sam Wunimp Ortant</em>
                </small>
            </footer>
        </blockquote>
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