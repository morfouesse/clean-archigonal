import { CreateQuestion } from './entities/CreateQuestion'
import { CreateQuestionMapper } from './mappers/CreateQuestion.mapper'
import type { CreateQuestionPresenter } from './ports/createQuestion.presenter'
import type { CreateQuestionViewModel } from './ports/createSurvey.presenter'

export class CreateQuestionUsecase {
  private readonly createQuestionMapper: CreateQuestionMapper = new CreateQuestionMapper()

  execute(
    nextQuestionPresenter: CreateQuestionPresenter,
    surveyName: string,
    nextQuestionVm: CreateQuestionViewModel,
    questionsAndAnswersVm: CreateQuestionViewModel[],
  ): void {
    let isFormValid = true

    const question: CreateQuestion =
      this.createQuestionMapper.mapCreateQuestionVmToCreateQuestion(nextQuestionVm)

    const questionsAndAnswers: CreateQuestion[] =
      this.createQuestionMapper.mapCreateQuestionsVmToCreateQuestions(questionsAndAnswersVm)

    if (question.formHaveCharacters(surveyName)) {
      const questionsAndAnswersWithLastQuestion = [...questionsAndAnswers, question]

      const newEmptyQuestion = new CreateQuestion('', [
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
      ])

      nextQuestionPresenter.presente(
        newEmptyQuestion,
        questionsAndAnswersWithLastQuestion,
        isFormValid,
      )
    } else {
      isFormValid = false
      nextQuestionPresenter.presente(question, questionsAndAnswers, isFormValid)
    }
  }
}
