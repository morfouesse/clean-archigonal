<template>
  <form @submit.prevent="createSurvey">
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
      <v-btn @click="goToQuestionByNumber(1)" icon="mdi-numeric-1"></v-btn>
    </v-row>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QuestionAndAnswersForm from './QuestionAndAnswersForm.vue'
import { useHandleQuestionsSurveyForm } from '@/composables/useHandleQuestionsSurveyForm'
import { CreateSurveyUsecase } from '@/domains/survey/ports/createSurvey.usecase'
import { SurveyRepositoryFetch } from '@/domains/survey/adapters/survey.repository.fetch'
import { CreateSurveyPresenterImpl } from '@/domains/survey/adapters/createSurvey.presenter.impl'
import router from '@/router'

const surveyName = ref<string>()
const { getSurvey } = useHandleQuestionsSurveyForm()

const questionCounter = ref<number>(1) // inutiliser
const switchQuestionComponent = ref<number>(1) // inutiliser

const handleQuestions = (count: number): void => {
  questionCounter.value = count
}

const goToQuestionByNumber = (questionNumber: number): void => {
  switchQuestionComponent.value = questionNumber
}

const createSurvey = async (): Promise<void> => {
  // avant tester event avec un objet
  // faire du pinia pour avoir l'objet de l'enfant dans le parent
  console.log('composable ', getSurvey.value)

  const createSurveyUsecase = new CreateSurveyUsecase(new SurveyRepositoryFetch())
  await createSurveyUsecase.execute(
    new CreateSurveyPresenterImpl((vm) => {
      router.push({ name: vm.route })
    }),
    getSurvey.value,
  )
}
</script>
<style scoped>
h1 {
  margin: 0 0 3rem;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: -0.02em;
}
</style>
