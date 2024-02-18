import Navbar from "../components/Navbar";
import "../index.css"
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <div id="imageBackground">
                <img src="/mainLogo.svg" width="300" height="300"/>
                <h2>Nebulacraft</h2>
            </div>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;