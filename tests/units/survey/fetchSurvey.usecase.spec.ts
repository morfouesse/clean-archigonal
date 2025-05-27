import { FetchSurveyUsecase } from '@/domains/survey/ports/fetchSurvey.usecase'
import { SurveyRepositoryMock } from './adapters/survey.repository.mock'
import type { Survey } from '@/domains/survey/ports/survey.repository'
import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { expect, describe, it } from 'vitest'
import type { SurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'

describe('Survey usecase test', () => {
  it('Get survey list', async () => {
    //GIVEN
    const surveysMock = new SurveyRepositoryMock()
    const fetchSurveyUsecase = new FetchSurveyUsecase(surveysMock)

    //WHEN
    // on utilise l'impl de FetchSurveyPresenter car on ne fait que du mappage,
    // un peu comme mapstuct, on ne le mock pas et on ne le testera pas unitairement
    await fetchSurveyUsecase.execute(new FetchSurveyPresenterImpl(expectation))
    //THEN
    async function expectation(vm: SurveyViewModel[]) {
      // on ne modifie pas l'objet depuis le repository, donc je met le même mock
      expect(vm).toStrictEqual<Survey[]>(await surveysMock.getSurveys())
    }
  })
})
