// import logo from './logo.svg';
import './App.css';
import Addtdl from './addTdl';
import { useState } from 'react';
import Listtdl from './listTdl';

function App() {
  const [tdlist, updateTdl] = useState([]);
  const addTdl = (tdldetails) => {
    updateTdl([...tdlist, tdldetails]);
  };

  return (
    <>
      <div className="App">
        <Addtdl addTdl={addTdl}/>
      </div>
      <div className="App">
        <Listtdl tdlist={tdlist}/>
      </div>
    </>
  );
}

export default App;
