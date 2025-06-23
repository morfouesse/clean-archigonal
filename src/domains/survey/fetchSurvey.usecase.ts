import { type SurveyState } from './adapters/survey.repository.fetch'
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
  state: SurveyState
  questions: FetchQuestion[]
}

export class FetchSurveyUsecase {
  constructor(private readonly _surveyRepository: SurveyRepository) {}

  async execute(fetchSurveyPresenter: FetchSurveyPresenter) {
    const surveys = await this._surveyRepository.getSurveys()
    fetchSurveyPresenter.presente(surveys)
  }
}
