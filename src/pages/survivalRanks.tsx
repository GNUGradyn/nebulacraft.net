import Rank from "../components/Rank";

const survivalRanks: React.FC = () => {
    return (
        <>
            <h1 style={{textAlign: "center", margin: 30}}>Complete 3 mission ranks to unlock the rank</h1>
            <Rank name="Wanderer"/>
        </>
    )
}

export default survivalRanks;