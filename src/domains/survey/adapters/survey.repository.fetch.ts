import type { CreateSurvey } from '../ports/createSurvey.usecase'
import type { FetchSurvey } from '../ports/fetchSurvey.usecase'
import type { SurveyRepository } from '../ports/survey.repository'

export interface FetchAnswerApiModel {
  label: string
}
export interface FetchQuestionApiModel {
  label: string
  answers: FetchAnswerApiModel[]
}
export interface FetchSurveyApiModel {
  label: string
  questions: FetchQuestionApiModel[]
}

export class SurveyRepositoryFetch implements SurveyRepository {
  getSurveys(): Promise<FetchSurvey[]> {
    const surveysApiModel: FetchSurveyApiModel[] = [
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
    return Promise.resolve(this.mapFetchSurveysApi(surveysApiModel))
  }
  createSurvey(survey: CreateSurvey): void {
    console.log(survey)

    //send to back
  }

  mapFetchSurveysApi(fetchSurveysApiModel: FetchSurveyApiModel[]): FetchSurvey[] {
    return fetchSurveysApiModel.map((apiModel) => ({ ...apiModel }))
  }
}
