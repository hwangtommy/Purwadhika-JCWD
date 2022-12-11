import { useState } from 'react';

function AddItems(){
    return(
        <div className="AddItems">
            <button type="button" class="collapsible">Add Items</button>
            <div class="content">
                <input name="price" className="input-product" type={"text"} placeholder="Product Price" onChange={inputHandler}></input>
                <input name="details" className="input-product" type={"text"} placeholder="Product Details" onChange={inputHandler}></input>
                <input name="location" className="input-product" type={"text"} placeholder="Location" onChange={inputHandler}></input>
                <input name="img" className="input-product" type={"text"} placeholder="Image URL" onChange={inputHandler}></input>
                <button className="button-add-product" onClick={addProductItem}>Add Item</button>
            </div>
        </div>
    )
}

export default AddItems;