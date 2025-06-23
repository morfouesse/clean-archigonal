import { FetchSurveyPresenterImpl } from '@/domains/survey/adapters/fetchSurvey.presenter.impl'
import { FetchSurveyUsecase } from '@/domains/survey/fetchSurvey.usecase'
import type { FetchSurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { expect, it, vi } from 'vitest'
import { SurveyRepositoryMock } from './adapters/survey.repository.mock'

//besoin de faire ainsi car on a un import pour une enum dans un autre fichier
const surveysMock = new SurveyRepositoryMock()
vi.mock(import('@/domains/survey/adapters/survey.repository.fetch'), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    getSurveys: vi.fn(() => surveysMock.getSurveys()),
  }
})
it('Get survey list', async () => {
  //GIVEN
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
