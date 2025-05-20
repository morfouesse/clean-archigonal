export interface Answer{
    label: string
}
export interface Question {
    label: string
    answers: Answer[]
}
export interface Survey {
    label: string,
    questions : Question[]
}
export interface SurveyRepository{
    getSurveys() : Promise<void>
    createSurvey() : Promise<Survey>
}