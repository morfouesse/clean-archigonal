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
</template>
<script setup lang="ts">
import { useHandleQuestionsSurveyForm } from '@/composables/useHandleQuestionsSurveyForm'
import { computed, ref, type Ref } from 'vue'

const { surveyName } = defineProps<{
  surveyName?: string
}>()
const emit = defineEmits<{
  questionCounter: [value: number]
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
const questionCounter = ref<number>(1)

const haveSurveyAndQuestion = computed(() => surveyName && questionName.value)
const { buildSurvey, getSurvey } = useHandleQuestionsSurveyForm()

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
    buildSurvey(
      surveyName!,
      questionName as Ref<string>,
      answerOne as Ref<string>,
      answerTwo as Ref<string>,
      answerThree as Ref<string>,
      answerFour as Ref<string>,
      isGoodAnswerOne as Ref<boolean>,
      isGoodAnswerTwo as Ref<boolean>,
      isGoodAnswerThree as Ref<boolean>,
      isGoodAnswerFour as Ref<boolean>,
    )

    console.log(getSurvey.value)

    emit('questionCounter', questionCounter.value) // pas utile
  }
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
