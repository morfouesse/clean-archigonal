<template>
  <form>
    <v-row>
      <v-card max-width="1000" elevation="3" rounded="xl" class="mx-auto pa-4">
        <v-card-title tag="h1" class="h1">Crée ton questionnaire</v-card-title>
        <v-container fluid>
          <v-row dense>
            <v-col>
              <v-text-field
                variant="outlined"
                v-model="surveyName"
                label="nom du questionnaire"
              ></v-text-field>
            </v-col>
            <QuestionAndAnswersForm :surveyName></QuestionAndAnswersForm>
          </v-row>
        </v-container>
      </v-card>
      <v-btn icon="mdi-numeric-1"></v-btn>
    </v-row>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QuestionAndAnswersForm from './QuestionAndAnswersForm.vue'

const surveyName = ref<string>()
</script>
<style scoped>
h1 {
  margin: 0 0 3rem;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
</style>
