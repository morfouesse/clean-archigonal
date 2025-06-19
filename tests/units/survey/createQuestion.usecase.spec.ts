import { CreateQuestionPresenterImpl } from '@/domains/survey/adapters/createQuestion.presenter.impl'
import { CreateQuestionUsecase } from '@/domains/survey/createQuestion.usecase'
import type { CreateQuestionViewModel } from '@/domains/survey/ports/createSurvey.presenter'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  createQuestionsVm,
  createQuestionsWithLastQuestionVm,
  createQuestionVm,
  emptyQuestionVm,
  surveyName,
} from './adapters/survey.mock'

let createQuestionUsecase: CreateQuestionUsecase

describe('create question', () => {
  beforeEach(() => {
    createQuestionUsecase = new CreateQuestionUsecase()
  })
  it('should fill question list and create new empty question when all inputs are not empty', () => {
    //GIVEN
    const nextQuestionVmExpected = emptyQuestionVm
    const questionsAndAnswersVmExpected = createQuestionsWithLastQuestionVm

    //WHEN
    createQuestionUsecase.execute(
      new CreateQuestionPresenterImpl(expectation),
      surveyName,
      createQuestionVm,
      createQuestionsVm,
    )

    //THEN
    function expectation(
      nextQuestionVm: CreateQuestionViewModel,
      questionsAndAnswersVm: CreateQuestionViewModel[],
      isFormValidVm: boolean,
    ) {
      expect(nextQuestionVm).toStrictEqual(nextQuestionVmExpected)
      expect(questionsAndAnswersVm).toStrictEqual(questionsAndAnswersVmExpected)
      expect(isFormValidVm).toBe(true)
    }
  })

  it('should send false to the form if one input is empty', () => {
    //GIVEN
    const badCreateQuestionVm = emptyQuestionVm

    //WHEN
    createQuestionUsecase.execute(
      new CreateQuestionPresenterImpl(undefined, expectation),
      surveyName,
      badCreateQuestionVm,
      createQuestionsVm,
    )

    //THEN
    function expectation(isFormValidVm: boolean) {
      expect(isFormValidVm).toBe(false)
    }
  })
})
