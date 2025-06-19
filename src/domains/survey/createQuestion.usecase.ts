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
    const nextQuestion: CreateQuestion =
      this.createQuestionMapper.mapCreateQuestionVmToCreateQuestion(nextQuestionVm)

    const questionsAndAnswers: CreateQuestion[] =
      this.createQuestionMapper.mapCreateQuestionsVmToCreateQuestions(questionsAndAnswersVm)

    if (nextQuestion.HaveCharacters(surveyName)) {
      const questionsAndAnswersWithLastQuestion = [...questionsAndAnswers, nextQuestion]

      const newEmptyQuestion = new CreateQuestion('', [
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
        { label: '', isGoodAnswer: false },
      ])

      nextQuestionPresenter.presenteSuccess(newEmptyQuestion, questionsAndAnswersWithLastQuestion)
    }
    nextQuestionPresenter.presenteError()
  }
}
