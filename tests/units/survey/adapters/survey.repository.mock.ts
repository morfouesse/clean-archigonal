import type { Survey, SurveyRepository } from '@/domains/survey/ports/survey.repository'

export class SurveyRepositoryMock implements SurveyRepository {
  private readonly _surveys = [
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
          ],
        },
      ],
    },
    {
      label: 'les fruits',
      questions: [
        {
          label: 'La tomate est un fruit ?',
          answers: [
            {
              label: 'OUIIIII',
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
              label: 'jamais',
            },
          ],
        },
      ],
    },
  ]

  constructor(private readonly surveys: Survey[] = this._surveys) {}

  getSurveys(): Promise<Survey[]> {
    return Promise.resolve(this.surveys)
  }
  createSurvey(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
