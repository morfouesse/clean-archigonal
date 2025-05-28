import SurveyView from '@/views/SurveyView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

// ne pas lancer les tests de composant avec l'exetension vitest car n'utilse que vitest.config.ts, donc n'a pas le mock de vuetify

describe('Survey view', () => {
  // https://dev.to/jacobandrewsky/testing-vue-components-with-vitest-5c21
  it('display title', () => {
    const wrapper = mount(SurveyView)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
/// aller plus loin avec la snapshot
