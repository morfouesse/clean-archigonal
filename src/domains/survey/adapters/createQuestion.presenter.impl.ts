import type { CreateQuestion } from '../entities/CreateQuestion'
import { CreateQuestionMapper } from '../mappers/CreateQuestion.mapper'
import type { CreateQuestionPresenter } from '../ports/createQuestion.presenter'
import type { CreateQuestionViewModel } from '../ports/createSurvey.presenter'

export class CreateQuestionPresenterImpl implements CreateQuestionPresenter {
  private readonly createQuestionMapper: CreateQuestionMapper = new CreateQuestionMapper()

  constructor(
    private readonly onSuccess?: (
      nextQuestionVm: CreateQuestionViewModel,
      questionsAndAnswersVm: CreateQuestionViewModel[],
      isFormValidVm: boolean,
    ) => void,
    private readonly onError?: (isFormValidVm: boolean) => void,
  ) {}

  presente(
    nextQuestion: CreateQuestion,
    questionsAndAnswers: CreateQuestion[],
    isFormValid: boolean,
  ): void {
    if (isFormValid) {
      const nextQuestionVm =
        this.createQuestionMapper.mapCreateQuestionToCreateQuestionVm(nextQuestion)

      const questionsAndAnswersVm: CreateQuestionViewModel[] =
        this.createQuestionMapper.mapCreateQuestionsToCreateQuestionsVm(questionsAndAnswers)

      this.onSuccess?.(nextQuestionVm, questionsAndAnswersVm, true)
    } else {
      this.onError?.(false)
    }
  }
}
