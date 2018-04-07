import React from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import Images from './Images'

const App = props => <Provider store={store}>
  <Images />
</Provider>

export default App
