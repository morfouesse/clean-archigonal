import { deepEqual } from '@/services/utils'
import type { CreateQuestion } from '../createSurvey.usecase'

export class CreateSurvey {
  constructor(
    private _label: string,
    private _questions: CreateQuestion[],
  ) {}

  public get questions(): CreateQuestion[] {
    return this._questions
  }
  public set questions(value: CreateQuestion[]) {
    this._questions = value
  }
  public get label(): string {
    return this._label
  }
  public set label(value: string) {
    this._label = value
  }

  addLastQuestion(lastQuestionAnswers: CreateQuestion) {
    const isNotSameQuestionAnswers = !deepEqual(
      this._questions[this._questions.length - 1],
      lastQuestionAnswers,
    )
    if (isNotSameQuestionAnswers) {
      this._questions = [...this._questions, lastQuestionAnswers]
    }
  }
}
