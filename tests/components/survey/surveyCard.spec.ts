import SurveyCard from '@/components/survey/SurveyCard.vue'
import type { SurveyViewModel } from '@/domains/survey/ports/fetchSurvey.presenter'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('Survey card', () => {
  // https://dev.to/jacobandrewsky/testing-vue-components-with-vitest-5c21
  it('snapshot', () => {
    const survey: SurveyViewModel = {
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
    }

    const wrapper = mount(SurveyCard, {
      props: {
        survey: survey,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
