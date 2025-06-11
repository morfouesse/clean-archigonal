export interface CreateAnswerViewModel {
  label: string
  isGoodAnswer: boolean
}
export interface CreateQuestionViewModel {
  label: string
  answers: CreateAnswerViewModel[]
}
export interface CreateSurveyViewModel {
  label: string
  questions: CreateQuestionViewModel[]
}

export interface CreateSurveyPresenter {
  presente()
}
