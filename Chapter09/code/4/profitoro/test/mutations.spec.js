import mutations from '~/store/mutations'

describe('mutations', () => {
  describe('setWorkingPomodoro', () => {
    it('should set workingPomodoro property to 30', () => {
      let state = {config: {workingPomodoro: 1}}
      mutations.setWorkingPomodoro(state, 30)
      expect(state.config).toEqual({workingPomodoro: 30})
    })
  })
})
