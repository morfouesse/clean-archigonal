import type { FetchSurveyPresenter, SurveyViewModel } from '../ports/fetchSurvey.presenter'
import type { Survey } from '../ports/survey.repository'

export class FetchSurveyPresenterImpl implements FetchSurveyPresenter {
  constructor(private readonly callback: (viewModel: SurveyViewModel[]) => void) {}
  presente(surveys: Survey[]): void {
    const surveysViewModel: SurveyViewModel[] = surveys.map((survey) => ({ ...survey }))
    this.callback(surveysViewModel)
  }
}
