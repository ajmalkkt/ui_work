import React from 'react';
//import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
// import CheckForm from './CheckForm';
// import Check from './Check';
// import PrintButton from './PrintButton';
// import SimpleTable from './SimpleTable';
import ComplexTable from './ComplexTable';

function App() {
  // const [checkDetails, setCheckDetails] = useState(null);

  // const handleCheckSubmit = (details) => {
  //   setCheckDetails(details);
  // };
  return (
    <div className="App">
      {/* <h1>Check Printing Software</h1>
      <CheckForm onCheckSubmit={handleCheckSubmit} />
      {checkDetails && <Check {...checkDetails} />}
      {checkDetails && <PrintButton />} */}
      {/* <SimpleTable/> */}
      <ComplexTable/>

    </div>
  );
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
