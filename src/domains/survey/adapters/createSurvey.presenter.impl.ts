import { Route } from '@/router'
import type { CreateSurveyPresenter } from '../ports/createSurvey.presenter'

export interface AddSurveyViewModel {
  route: string
}

export class CreateSurveyPresenterImpl implements CreateSurveyPresenter {
  constructor(private readonly callback: (vm: AddSurveyViewModel) => void) {}

  presente(): void {
    this.callback({ route: Route.HOME })
  }
}
