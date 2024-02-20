import Rank from "../components/Rank";

const survivalRanks: React.FC = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", margin: 30 }}>Complete 3 mission ranks to unlock the rank</h1>
            <Rank name="Wanderer"
                perks={["100 bonus claim blocks", "200 claim blocks per hour", "max 12600 claim blocks", "max 2 homes"]}
                missions={[]}
            />
            <Rank name="Sojourner"
                perks={["1200 bonus claim blocks", "300 claim blocks per hour", "Max 25600 claim blocks", "Colored name", "Max 3 homes", "$20 mission bonus per mission in this rank"]}
                missions={[
                    {
                        name: "Join Nebulacraft discord and link account",
                        meta: []
                    },
                    {
                        name: "Amateur",
                        meta: ["Reach MCMMO level 100"]
                    },
                    {
                        name: "Passer By",
                        meta: ["Play for 3 hours"]
                    },
                    {
                        name: "First Paycheck",
                        meta: ["Earn 100 in game dollars"]
                    }
                ]}
            />
            <Rank name="Explorer"
                perks={["1600 bonus claim blocks", "400 claim blocks per hour", "Max 51200 claim blocks", "Max 4 homes", "$40 mission bonus per mission in this rank"]}
                missions={[
                    {
                        name: "Skilled",
                        meta: ["Reach MCMMO level 500"]
                    },
                    {
                        name: "Resident",
                        meta: ["Play for 8 hours"]
                    },
                    {
                        name: "Professional Miner",
                        meta: ["Sell 10 diamonds to spawn"]
                    },
                    {
                        name: "Renaissance Man",
                        meta: ["Reach level 5 in every MCMMO skill"]
                    },
                    {
                        name: "Free The End",
                        meta: ["Kill an ender dragon"]
                    }
                ]}
            />
        </>
    )
}

export default survivalRanks;