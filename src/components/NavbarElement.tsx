import { Link } from "react-router-dom";

export interface NavbarElementProps { // exported so we can restrict navbar section children to this
    name: string
    goto?: string
    transparent?: boolean
}

const NavbarElement: React.FC<NavbarElementProps> = (props: NavbarElementProps) => {
    return(
        props.goto != null ? (
            <Link to={props.goto} style={{ textDecoration: 'none', color: "white"}}>
                <div className="navbar-item" style={{backgroundColor: props.transparent? "unset" : undefined}}>
                    <p>{props.name}</p>
                </div>
            </Link>
        ) : 
        (
            <div className="navbar-item" style={{backgroundColor: props.transparent? "unset" : undefined}}>
                <p>{props.name}</p>
            </div>
        )

    )
}

export default NavbarElement;