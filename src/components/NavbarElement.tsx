import { CSSProperties } from "react";

export interface NavbarElementProps { // exported so we can restrict navbar section children to this
    name: string
    style?: CSSProperties | undefined
}

const NavbarElement: React.FC<NavbarElementProps> = (props: NavbarElementProps) => {
    return(
        <div className="navbar-item" style={props.style}>
            <p>{props.name}</p>
        </div>
    )
}

export default NavbarElement;