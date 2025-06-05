/// <reference types="vite/types/importMeta.d.ts" />

import { createRouter, createWebHistory } from 'vue-router'

export enum Route {
  HOME = 'home',
  ADD_SURVEY = 'addSurvey',
}

export enum Path {
  ADD_SURVEY = '/addSurvey',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Route.HOME,
      component: () => import('../views/SurveyView.vue'),
    },
    {
      path: Path.ADD_SURVEY,
      name: Route.ADD_SURVEY,
      component: () => import('../views/AddSurveyView.vue'),
    },
  ],
})

export default router
