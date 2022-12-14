function Item (props){
return(
    <div className="item">
        <div className="product-photo">
            <img src={props.data.img} alt="Foto Produk" />
        </div>
        <div className="product-details">
            <h5>{props.data.price}</h5>
            <p>{props.data.details}</p>
            <p>{props.data.location}</p>
        </div>
    </div>
)
}

export default Item;