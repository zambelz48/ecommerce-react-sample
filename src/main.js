import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import AppContainer from 'app/main/container'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
