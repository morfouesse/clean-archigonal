<template>
  <Transition>
    <v-col cols="12" v-if="surveyName">
      <v-text-field
        variant="outlined"
        v-model="questionName"
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
            v-model="answerOne"
            label="nom de la première réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="isGoodAnswerOne"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="answerTwo"
            label="nom de la seconde réponse"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="isGoodAnswerTwo"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="answerThree"
            label="nom de la troisième réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="isGoodAnswerThree"></v-checkbox>
        </v-col>
        <v-col cols="10" md="4">
          <v-text-field
            variant="outlined"
            v-model="answerFour"
            label="nom de la quatrième réponse"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox v-model="isGoodAnswerFour"></v-checkbox>
        </v-col>
      </v-row>
    </v-col>
  </Transition>
  <v-col cols="12">
    <p class="red" v-if="!isFormValid">Tout les champs sont obligatoires</p>
  </v-col>
  <v-btn @click="nextQuestion" block variant="tonal">Crée la prochaine question</v-btn>
  <div class="pt-8">
    <v-btn type="submit" @click="createSurvey" color="success" variant="flat"
      >Crée le questionnaire</v-btn
    >
  </div>
</template>
<script setup lang="ts">
import { CreateSurveyPresenterImpl } from '@/domains/survey/adapters/createSurvey.presenter.impl'
import { SurveyRepositoryFetch } from '@/domains/survey/adapters/survey.repository.fetch'
import {
  CreateSurveyUsecase,
  type CreateQuestion,
  type CreateSurvey,
} from '@/domains/survey/createSurvey.usecase'
import router from '@/router'
import { computed, ref } from 'vue'

const { surveyName } = defineProps<{
  surveyName?: string
}>()

const questionName = ref<string>()
const answerOne = ref<string>()
const answerTwo = ref<string>()
const answerThree = ref<string>()
const answerFour = ref<string>()
const isGoodAnswerOne = ref<boolean>()
const isGoodAnswerTwo = ref<boolean>()
const isGoodAnswerThree = ref<boolean>()
const isGoodAnswerFour = ref<boolean>()
const isFormValid = ref<boolean>(true)
const buildSurvey = ref<CreateSurvey>()
const questionsAndAnswers = ref<CreateQuestion[]>([])

const haveSurveyAndQuestion = computed(() => surveyName && questionName.value)

const handleFormValidation = (): void => {
  if (
    surveyName &&
    questionName.value &&
    answerOne.value &&
    answerTwo.value &&
    answerThree.value &&
    answerFour.value
  ) {
    isFormValid.value = true
  } else {
    isFormValid.value = false
  }
}

const nextQuestion = (): void => {
  handleFormValidation()
  if (isFormValid.value) {
    const questionAnswer: CreateQuestion = {
      label: questionName.value!,
      answers: [
        {
          label: answerOne.value!,
          isGoodAnswer: isGoodAnswerOne.value!,
        },
        {
          label: answerTwo.value!,
          isGoodAnswer: isGoodAnswerTwo.value!,
        },
        {
          label: answerThree.value!,
          isGoodAnswer: isGoodAnswerThree.value!,
        },
        {
          label: answerFour.value!,
          isGoodAnswer: isGoodAnswerFour.value!,
        },
      ],
    }
    questionsAndAnswers.value = [...questionsAndAnswers.value, questionAnswer]
    questionName.value = ''
    answerOne.value = ''
    answerTwo.value = ''
    answerThree.value = ''
    answerFour.value = ''
    isGoodAnswerOne.value = false
    isGoodAnswerTwo.value = false
    isGoodAnswerThree.value = false
    isGoodAnswerFour.value = false
  }
}
const createSurvey = async (event: SubmitEvent): Promise<void> => {
  // si que une seul question alors refus du form

  event.preventDefault()

  buildSurvey.value = {
    label: surveyName!,
    questions: questionsAndAnswers.value,
  }
  const lastQuestionAnswers: CreateQuestion = {
    label: questionName.value!,
    answers: [
      {
        label: answerOne.value!,
        isGoodAnswer: isGoodAnswerOne.value!,
      },
      {
        label: answerTwo.value!,
        isGoodAnswer: isGoodAnswerTwo.value!,
      },
      {
        label: answerThree.value!,
        isGoodAnswer: isGoodAnswerThree.value!,
      },
      {
        label: answerFour.value!,
        isGoodAnswer: isGoodAnswerFour.value!,
      },
    ],
  }

  const createSurveyUsecase = new CreateSurveyUsecase(new SurveyRepositoryFetch())
  createSurveyUsecase.execute(
    new CreateSurveyPresenterImpl((vm) => {
      router.push({ name: vm.route })
    }),
    buildSurvey.value,
    lastQuestionAnswers,
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
