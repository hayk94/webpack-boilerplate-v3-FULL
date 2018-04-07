import { SET_TEST_REDUCER } from '.'

export default function setTestReducer (testReducerTitle) {
  return {
    type: SET_TEST_REDUCER,
    payload: testReducerTitle
  }
}
