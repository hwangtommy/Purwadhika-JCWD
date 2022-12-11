function Bandimage(props){
    return (
        <div className="band-image">
            <img src={props.img} alt="Band" class="middle-img"/>
            <div class="bottomtext">
                <h3>{props.title}</h3>
                <p>{props.caption}</p>
            </div>
        </div>
    )
}

export default Bandimage;