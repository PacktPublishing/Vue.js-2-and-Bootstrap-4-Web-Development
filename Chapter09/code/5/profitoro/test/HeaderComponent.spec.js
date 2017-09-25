import Vue from 'vue'
import mockFirebaseApp from '~/__mocks__/firebaseAppMock'
jest.mock('~/firebase', () => mockFirebaseApp)
import store from '~/store'
import HeaderComponent from '~/components/common/HeaderComponent'

describe('HeaderComponent', () => {
  let $mounted

  beforeEach(() => {
    $mounted = new Vue({
      template: '<header-component ref="headercomponent"></header-component>',
      store: store(),
      components: {
        'header-component': HeaderComponent
      }
    }).$mount()
  })
  test('onLogout', () => {
    let $headerComponent = $mounted.$refs.headercomponent
    $headerComponent.$router = []
    const spy = jest.spyOn($headerComponent, 'logout')
    $headerComponent.onLogout()
    expect(spy).toHaveBeenCalled()
    expect($headerComponent.$router).toEqual(['/'])
  })
})

