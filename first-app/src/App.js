// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';


function Header() {
  return (
    <div> Header</div>
  )
}
function Container() {
  return (
    <div> Container</div>
  )
}
function Footer() {
  return (
    <div> Footer</div>
  )
}
export default function App() {
  return (
    <div>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}
