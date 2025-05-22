import type { FetchSurveyPresenter } from './fetchSurvey.presenter'
import type { SurveyRepository } from './survey.repository'

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
