import type { CreateQuestion } from './CreateQuestion'

export class CreateSurvey {
  constructor(
    private _label: string,
    private _questions: CreateQuestion[],
  ) {}

  addLastQuestion(lastQuestionAnswers: CreateQuestion) {
    this._questions = [...this._questions, lastQuestionAnswers]
  }
}
