import Gamemode from "../components/Gamemode";
import "../index.css"

const Home: React.FC = () => {
    return (
        <>
        <h1 style={{textAlign: "center", margin: 50}}>Our Network</h1>
        <div id="gamemodes">
            <Gamemode name="Survival" img={require("../diamondsword.webp")} description="Traditional Survival Multiplayer"/>
            <Gamemode name="Creative" img={require("../grass.webp")} description="Creative Plots"/>
            <Gamemode name="Skyblock" img={require("../sapling.webp")} description="Modern Skyblock"/>
        </div>
        </>
    )
}

export default Home;