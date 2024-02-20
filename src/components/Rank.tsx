import { RefObject, useEffect, useRef, useState } from "react";
import "../triangle.css"

interface RankProps {
    name: string
}

const Rank: React.FC<RankProps> = (props: RankProps) => {

    interface RefContent {
        current: HTMLDivElement | null;
        height: number;
    }

    const [expanded, setExpanded] = useState(true);
    const contentRef: RefObject<RefContent> = useRef({ current: null, height: 0 });

    const calculateContentHeight = () => {
        if (contentRef.current && contentRef.current.current) {
            contentRef.current.height = contentRef.current.current.scrollHeight;
        }
        setExpanded(false);
    };

    useEffect(() => {
        window.addEventListener('load', calculateContentHeight);
        return () => {
            window.removeEventListener('load', calculateContentHeight);
        };
    }, []);

    return (
        <div className="rank" ref={r => {
            if (contentRef.current) contentRef.current.current = r;
        }}>
            <div className="rank-head" onClick={() => { setExpanded(!expanded) }}>
                <h1>{props.name}</h1>
                <p><i className={expanded ? "arrow up" : "arrow down"}></i></p>
            </div>
            <div className="rank-body" style={{ height: expanded ? (contentRef.current?.height == 0 ? "unset" : contentRef.current?.height) : 0 }}>
                {expanded && <>
                    <div>
                        <h1>Perks</h1>
                    </div>
                    <div>
                        <h1>Requirements</h1>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Rank;