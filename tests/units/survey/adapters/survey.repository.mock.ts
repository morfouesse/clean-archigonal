import { SurveyState } from '@/domains/survey/adapters/survey.repository.fetch'
import type { CreateQuestion, CreateSurvey } from '@/domains/survey/createSurvey.usecase'
import type { FetchSurvey } from '@/domains/survey/fetchSurvey.usecase'
import type { SurveyRepository } from '@/domains/survey/ports/survey.repository'

export const createSurvey: CreateSurvey = {
  label: 'les tests',
  questions: [
    {
      label: 'Faut-il faire des tests ?',
      answers: [
        {
          label: 'OUIIIII',
          isGoodAnswer: true,
        },
        {
          label: 'heuuu, connait pas',
          isGoodAnswer: false,
        },
        {
          label: 'test ?',
          isGoodAnswer: false,
        },
        {
          label: '...',
          isGoodAnswer: false,
        },
      ],
    },
  ],
}

export const lastQuestionAnswers: CreateQuestion = {
  label: 'Quelles tests en priorité ?',
  answers: [
    {
      label: 'les tests unitaires',
      isGoodAnswer: true,
    },
    {
      label: 'les tests E2E',
      isGoodAnswer: false,
    },
    {
      label: 'les tests de composants',
      isGoodAnswer: false,
    },
    {
      label: "les tests d'accesibilités",
      isGoodAnswer: true,
    },
  ],
}
export class SurveyRepositoryMock implements SurveyRepository {
  private readonly _surveys: FetchSurvey[] = [
    {
      label: 'les tests',
      state: SurveyState.IN_PROGRESS,
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
    {
      label: 'les fruits',
      state: SurveyState.EXPIRE,
      questions: [
        {
          label: 'La tomate est un fruit ?',
          answers: [
            {
              label: 'OUIIIII',
            },
            {
              label: "c'est aussi un légume, nan ?",
            },
            {
              label: 'la question est nul',
            },
            {
              label: 'heuuu, connait pas',
            },
          ],
        },
        {
          label: 'faut-il mangé des radis ?',
          answers: [
            {
              label: 'ah bah oui',
            },
            {
              label: 'nan, ça pique',
            },
            {
              label: 'seulement avec du pain beurre',
            },
            {
              label: 'jamais',
            },
          ],
        },
      ],
    },
  ]

  constructor(private readonly surveys: FetchSurvey[] = this._surveys) {}

  getSurveys(): Promise<FetchSurvey[]> {
    return Promise.resolve(this.surveys)
  }

  createSurvey() {
    // do nothing.
  }
}
