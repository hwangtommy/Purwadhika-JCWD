function Displaycard(props){
    return(
        <div className="card">
            {props.number}{props.suit}
        </div>
    )
}

export default Displaycard;