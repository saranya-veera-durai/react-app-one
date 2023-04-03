import React from 'react';
import ReactDOM from 'react-dom';
import Events from './components/Events';
function Index() {
  return (
    <div>
      <Events/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))
