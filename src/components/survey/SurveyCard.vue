<template>
  <v-card elevation="3" class="mx-auto" width="300">
    <template v-slot:title>
      <span class="title">{{ survey.label }}</span>
    </template>
    <v-list>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="title" title="Voir les questions"></v-list-item>
        </template>

        <v-list-item
          v-for="(question, i) in survey.questions"
          :key="i"
          :title="question.label"
        ></v-list-item>
      </v-list-group>
    </v-list>
    <v-card-actions>
      <v-btn variant="tonal">joué</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { SurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { ref } from 'vue'

const { survey } = defineProps<{
  survey: SurveyViewModel
}>()
</script>
