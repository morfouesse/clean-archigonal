<template>
  <Transition>
    <v-col cols="12" v-if="surveyName">
      <v-text-field
        variant="outlined"
        v-model="nextQuestion.label"
        label="nom de la question"
        required
      ></v-text-field>
    </v-col>
  </Transition>
  <Transition>
    <v-col v-if="haveSurveyAndQuestion">
      <p class="pb-4">Cocher la ou les bonnes réponses</p>
      <v-row dense class="grid">
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="nextQuestion.answer.answerOne"
            label="nom de la première réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="nextQuestion.answer.isGoodAnswerOne"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="nextQuestion.answer.answerTwo"
            label="nom de la seconde réponse"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="nextQuestion.answer.isGoodAnswerTwo"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="nextQuestion.answer.answerThree"
            label="nom de la troisième réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="nextQuestion.answer.isGoodAnswerThree"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="nextQuestion.answer.answerFour"
            label="nom de la quatrième réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="nextQuestion.answer.isGoodAnswerFour"></v-checkbox>
        </v-col>
      </v-row>
    </v-col>
  </Transition>
  <v-col cols="12">
    <p class="red" v-if="!isFormValid">Tout les champs sont obligatoires</p>
  </v-col>
  <v-btn @click="handleNextQuestion" block variant="tonal">Crée la prochaine question</v-btn>
  <div class="pt-8">
    <v-btn type="submit" @click="createSurvey" color="success" variant="flat"
      >Crée le questionnaire</v-btn
    >
  </div>
</template>
<script setup lang="ts">
import { CreateQuestionPresenterImpl } from '@/domains/survey/adapters/createQuestion.presenter.impl'
import { CreateSurveyPresenterImpl } from '@/domains/survey/adapters/createSurvey.presenter.impl'
import { SurveyRepositoryFetch } from '@/domains/survey/adapters/survey.repository.fetch'
import { CreateQuestionUsecase } from '@/domains/survey/createQuestion.usecase'
import { CreateSurveyUsecase } from '@/domains/survey/createSurvey.usecase'

import type {
  CreateQuestionViewModel,
  RedirectToHomeViewModel,
} from '@/domains/survey/ports/createSurvey.presenter'
import router from '@/router'
import { computed, ref } from 'vue'

const { surveyName } = defineProps<{
  surveyName: string
}>()

const nextQuestion = ref<CreateQuestionViewModel>({
  label: '',
  answer: {
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    isGoodAnswerOne: false,
    isGoodAnswerTwo: false,
    isGoodAnswerThree: false,
    isGoodAnswerFour: false,
  },
})
const isFormValid = ref(true)
const questionsAndAnswers = ref<CreateQuestionViewModel[]>([])
const haveSurveyAndQuestion = computed(() => surveyName && nextQuestion.value.label)

const handleNextQuestion = (): void => {
  const createQuestionUsecase = new CreateQuestionUsecase()
  createQuestionUsecase.execute(
    new CreateQuestionPresenterImpl(
      (nextQuestionVm, questionsAndAnswersVm, isFormValidVm) => {
        nextQuestion.value = nextQuestionVm
        questionsAndAnswers.value = questionsAndAnswersVm
        isFormValid.value = isFormValidVm
      },
      (isFormValidVm) => {
        isFormValid.value = isFormValidVm
      },
    ),
    surveyName,
    nextQuestion.value,
    questionsAndAnswers.value,
  )
}
const createSurvey = async (event: SubmitEvent): Promise<void> => {
  const createSurveyUsecase = new CreateSurveyUsecase(new SurveyRepositoryFetch())
  createSurveyUsecase.execute(
    new CreateSurveyPresenterImpl(
      (redirectToHomeVm: RedirectToHomeViewModel) => {
        router.push({ name: redirectToHomeVm.route })
      },
      (isFormValidVm: boolean) => {
        isFormValid.value = isFormValidVm
      },
    ),
    surveyName,
    questionsAndAnswers.value,
    nextQuestion.value,
    event,
  )
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
.red {
  color: red;
}

/* voir  apprendre css js*/
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr; /* Une seule colonne sur les petits écrans */
    grid-template-rows: repeat(8, auto) !important; /* Quatre lignes de hauteur automatique */
  }
}
</style>
