<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-btn href="/">Clean Archigonale</v-btn>
    </template>
    <template v-slot:append>
      <v-btn @click="goToCreateSurvey">Crée ton questionnaire</v-btn>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
import router, { Path } from '@/router'

const goToCreateSurvey = (): void => {
  router.push(Path.ADD_SURVEY)
}
</script>
