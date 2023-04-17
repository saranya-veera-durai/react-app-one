import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import {rootReducer} from './reducer'
import {legacy_createStore as createStore} from "redux"
import {Provider} from "react-redux"
export default function Index() {
  const store=createStore(rootReducer)
  return (
    <div>
      <Provider store={store}>
      <App/>
      </Provider>

    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById('root'));
