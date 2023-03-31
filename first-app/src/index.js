import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
function Index() {
  return (
    <div>
<App title="titleone" text="Welcome all"/> 
<App title="titletwo" text="Welcome "/> 
<App title="titlethree" text="Welcome everyone"/> 
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))