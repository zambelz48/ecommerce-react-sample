import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'store/reducers'
import devTools from 'utils/dev_tools'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      devTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
