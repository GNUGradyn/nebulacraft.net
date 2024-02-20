import Rank from "../components/Rank";

const survivalRanks: React.FC = () => {
    return (
        <>
            <h1 style={{textAlign: "center", margin: 30}}>Complete 3 mission ranks to unlock the rank</h1>
            <Rank name="Wanderer"
                perks={["100 bonus claim blocks", "200 claim blocks per hour", "max 8000 claim blocks", "max 2 homes"]}
                missions={[]}
            />
        </>
    )
}

export default survivalRanks;