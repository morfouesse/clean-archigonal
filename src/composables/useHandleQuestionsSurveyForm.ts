import type {
  CreateQuestionViewModel,
  CreateSurveyViewModel,
} from '@/domains/survey/ports/createSurvey.presenter'
import { computed, ref, type Ref } from 'vue'

export const useHandleQuestionsSurveyForm = () => {
  const questionAndAnswers = ref<CreateQuestionViewModel[]>([])
  const survey = ref<CreateSurveyViewModel>()
  const getSurvey = computed(() => survey.value)

  const buildSurvey = (
    surveyName: string,
    questionName: Ref<string>,
    answerOne: Ref<string>,
    answerTwo: Ref<string>,
    answerThree: Ref<string>,
    answerFour: Ref<string>,
    isGoodAnswerOne: Ref<boolean>,
    isGoodAnswerTwo: Ref<boolean>,
    isGoodAnswerThree: Ref<boolean>,
    isGoodAnswerFour: Ref<boolean>,
  ) => {
    const questionAnswer: CreateQuestionViewModel = {
      label: questionName.value,
      answers: [
        {
          label: answerOne.value,
          isGoodAnswer: isGoodAnswerOne.value,
        },
        {
          label: answerTwo.value,
          isGoodAnswer: isGoodAnswerTwo.value,
        },
        {
          label: answerThree.value,
          isGoodAnswer: isGoodAnswerThree.value,
        },
        {
          label: answerFour.value,
          isGoodAnswer: isGoodAnswerFour.value,
        },
      ],
    }
    questionAndAnswers.value = [...questionAndAnswers.value, questionAnswer]
    survey.value = {
      label: surveyName,
      questions: questionAndAnswers.value,
    }
  }
  return {
    buildSurvey,
    getSurvey,
  }
}
