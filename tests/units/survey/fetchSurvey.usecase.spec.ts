import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { FetchSurveyUsecase } from '@/domains/survey/fetchSurvey.usecase'
import type { FetchSurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { expect, it } from 'vitest'
import { SurveyRepositoryMock } from './adapters/survey.repository.mock'

it('Get survey list', async () => {
  //GIVEN
  const surveysMock = new SurveyRepositoryMock()
  const fetchSurveyUsecase = new FetchSurveyUsecase(surveysMock)
  const expected: FetchSurveyViewModel[] = [
    {
      label: 'les tests',
      questions: [
        {
          label: 'Faut-il faire des tests ?',
          answers: [
            {
              label: 'OUIIIII',
            },
            {
              label: 'heuuu, connait pas',
            },
            {
              label: 'test ?',
            },
            {
              label: '...',
            },
          ],
        },
        {
          label: 'Quelles tests en priorité ?',
          answers: [
            {
              label: 'les tests unitaires',
            },
            {
              label: 'les tests E2E',
            },
            {
              label: 'les tests de composants',
            },
            {
              label: "les tests d'accesibilités",
            },
          ],
        },
      ],
    },
  ]

  //WHEN
  // on ne teste pas le mappage
  await fetchSurveyUsecase.execute(new FetchSurveyPresenterImpl(expectation))
  //THEN
  async function expectation(vm: FetchSurveyViewModel[]) {
    expect(vm).toStrictEqual<FetchSurveyViewModel[]>(expected)
  }
})
