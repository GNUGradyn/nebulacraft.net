import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div id="navbar">
            <Link to={"/"}><img id="sicon" src="/mainLogo.svg"/></Link>
            <div>
                
            </div>
            <p style={{marginRight: 10}}>IP: Nebulacraft.net</p>
        </div>
    )
}

export default Navbar;