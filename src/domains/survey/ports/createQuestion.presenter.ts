import type { CreateQuestion } from '../entities/CreateQuestion'

export interface CreateQuestionPresenter {
  presenteSuccess(nextQuestion: CreateQuestion, questionsAndAnswers: CreateQuestion[]): void
  presenteError(): void
}
