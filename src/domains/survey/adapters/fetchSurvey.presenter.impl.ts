import type { FetchSurveyPresenter, FetchSurveyViewModel } from '../ports/fetchSurvey.presenter'
import type { FetchSurvey } from '../fetchSurvey.usecase'
import { SurveyState } from './survey.repository.fetch'

export class FetchSurveyPresenterImpl implements FetchSurveyPresenter {
  constructor(private readonly callback: (viewModel: FetchSurveyViewModel[]) => void) {}

  presente(surveys: FetchSurvey[]): void {
    const surveysViewModel: FetchSurveyViewModel[] = surveys
      .filter((survey) => survey.state === SurveyState.IN_PROGRESS)
      // on enlève l'attribut state
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ state, ...survey }) => survey)

    this.callback(surveysViewModel)
  }
}
