<template>
  <v-app>
    <header v-if="!$vuetify.display.xs">
      <NavBar />
    </header>
    <body>
      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </body>
    <footer v-if="$vuetify.display.xs">
      <BottomAppBar />
    </footer>
  </v-app>
</template>
<script setup lang="ts">
import BottomAppBar from './components/footer/BottomAppBar.vue'
import NavBar from './components/navbar/NavBar.vue'
</script>
