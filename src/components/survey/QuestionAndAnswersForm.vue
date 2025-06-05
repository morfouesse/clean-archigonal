<template>
  <Transition>
    <v-col cols="12" v-if="surveyName">
      <v-text-field
        variant="outlined"
        v-model="questionName"
        label="nom de la question"
      ></v-text-field>
    </v-col>
  </Transition>
  <Transition>
    <v-col v-if="haveSurveyAndQuestion">
      <div class="grid">
        <v-text-field
          variant="outlined"
          v-model="answerOne"
          label="nom de la première réponse"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="answerTwo"
          label="nom de la seconde réponse"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="answerThree"
          label="nom de la troisième réponse"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="answerFour"
          label="nom de la quatrième réponse"
        ></v-text-field>
      </div>
    </v-col>
  </Transition>
  <v-col cols="12">
    <p class="red" v-if="!isFormValid">Tout les champs sont obligatoires</p>
  </v-col>
  <v-btn @click="nextQuestion" block variant="tonal">Crée la prochaine question</v-btn>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

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
const isFormValid = ref<boolean>(true)
const questionCounter = ref<number>(1)

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
    emit('questionCounter', questionCounter.value)
  }
}
</script>
<style scoped>
.red {
  color: red;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes de même largeur */
  grid-template-rows: repeat(2, 1fr); /* Deux lignes de même hauteur */
  gap: 10px; /* Espace entre les éléments de la grille */
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr; /* Une seule colonne sur les petits écrans */
    grid-template-rows: repeat(4, auto); /* Quatre lignes de hauteur automatique */
  }
}
</style>
