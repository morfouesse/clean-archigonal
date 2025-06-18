import type { CreateQuestion } from '../entities/CreateQuestion'

export interface CreateQuestionPresenter {
  presente(
    nextQuestion: CreateQuestion,
    questionsAndAnswers: CreateQuestion[],
    isFormValid: boolean,
  )
}
