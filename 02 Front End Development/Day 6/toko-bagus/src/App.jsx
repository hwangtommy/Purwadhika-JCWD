import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import AddItems from './AddItems';
import Item from './Item';
import foto from './fotorestoran.jpeg';
import { useState } from 'react';

function App() {
  const [listItems, addListItems] = useState([])
  
  const [listItem, addListItem] = useState({
    price: "",
    details: "",
    location: "",
    img: ""
  })

  const [search, setSearch] = useState("")
  
  function inputHandler(event){
    const {value, name} = event.target;

    name === "search" ?
    setSearch(value):
    addListItem({
      ...listItem,
      [name]: value,
    })
  }

  function addProductItem(){
    listItems([...listItems, listItem])
  }

  return (
    <div className="App">
        <Navbar/>
      <div className="add-items">
        <AddItems/>
      </div>
      <div className="img-middle">
      </div>
      <div className="items">
        
      </div>
    </div>
  );
}

export default App;
