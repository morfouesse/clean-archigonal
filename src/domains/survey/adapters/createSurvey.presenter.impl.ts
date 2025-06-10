import { Route } from '@/router'
import type { CreateSurveyPresenter } from '../ports/createSurvey.presenter'

interface AddSurveyViewModel {
  route: string
}

export class CreateSurveyPresenterImpl implements CreateSurveyPresenter {
  constructor(private readonly callback: (viewModel: AddSurveyViewModel) => void) {}

  presente(): void {
    this.callback({ route: Route.HOME })
  }
}
