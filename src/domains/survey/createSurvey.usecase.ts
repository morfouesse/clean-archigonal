import { SurveyRepositoryFetch } from './adapters/survey.repository.fetch'
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
  private readonly _surveyRepository: SurveyRepository = new SurveyRepositoryFetch()
  private readonly createQuestionMapper: CreateQuestionMapper = new CreateQuestionMapper()

  execute(
    createSurveyPresenter: CreateSurveyPresenter,
    surveyName: string,
    questionsAndAnswersVm: CreateQuestionViewModel[],
    lastQuestionAnswersVm: CreateQuestionViewModel,
    event: SubmitEvent,
  ): void {
    event.preventDefault()
    const lastQuestionAnswers: CreateQuestion =
      this.createQuestionMapper.mapCreateQuestionVmToCreateQuestion(lastQuestionAnswersVm)

    if (lastQuestionAnswers.HaveCharacters(surveyName)) {
      const questionsAndAnswers: CreateQuestion[] =
        this.createQuestionMapper.mapCreateQuestionsVmToCreateQuestions(questionsAndAnswersVm)

      const createSurvey = new CreateSurvey(surveyName, questionsAndAnswers)
      createSurvey.addLastQuestion(lastQuestionAnswers)
      this._surveyRepository.createSurvey(createSurvey)
      createSurveyPresenter.presenteSuccess()
    } else {
      createSurveyPresenter.presenteError()
    }
  }
}
