import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const logger = createLogger()

const middleware = [ReduxThunk, ReduxPromise, logger]

const Store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)))

export default Store
