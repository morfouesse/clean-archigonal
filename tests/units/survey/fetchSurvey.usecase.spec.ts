import { FetchSurveyUsecase, type FetchSurvey } from '@/domains/survey/ports/fetchSurvey.usecase'
import { SurveyRepositoryMock } from './adapters/survey.repository.mock'
import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { expect, describe, it } from 'vitest'
import type { FetchSurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'

describe('Survey usecase test', () => {
  it('Get survey list', async () => {
    //GIVEN
    const surveysMock = new SurveyRepositoryMock()
    const fetchSurveyUsecase = new FetchSurveyUsecase(surveysMock)
    // on ne modifie pas l'objet depuis le repository, donc je met le même mock
    const expected = surveysMock.getSurveys()

    //WHEN
    // on ne teste pas le mappage
    await fetchSurveyUsecase.execute(new FetchSurveyPresenterImpl(expectation))
    //THEN
    async function expectation(vm: FetchSurveyViewModel[]) {
      expect(vm).toStrictEqual<FetchSurvey[]>(await expected)
    }
  })
})
