// import logo from './logo.svg';
import './App.css';
import Addtdl from './addTdl';
import { useState } from 'react';
import Listtdl from './listTdl';
import axios from 'axios';

function App() {
  const [tdlist, updateTdl] = useState([]);
  const addTdl = (tdldetails) => {
    updateTdl([...tdlist, tdldetails]);
  };

  function fetchProducts(){
    axios.get("http://localhost:2000").then((res) => {
      if (res.data.length){
        updateTdl([...res.data])
      }
      else{
        updateTdl([res.data])
      }
    })
  }

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
