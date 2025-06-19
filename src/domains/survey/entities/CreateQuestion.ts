import type { CreateAnswer } from '../createSurvey.usecase'

export class CreateQuestion {
  constructor(
    private readonly _label: string,
    private readonly _answers: CreateAnswer[],
  ) {}

  public HaveCharacters(surveyName: string): boolean {
    return surveyName.length > 0 && this.answers.every((answer) => answer.label.length > 0)
  }

  public get label(): string {
    return this._label
  }

  public get answers(): CreateAnswer[] {
    return this._answers
  }
}
