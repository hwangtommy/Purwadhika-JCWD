import logo from './logo.svg';
import './App.css';
import Additem from './addItem';
import { useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <div className="display">
        
      </div>
      <div className="add">
        <Additem/>
      </div>
    </div>
    
  );
}

export default App;
