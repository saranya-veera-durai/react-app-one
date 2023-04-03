import React from 'react';
import ReactDOM from 'react-dom';
import Condition from './components/Condition';
function Index() {
  return (
    <div>
<Condition isWinner={false}/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))
