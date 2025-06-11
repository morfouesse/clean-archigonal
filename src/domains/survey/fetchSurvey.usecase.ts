import type { FetchSurveyPresenter } from './ports/fetchSurvey.presenter'
import type { SurveyRepository } from './ports/survey.repository'

export interface FetchAnswer {
  label: string
}
export interface FetchQuestion {
  label: string
  answers: FetchAnswer[]
}
export interface FetchSurvey {
  label: string
  questions: FetchQuestion[]
}

export class FetchSurveyUsecase {
  private readonly _surveyRepository: SurveyRepository

  constructor(surveyRepository: SurveyRepository) {
    this._surveyRepository = surveyRepository
  }

  async execute(fetchSurveyPresenter: FetchSurveyPresenter) {
    const surveys = await this._surveyRepository.getSurveys()
    fetchSurveyPresenter.presente(surveys)
  }
}
