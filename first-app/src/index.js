import React from 'react';
import ReactDOM from 'react-dom';
import Usestate from './components/Usestate';
function Index() {
  return (
    <div>
      <Usestate year={2004} num={4}/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))
