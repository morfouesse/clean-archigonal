import type { CreateSurvey } from '../createSurvey.usecase'
import type { FetchSurvey } from './fetchSurvey.usecase'

export interface SurveyRepository {
  getSurveys(): Promise<FetchSurvey[]>
  createSurvey(survey: CreateSurvey): void
}
