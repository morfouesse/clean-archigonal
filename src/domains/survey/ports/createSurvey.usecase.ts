import type { CreateSurveyPresenter } from './createSurvey.presenter'
import type { SurveyRepository } from './survey.repository'
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

  execute(createSurveyPresenter: CreateSurveyPresenter, createSurvey: CreateSurvey) {
    this._surveyRepository.createSurvey(createSurvey)
    createSurveyPresenter.presente()
  }
}
