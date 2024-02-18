export interface NavbarElementProps { // exported so we can restrict navbar section children to this
    name: string
}

const NavbarElement: React.FC<NavbarElementProps> = (props: NavbarElementProps) => {
    return(
        <div className="navbar-element">
            <p>{props.name}</p>
        </div>
    )
}

export default NavbarElement;