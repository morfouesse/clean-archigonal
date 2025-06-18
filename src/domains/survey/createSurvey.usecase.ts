import type { CreateQuestion } from './entities/CreateQuestion'
import { CreateSurvey } from './entities/CreateSurvey'
import { CreateQuestionMapper } from './mappers/CreateQuestion.mapper'
import type { CreateQuestionViewModel, CreateSurveyPresenter } from './ports/createSurvey.presenter'
import type { SurveyRepository } from './ports/survey.repository'
export interface CreateAnswer {
  label: string
  isGoodAnswer: boolean
}

export class CreateSurveyUsecase {
  private readonly _surveyRepository: SurveyRepository
  private readonly createQuestionMapper: CreateQuestionMapper = new CreateQuestionMapper()

  constructor(surveyRepository: SurveyRepository) {
    this._surveyRepository = surveyRepository
  }

  execute(
    createSurveyPresenter: CreateSurveyPresenter,
    surveyName: string,
    questionsAndAnswersVm: CreateQuestionViewModel[],
    lastQuestionAnswersVm: CreateQuestionViewModel,
    event: SubmitEvent,
  ): void {
    let isFormValid = true

    const lastQuestionAnswers: CreateQuestion =
      this.createQuestionMapper.mapCreateQuestionVmToCreateQuestion(lastQuestionAnswersVm)

    if (lastQuestionAnswers.formHaveCharacters(surveyName)) {
      event.preventDefault()

      const questionsAndAnswers: CreateQuestion[] =
        this.createQuestionMapper.mapCreateQuestionsVmToCreateQuestions(questionsAndAnswersVm)

      const createSurvey = new CreateSurvey(surveyName, questionsAndAnswers)
      createSurvey.addLastQuestion(lastQuestionAnswers)
      this._surveyRepository.createSurvey(createSurvey)
    } else {
      isFormValid = false
    }

    createSurveyPresenter.presente(isFormValid)
  }
}
