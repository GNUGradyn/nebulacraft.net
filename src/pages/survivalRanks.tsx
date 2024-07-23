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
                        name: "Gardener",
                        meta: ["Harvest 500 crops"]
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
                        name: "Free The End",
                        meta: ["Kill an ender dragon"]
                    }
                ]}
            />
            <Rank name="Adventurer"
                perks={["2000 bonus claim blocks", "500 claim blocks per hour", "Max 80000 claim blocks", "Max 5 homes", "$80 mission bonus per mission in this rank"]}
                missions={[
                    {
                        name: "Decked Out",
                        meta: ["Wear a full suit of diamond armor while wielding a diamond sword"]
                    },
                    {
                        name: "Flamiliar Face",
                        meta: ["Play for 24 hours"]
                    },
                    {
                        name: "Buisness Owner",
                        meta: ["Create 5 shops"]
                    },
                    {
                        name: "Economics 101",
                        meta: ["Make a shop sale 64 times"]
                    }
                ]}
            />
            <Rank name="Warrior"
                perks={["2400 bonus claim blocks", "600 claim blocks per hour", "Max 120000 claim blocks", "Max 6 homes", "$160 mission bonus per mission in this rank"]}
                missions={[
                    {
                        name: "Defeater of death",
                        meta: ["Deal the finishing blow to a wither", "The wither may only take player damage"]
                    },
                    {
                        name: "These Wings Were Made for Flying",
                        meta: ["Break an elytra"]
                    },
                    {
                        name: "Big spender",
                        meta: ["Spend 1000 in game currency"]
                    },
                    {
                        name: "Achivement Hunter",
                        meta: ["Complete 2 advancement trees"]
                    }
                ]}
            />
            <Rank name="Legend"
                perks={["2800 bonus claim blocks", "700 claim blocks per hour", "Unlimited claim blocks", "Max 7 homes", "$320 mission bonus per mission in this rank"]}
                missions={[
                    {
                        name: "Diggy Diggy Hole",
                        meta: ["500,000 blocks mined", "You can check this with /minedblocks"]
                    },
                    {
                        name: "Overacheiver",
                        meta: ["Complete every advancement"]
                    },
                    {
                        name: "Bragging Rights",
                        meta: ["Kill a warden by yourself", "The warden can only take player damage"]
                    },
                    {
                        name: "White Whale",
                        meta: ["Spend 1000 in game currency in a single transaction"]
                    },
                    {
                        name: "Vinyl Collector",
                        meta: ["Hold every music disc in your inventory at once"]
                    }
                ]}
            />
        </>
    )
}

export default survivalRanks;