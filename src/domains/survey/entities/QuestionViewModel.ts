//a supprimer
export class QuestionViewModels {
  constructor(
    private _questionName: string,
    private _answerOne: string,
    private _answerTwo: string,
    private _answerThree: string,
    private _answerFour: string,
    private _isGoodAnswerOne: boolean,
    private _isGoodAnswerTwo: boolean,
    private _isGoodAnswerThree: boolean,
    private _isGoodAnswerFour: boolean,
  ) {}
  public formHaveCharacters(surveyName: string): boolean {
    return (
      surveyName.length > 0 &&
      this.questionName.length > 0 &&
      this.answerOne.length > 0 &&
      this.answerTwo.length > 0 &&
      this.answerThree.length > 0 &&
      this.answerFour.length > 0
    )
  }

  public resetForNextQuestion() {
    this.questionName = ''
    this.answerOne = ''
    this.answerTwo = ''
    this.answerThree = ''
    this.answerFour = ''
    this.isGoodAnswerOne = false
    this.isGoodAnswerTwo = false
    this.isGoodAnswerThree = false
    this.isGoodAnswerFour = false
  }
  public get isGoodAnswerFour(): boolean {
    return this._isGoodAnswerFour
  }
  public set isGoodAnswerFour(value: boolean) {
    this._isGoodAnswerFour = value
  }
  public get isGoodAnswerThree(): boolean {
    return this._isGoodAnswerThree
  }
  public set isGoodAnswerThree(value: boolean) {
    this._isGoodAnswerThree = value
  }
  public get isGoodAnswerTwo(): boolean {
    return this._isGoodAnswerTwo
  }
  public set isGoodAnswerTwo(value: boolean) {
    this._isGoodAnswerTwo = value
  }
  public get isGoodAnswerOne(): boolean {
    return this._isGoodAnswerOne
  }
  public set isGoodAnswerOne(value: boolean) {
    this._isGoodAnswerOne = value
  }
  public get answerFour(): string {
    return this._answerFour
  }
  public set answerFour(value: string) {
    this._answerFour = value
  }
  public get answerThree(): string {
    return this._answerThree
  }
  public set answerThree(value: string) {
    this._answerThree = value
  }
  public get answerTwo(): string {
    return this._answerTwo
  }
  public set answerTwo(value: string) {
    this._answerTwo = value
  }
  public get answerOne(): string {
    return this._answerOne
  }
  public set answerOne(value: string) {
    this._answerOne = value
  }
  public get questionName(): string {
    return this._questionName
  }
  public set questionName(value: string) {
    this._questionName = value
  }
}
