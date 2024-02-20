import { Link } from "react-router-dom";
import NavbarElement from "./NavbarElement";
import NavbarSection from "./NavbarSection";

const Navbar: React.FC = () => {
    return (
        <div id="navbar">
            <Link to={"/"}><img id="sicon" src="/images/mainLogo.svg"/></Link>
            <div style={{display: "flex"}}>
                <NavbarSection name="Survival">
                    <NavbarElement name="Ranks" goto="survival/ranks"/>
                    <NavbarElement name="Map" goto="survival/map"/>
                </NavbarSection>
                <NavbarElement name="Rules" goto="rules" transparent/>
            </div>
            <p style={{marginRight: 10}}>IP: Nebulacraft.net</p>
        </div>
    )
}

export default Navbar;