import { SET_TEST_REDUCER } from '../actions'

export default function testReducer (state = 'test', action) {
  switch (action.type) {
    case SET_TEST_REDUCER:
      return action.payload
  }

  return state
}
