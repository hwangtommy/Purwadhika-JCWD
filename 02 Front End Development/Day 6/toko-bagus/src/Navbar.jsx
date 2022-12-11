import logo from './olx-logo.svg'
import AddItems from './AddItems';

function Navbar(){
    AddItems();

    return(
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
    )
}

export default Navbar;