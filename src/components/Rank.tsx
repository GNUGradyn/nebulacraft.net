import { useState } from "react";
import "../triangle.css"

interface RankProps {
    name: string
}

const Rank: React.FC<RankProps> = (props: RankProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rank">
            <h1>{props.name}</h1>
            <p><i className="arrow down"></i></p>
        </div>
    )
}

export default Rank;