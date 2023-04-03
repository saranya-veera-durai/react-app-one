import React from 'react';
import ReactDOM from 'react-dom';
import UseMemo from './components/useMemo';
function Index() {
  return (
    <div>
      <UseMemo/>
    </div>
  )
}

ReactDOM.render(<Index/>,document.getElementById("root"))
