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
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: Route.HOME,
      meta: {
        title: 'Accueil - Clean archigonale',
      },
      component: () => import('../views/SurveyView.vue'),
    },
    {
      path: Path.ADD_SURVEY,
      name: Route.ADD_SURVEY,
      meta: {
        title: 'Crée un questionnaire - Clean archigonale',
      },
      component: () => import('../views/AddSurveyView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const { title } = to.meta
  const defaultTitle = 'Clean archigonale'

  document.title = (title as string) || defaultTitle
  document.querySelector('head meta[name="title"]')
})

export default router
