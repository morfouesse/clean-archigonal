import { deepEqual } from '@/services/utils'
import type { CreateSurveyPresenter } from './ports/createSurvey.presenter'
import type { SurveyRepository } from './ports/survey.repository'
export interface CreateAnswer {
  label: string
  isGoodAnswer: boolean
}
export interface CreateQuestion {
  label: string
  answers: CreateAnswer[]
}
export interface CreateSurvey {
  label: string
  questions: CreateQuestion[]
}

export class CreateSurveyUsecase {
  private readonly _surveyRepository: SurveyRepository

  constructor(surveyRepository: SurveyRepository) {
    this._surveyRepository = surveyRepository
  }

  execute(
    createSurveyPresenter: CreateSurveyPresenter,
    createSurvey: CreateSurvey,
    questionsAndAnswers: CreateQuestion[],
    lastQuestionAnswers: CreateQuestion,
  ) {
    if (!deepEqual(questionsAndAnswers[questionsAndAnswers.length - 1], lastQuestionAnswers)) {
      questionsAndAnswers = [...questionsAndAnswers, lastQuestionAnswers]
    }
    createSurvey.questions = questionsAndAnswers
    this._surveyRepository.createSurvey(createSurvey)
    createSurveyPresenter.presente()
  }
}
