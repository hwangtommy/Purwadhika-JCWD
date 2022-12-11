function Navbar(props) {
    return(
        <div className="navbar">
            <img src={props.logo} alt="Jack Hitam"/>
            Wallet: ${props.balance}
        </div>
    )
    
}

export default Navbar;