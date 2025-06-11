<template>
  <h1>Petit projet de questionnaire en <span class="project">clean archigonale</span></h1>
  <SurveyCard class="mb-md" v-for="(survey, i) in surveys" :survey="survey" :key="i"></SurveyCard>
</template>
<script setup lang="ts">
import SurveyCard from '@/components/survey/SurveyCard.vue'
import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { SurveyRepositoryFetch } from '@/domains/survey/adapters/survey.repository.fetch'
import type { FetchSurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { FetchSurveyUsecase } from '@/domains/survey/fetchSurvey.usecase'
import { onMounted, ref } from 'vue'

const surveys = ref<FetchSurveyViewModel[]>([])

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
<style lang="css" scoped>
h1 {
  line-height: 64px;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
  padding: 96px 32px;
  text-align: center;
}
.project {
  background: linear-gradient(292deg, rgb(82, 206, 99) 50%, rgb(138, 233, 156));
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #00000000;
}
</style>
