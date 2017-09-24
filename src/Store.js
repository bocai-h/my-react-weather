import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import thunkMiddleWare from 'redux-thunk'

import {reducer as weatherReducer} from './weather/'

import Perf from 'react-addons-perf'

const win = window

win.Perf = Perf

const reducer = combineReducers({
  weather: weatherReducer
})

const middleWares = [thunkMiddleWare]

if(process.env.NODE_ENV !== 'production'){
  // middleWares.push(require('redux-immutable-state-invariant')())
}

const storeEnhancers = compose(
  applyMiddleware(...middleWares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)
