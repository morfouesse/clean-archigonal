import type { CreateQuestionViewModel } from '@/domains/survey/ports/createSurvey.presenter'

export const surveyName = 'Questionnaire'

export const emptyQuestionVm: CreateQuestionViewModel = {
  label: '',
  answer: {
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    isGoodAnswerOne: false,
    isGoodAnswerTwo: false,
    isGoodAnswerThree: false,
    isGoodAnswerFour: false,
  },
}

export const createQuestionVm: CreateQuestionViewModel = {
  label: 'last Question',
  answer: {
    answerOne: 'firstAnswer',
    answerTwo: 'secondAnswer',
    answerThree: 'thirdAnswer',
    answerFour: 'fourthAnswer',
    isGoodAnswerOne: true,
    isGoodAnswerTwo: true,
    isGoodAnswerThree: true,
    isGoodAnswerFour: true,
  },
}

export const lastSurveyQuestionVm: CreateQuestionViewModel = {
  label: 'last survey Question',
  answer: {
    answerOne: 'firstAnswer',
    answerTwo: 'secondAnswer',
    answerThree: 'thirdAnswer',
    answerFour: 'fourthAnswer',
    isGoodAnswerOne: true,
    isGoodAnswerTwo: true,
    isGoodAnswerThree: true,
    isGoodAnswerFour: true,
  },
}

export const createQuestionsVm: CreateQuestionViewModel[] = [
  {
    label: 'first Question',
    answer: {
      answerOne: 'firstAnswer',
      answerTwo: 'secondAnswer',
      answerThree: 'thirdAnswer',
      answerFour: 'fourthAnswer',
      isGoodAnswerOne: false,
      isGoodAnswerTwo: false,
      isGoodAnswerThree: false,
      isGoodAnswerFour: false,
    },
  },
]

export const createQuestionsWithLastQuestionVm = [...createQuestionsVm, createQuestionVm]
