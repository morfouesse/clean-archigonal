import { Route } from '@/domains/router/survey'
import { CreateSurveyPresenterImpl } from '@/domains/survey/adapters/createSurvey.presenter.impl'
import { CreateSurveyUsecase } from '@/domains/survey/createSurvey.usecase'
import type { RedirectToHomeViewModel } from '@/domains/survey/ports/createSurvey.presenter'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  createQuestionsWithLastQuestionVm,
  emptyQuestionVm,
  lastSurveyQuestionVm,
  surveyName,
} from './adapters/survey.mock'

let createSurveyUsecase: CreateSurveyUsecase

describe('create survey', () => {
  beforeEach(() => {
    createSurveyUsecase = new CreateSurveyUsecase()
  })
  it('should create survey if last question have no empty inputs', () => {
    //GIVEN
    const expected = Route.HOME

    //WHEN
    createSurveyUsecase.execute(
      new CreateSurveyPresenterImpl(expectation),
      surveyName,
      createQuestionsWithLastQuestionVm,
      lastSurveyQuestionVm,
      new SubmitEvent('submit'),
    )

    //THEN
    function expectation(redirectToHomeVm: RedirectToHomeViewModel) {
      expect(redirectToHomeVm.route).toBe(expected)
    }
  })

  it('should send false to the form if one input is empty', () => {
    //GIVEN
    const badCreateQuestionVm = emptyQuestionVm

    //WHEN
    createSurveyUsecase.execute(
      new CreateSurveyPresenterImpl(undefined, expectation),
      surveyName,
      createQuestionsWithLastQuestionVm,
      badCreateQuestionVm,
      new SubmitEvent('submit'),
    )

    //THEN
    function expectation(isFormValidVm: boolean) {
      expect(isFormValidVm).toBe(false)
    }
  })
})
