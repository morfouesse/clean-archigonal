<template>
  <form>
    <v-card max-width="1000" elevation="3" rounded="xl" class="mx-auto pa-4">
      <v-card-title tag="h1" class="h1">Crée ton questionnaire</v-card-title>
      <v-container fluid>
        <v-row dense>
          <v-col cols="8">
            <v-text-field
              variant="outlined"
              v-model="surveyName"
              label="nom du questionnaire"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-number-input
              :reverse="false"
              controlVariant="split"
              label="nombre de questions"
              :hideInput="false"
              :inset="false"
              variant="outlined"
            ></v-number-input>
          </v-col>

          <QuestionAndAnswersForm
            @question-counter="handleQuestions"
            :surveyName
          ></QuestionAndAnswersForm>

          <div class="pt-8">
            <v-btn type="submit" color="success" variant="flat">Crée le questionnaire</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QuestionAndAnswersForm from './QuestionAndAnswersForm.vue'

const surveyName = ref<string>()
const questionCounter = ref<number>(1)

const handleQuestions = (count: number): void => {
  questionCounter.value = count
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h1 {
  margin: 0 0 3rem;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
</style>
