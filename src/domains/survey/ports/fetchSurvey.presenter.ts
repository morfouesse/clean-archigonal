import type { FetchSurvey } from '../fetchSurvey.usecase'

export interface FetchAnswerViewModel {
  label: string
}
export interface FetchQuestionViewModel {
  label: string
  answers: FetchAnswerViewModel[]
}
export interface FetchSurveyViewModel {
  label: string
  questions: FetchQuestionViewModel[]
}

export interface FetchSurveyPresenter {
  presente(surveys: FetchSurvey[])
}
