import logo from './olx-logo.svg';
import './App.css';
import Item from './Item';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

function App() {
  const [listItems, addListItems] = useState([])
  
  const [itemObj, addItem] = useState({
    id: 0,
    price: "",
    details: "",
    location: "",
    img: ""
  })

  const [search, setSearch] = useState("")
  
  function inputHandler(event){
    const {value, name} = event.target;

    if (name === "search"){
      setSearch(value)
    }
    else{
      addItem({
        ...itemObj,
        [name]: value,
      })
    }
  }

  function fetchItems(){
    axios.get("http://localhost:2000/listItems").then((res) => {
      if(res.data.length){
        addListItems([...res.data])
      }
      else{
        addListItems([res.data])
      }
    })
  }

  useEffect(() => {
    fetchItems();
  }, [])

  function addProductItem(){
    // if(listItems.find((val) => val.id === itemObj.id)) {
    //   return axios.patch("http://localhost:2000/listItems/" + itemObj.id, itemObj ).then(() => {
    //     fetchItems();
    //     alert("Item updated")
    //   })
    // }

    return axios.post("http://localhost:2000/listItems/", itemObj).then(() => {
      fetchItems();
      alert("Item added")
    })
  }

  return (
    <div className="center">
      <div className='Navbar'>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Temukan Mobil, Handphone, dan lainnya ..." name="search" onChange={inputHandler}></input>
        </div>
        <div className="user-login">
          <a href="#">Login/daftar</a>
        </div>
      </div>
      <div className="add-items">
        <div className="AddItems">
          <button type="button" className="collapsible">Add Items</button>
          <div className="content">
            <input name="price" className="input-product" type={"text"} placeholder="Product Price" onChange={inputHandler}></input>
            <input name="details" className="input-product" type={"text"} placeholder="Product Details" onChange={inputHandler}></input>
            <input name="location" className="input-product" type={"text"} placeholder="Location" onChange={inputHandler}></input>
            <input name="img" className="input-product" type={"text"} placeholder="Image URL" onChange={inputHandler}></input>
            <button className="button-add-product" onClick={addProductItem}>Add Item</button>
          </div>
        </div>
      </div>
      <div className="img-middle">
      </div>
      <div className="items">
        {
          listItems?.map((val,idx) => {
          if(val.details.toLowerCase().includes(search.toLocaleLowerCase()))
          return (
              <Item data={val} idx={idx} />
            )
          }
          )}
      </div>
      </div>
  )}

export default App;
