import { Route } from '@/router'
import type {
  CreateSurveyPresenter,
  RedirectToHomeViewModel,
} from '../ports/createSurvey.presenter'

export class CreateSurveyPresenterImpl implements CreateSurveyPresenter {
  constructor(
    private readonly onSuccess?: (redirectToHomeVm: RedirectToHomeViewModel) => void,
    private readonly onError?: (isFormValidVm: boolean) => void,
  ) {}

  presenteSuccess(): void {
    this.onSuccess?.({ route: Route.HOME })
  }

  presenteError(): void {
    this.onError?.(false)
  }
}
