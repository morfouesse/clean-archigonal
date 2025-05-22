import type { Survey, SurveyRepository } from "../ports/survey.repository";

export class SurveyRepositoryFetch implements SurveyRepository{
    getSurveys(): Promise<Survey[]> {
        const surveys: Survey[] = [
            {
                label: "les tests",
                questions : [
                    {
                        label: "Faut-il faire des tests ?",
                        answers: [
                            {
                                label: "OUIIIII",
                            },
                            {
                                label: "heuuu, connait pas"
                            }
                        ]
                    },
                    {
                        label: "Quelles tests en priorité ?",
                        answers: [
                            {
                                label: "les tests unitaires"
                            },
                            {
                                label: "les tests E2E"
                            }
                        ]
                    }
                ]
            },
            {
                label: "les fruits",
                questions : [
                    {
                        label: "La tomate est un fruit ?",
                        answers: [
                            {
                                label: "OUIIIII",
                            },
                            {
                                label: "heuuu, connait pas"
                            }
                        ]
                    },
                    {
                        label: "faut-il mangé des radis ?",
                        answers: [
                            {
                                label: "ah bah oui"
                            },
                            {
                                label: "jamais"
                            }
                        ]
                    }
                ]
            }
        ]
       return Promise.resolve(surveys)
    }
    createSurvey(): Promise<void> {
        throw new Error("Method not implemented.");
    }
  
}