import { CSSProperties } from "react";

export interface NavbarElementProps { // exported so we can restrict navbar section children to this
    name: string
    goto?: string
    transparent?: boolean
}

const NavbarElement: React.FC<NavbarElementProps> = (props: NavbarElementProps) => {
    return(
        <div className="navbar-item" style={{backgroundColor: props.transparent? "unset" : undefined}}>
            <p>{props.name}</p>
        </div>
    )
}

export default NavbarElement;