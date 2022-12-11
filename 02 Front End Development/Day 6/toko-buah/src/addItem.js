import { useState } from "react";

function Additem(){
    const [listBuah, setListBuah] = useState([])
    const [objBuah, setObjBuah] = useState({
        name: "",
        url: "",
        price: ""
    })

    function inputHandler(event){
        const {value, name} = event.target;
        setObjBuah({...objBuah, [name]: value,})
    }

    function addBuah () {
        setListBuah([...listBuah, objBuah])
    }

    return(
        <>
        <h3>Add New Product</h3>
          <label for="product-name">Product Name: <br></br></label>
          <input name="name" type="text" id="product-name" onChange={inputHandler}/><br></br><br></br>
          <label for="product-url">Photo URL: <br></br></label>
          <input name="url" type="text" id="product-url" onChange={inputHandler}/><br></br><br></br>
          <label for="price">Price: <br></br></label>
          <input name="price" type="text" id="price" onChange={inputHandler}/><br></br><br></br>
          <button className="button-add" onClick={addBuah}>Add</button>
        </>
    )
    
}

export default Additem;