import React from 'react'
import  ReactDOM  from 'react-dom'
import Crud from './components/crud_api'
export default function Index() {

  return (
    <div>
<Crud/>

    </div>
  )
}
ReactDOM.render(<Index/>, document.getElementById('root'));
