import { useState } from "react";
import "../triangle.css"

interface RankProps {
    name: string
}

const Rank: React.FC<RankProps> = (props: RankProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rank" onClick={()=>{setExpanded(!expanded)}}>
            <div className="rank-head">
                <h1>{props.name}</h1>
                <p><i className={expanded?"arrow up":"arrow down"}></i></p>
            </div>
            <div className="rank-body">
                {}
            </div>
        </div>
    )
}

export default Rank;