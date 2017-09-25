import mockFirebaseApp from '~/__mocks__/firebaseAppMock'
import firebaseMocks from '~/__mocks__/firebaseMocks'
jest.mock('~/firebase', () => mockFirebaseApp)

import actions from '~/store/actions'

describe('actions', () => {
  describe('uploadImages', () => {
    it('should call method _uploadImage 3 times', () => {
      actions._uploadImage = jest.fn()
      actions.uploadImages({}, [1, 2, 3]).then(() => {
        expect(actions._uploadImage.mock.calls.length).toEqual(3)
      })
    })
  })
  describe('createNewWorkout', () => {
    it('should call update with', () => {
      const spy = jest.spyOn(firebaseMocks, 'update')
      Date.now = jest.fn(() => 2000)
      let state = {
        user: {
          displayName: 'Olga',
          uid: 1
        },
        workoutsRef: {
          push: function () {
            return {
              key: 59
            }
          }
        }}
      actions.createNewWorkout({state: state}, {})
      expect(spy).toHaveBeenCalledWith({
        '/user-workouts/1/59': {
          'date': 2000,
          'rate': 0,
          'uid': 1,
          'username': 'Olga'
        },
        '/workouts/59': {
          'date': 2000,
          'rate': 0,
          'uid': 1,
          'username': 'Olga'
        }
      })
    })
  })
})

