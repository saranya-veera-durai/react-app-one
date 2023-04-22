import React from 'react'
import  ReactDOM  from 'react-dom'
import Crud from './components/crud_api'
import JsonServer from './components/jsonserver';
export default function Index() {

  return (
    <div>
<JsonServer/>

    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById('root'));
