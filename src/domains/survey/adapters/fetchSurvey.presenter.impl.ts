import type { FetchSurveyPresenter, FetchSurveyViewModel } from '../ports/fetchSurvey.presenter'
import type { FetchSurvey } from '../fetchSurvey.usecase'

export class FetchSurveyPresenterImpl implements FetchSurveyPresenter {
  constructor(private readonly callback: (viewModel: FetchSurveyViewModel[]) => void) {}

  presente(surveys: FetchSurvey[]): void {
    const surveysViewModel: FetchSurveyViewModel[] = surveys.map((survey) => ({ ...survey }))
    this.callback(surveysViewModel)
  }
}
