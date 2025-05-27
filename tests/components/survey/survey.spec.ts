import SurveyView from '@/views/SurveyView.vue'
import { describe, it } from 'vitest'
import { mount } from 'vue'

describe('Survey view', () => {
  // https://dev.to/jacobandrewsky/testing-vue-components-with-vitest-5c21
  const view: RenderResult = mount(SurveyView)
  it('display title', () => {
    const titre = view.getByRole('heading', { level: 2, name: 'Ma première estimation' })
    expect(titre).toBeDefined()
  })
})
