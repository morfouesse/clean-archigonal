import type { CreateAnswer } from '../createSurvey.usecase'

export class CreateQuestion {
  constructor(
    private _label: string,
    private _answers: CreateAnswer[],
  ) {}

  public HaveCharacters(surveyName: string): boolean {
    return surveyName.length > 0 && this.answers.every((answer) => answer.label.length > 0)
  }

  public get label(): string {
    return this._label
  }
  public set label(value: string) {
    this._label = value
  }
  public get answers(): CreateAnswer[] {
    return this._answers
  }
  public set answers(value: CreateAnswer[]) {
    this._answers = value
  }
}
