export interface CreateAnswerViewModel {
  answerOne: string
  answerTwo: string
  answerThree: string
  answerFour: string
  isGoodAnswerOne: boolean
  isGoodAnswerTwo: boolean
  isGoodAnswerThree: boolean
  isGoodAnswerFour: boolean
}
export interface CreateQuestionViewModel {
  label: string
  answer: CreateAnswerViewModel
}
export interface CreateSurveyViewModel {
  label: string
  questions: CreateQuestionViewModel[]
}
export interface RedirectToHomeViewModel {
  route: string
}

export interface CreateSurveyPresenter {
  presenteSuccess(): void
  presenteError(): void
}
