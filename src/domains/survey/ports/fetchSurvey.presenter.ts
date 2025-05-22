import type { Survey } from './survey.repository'

export interface AnswerViewModel {
  label: string
}
export interface QuestionViewModel {
  label: string
  answers: AnswerViewModel[]
}
export interface SurveyViewModel {
  label: string
  questions: QuestionViewModel[]
}

export interface FetchSurveyPresenter {
  presente(surveys: Survey[])
}
