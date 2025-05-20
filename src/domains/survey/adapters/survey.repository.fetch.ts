import type { Survey, SurveyRepository } from "../ports/survey.repository";

export class SurveyRepositoryFetch implements SurveyRepository{
    getSurveys(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createSurvey(): Promise<Survey> {
        throw new Error("Method not implemented.");
    }
  
}