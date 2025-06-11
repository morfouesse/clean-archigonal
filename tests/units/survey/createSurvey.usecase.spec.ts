import {
  CreateSurveyPresenterImpl,
  type AddSurveyViewModel,
} from '@/domains/survey/adapters/createSurvey.presenter.impl'
import { CreateSurveyUsecase } from '@/domains/survey/createSurvey.usecase'
import { Route } from '@/router'
import { expect, it, vi } from 'vitest'
import {
  createSurvey,
  lastQuestionAnswers,
  SurveyRepositoryMock,
} from './adapters/survey.repository.mock'

vi.mock('@/services/utils', () => ({
  deepEqual: vi.fn(() => false),
}))

it('Create survey', () => {
  //GIVEN
  const surveyMock = new SurveyRepositoryMock()
  const createSurveyUsecase = new CreateSurveyUsecase(surveyMock)
  const expected = Route.HOME

  //WHEN
  createSurveyUsecase.execute(
    new CreateSurveyPresenterImpl(expectation),
    createSurvey,
    lastQuestionAnswers,
  )

  //THEN
  function expectation(vm: AddSurveyViewModel) {
    expect(vm.route).toBe(expected)
  }
})
