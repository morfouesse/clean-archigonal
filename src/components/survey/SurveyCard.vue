<template>
  <v-card class="mx-auto" width="300">
    <v-list v-model:opened="open">
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="survey.label"></v-list-item>
        </template>

        <v-list-item
          v-for="(question, i) in survey.questions"
          :key="i"
          :title="question.label"
        ></v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:actions>
      <v-btn variant="tonal">joué</v-btn>
    </template>
  </v-card>
</template>
<script setup lang="ts">
import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { SurveyRepositoryFetch } from '@/domains/survey/adapters/survey.repository.fetch'
import type { SurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { FetchSurveyUsecase } from '@/domains/survey/ports/fetchSurvey.usecase'
import { onMounted, ref } from 'vue'

const { survey } = defineProps<{
  survey: SurveyViewModel
}>()
const open = ref(['Users'])
const surveys = ref<SurveyViewModel[]>([])

const fetchSurvey = async (): Promise<void> => {
  const fetchSurveyUsecase = new FetchSurveyUsecase(new SurveyRepositoryFetch())
  // callback dans presenter => quand besoin dans le template
  //sinon objet classique avec attribut d'objet
  await fetchSurveyUsecase.execute(
    new FetchSurveyPresenterImpl((viewModel) => {
      surveys.value = viewModel
    }),
  )
}

onMounted(async () => {
  await fetchSurvey()
})
</script>
