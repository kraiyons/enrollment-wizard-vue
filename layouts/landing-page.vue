<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <theme-button />
      <v-btn elevation="2" color="primary">
        <nuxt-link to="enroll/process" class="text-decoration-none white--text">
          <v-icon>mdi-auto-fix</v-icon>
          Get Started
        </nuxt-link>
      </v-btn>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>Syion Pte. Ltd.&nbsp;</span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import ThemeButton from '@/components/ThemeButton'
export default {
  name: 'landing-page',
  components: {
    ThemeButton,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        // {
        //   icon: 'mdi-auto-fix',
        //   title: 'Get Started',
        //   to: '/enroll',
        // },
        {
          icon: 'mdi-domain',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-card-account-phone',
          title: 'Contact Us',
          to: '/contact-us',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Webshop',
    }
  },
  method: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('useDarkTheme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
