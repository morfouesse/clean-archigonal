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

  presente(isFormValid: boolean): void {
    if (isFormValid) {
      this.onSuccess?.({ route: Route.HOME })
    } else {
      this.onError?.(false)
    }
  }
}
