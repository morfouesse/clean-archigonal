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
    lastQuestionAnswers: CreateQuestion,
  ): void {
    const isNotSameQuestionAnswers = !deepEqual(
      createSurvey.questions[createSurvey.questions.length - 1],
      lastQuestionAnswers,
    )
    if (isNotSameQuestionAnswers) {
      createSurvey.questions = [...createSurvey.questions, lastQuestionAnswers]
    }
    this._surveyRepository.createSurvey(createSurvey)
    createSurveyPresenter.presente()
  }
}
