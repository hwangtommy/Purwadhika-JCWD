function Item (props){
return(
    <div className="item">
        <div className="product-photo">
            <img src={props.img} alt="Foto Produk" />
        </div>
        <div className="product-details">
            <h5>{props.price}</h5>
            <p>{props.details}</p>
            <p>{props.location}</p>
        </div>
    </div>
)
}

export default Item;