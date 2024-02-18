interface GamemodeProps {
    name: string
    img: string
    description: string
}

const Gamemode: React.FC<GamemodeProps> = (props: GamemodeProps) => {
    return (
        <div className="gamemode">
            <h2>{props.name}</h2>
            <img src={props.img}/>
            <p>{props.description}</p>
        </div>
    )
}

export default Gamemode;