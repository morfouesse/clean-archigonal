import { CreateQuestion } from '../entities/CreateQuestion'
import type { CreateQuestionViewModel } from '../ports/createSurvey.presenter'

export class CreateQuestionMapper {
  mapCreateQuestionVmToCreateQuestion(nextQuestionVm: CreateQuestionViewModel) {
    return new CreateQuestion(nextQuestionVm.label, [
      {
        label: nextQuestionVm.answer.answerOne,
        isGoodAnswer: nextQuestionVm.answer.isGoodAnswerOne,
      },
      {
        label: nextQuestionVm.answer.answerTwo,
        isGoodAnswer: nextQuestionVm.answer.isGoodAnswerTwo,
      },
      {
        label: nextQuestionVm.answer.answerThree,
        isGoodAnswer: nextQuestionVm.answer.isGoodAnswerThree,
      },
      {
        label: nextQuestionVm.answer.answerFour,
        isGoodAnswer: nextQuestionVm.answer.isGoodAnswerFour,
      },
    ])
  }

  mapCreateQuestionsVmToCreateQuestions(questionsAndAnswersVm: CreateQuestionViewModel[]) {
    const questionsAndAnswers: CreateQuestion[] = []
    questionsAndAnswersVm.forEach((item) => {
      questionsAndAnswers.push(this.mapCreateQuestionVmToCreateQuestion(item))
    })
    return questionsAndAnswers
  }

  mapCreateQuestionToCreateQuestionVm(nextQuestion: CreateQuestion): CreateQuestionViewModel {
    return {
      label: nextQuestion.label,
      answer: {
        answerOne: nextQuestion.answers[0].label,
        answerTwo: nextQuestion.answers[1].label,
        answerThree: nextQuestion.answers[2].label,
        answerFour: nextQuestion.answers[3].label,
        isGoodAnswerOne: nextQuestion.answers[0].isGoodAnswer,
        isGoodAnswerTwo: nextQuestion.answers[1].isGoodAnswer,
        isGoodAnswerThree: nextQuestion.answers[2].isGoodAnswer,
        isGoodAnswerFour: nextQuestion.answers[3].isGoodAnswer,
      },
    }
  }

  mapCreateQuestionsToCreateQuestionsVm(
    questionsAndAnswers: CreateQuestion[],
  ): CreateQuestionViewModel[] {
    const questionsAndAnswersVm: CreateQuestionViewModel[] = []
    questionsAndAnswers.forEach((item) => {
      questionsAndAnswersVm.push(this.mapCreateQuestionToCreateQuestionVm(item))
    })
    return questionsAndAnswersVm
  }
}
