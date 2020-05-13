import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer  from './reducer/index'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({
  rootReducer
})
// redux-persist
const persistedReducer = persistReducer(
  {
    key: 'casecloud',
    storage
  },
  reducer
)
const middlewares = [thunkMiddleware]
const middleWareEnhancer = applyMiddleware(...middlewares)

// redux-devtools
const enhancer = composeWithDevTools(middleWareEnhancer)

export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)
