import React from 'react';
import ReactDOM from 'react-dom';
import SpreadOperator from './components/SpreadOperator';
function Index() {
  return (
    <div>
      <SpreadOperator/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))
