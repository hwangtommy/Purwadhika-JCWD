function Bandmember(props){
    return (
        <div className="member">
            <p>{props.name}</p>
            <img src={props.img} alt="Band Member"/>
        </div>
    ) 
}

export default Bandmember;