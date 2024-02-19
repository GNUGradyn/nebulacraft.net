import { ReactElement, ReactNode, useState } from "react"
import NavbarElement, { NavbarElementProps } from "./NavbarElement"

interface NavbarSection {
    name: string
    children: ReactElement<NavbarElementProps>[] | ReactElement<NavbarElementProps>
}

const NavbarSection: React.FC<NavbarSection> = (props: NavbarSection) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="navbar-section" onMouseOver={()=>{setIsExpanded(true)}} onMouseOut={()=>{setIsExpanded(false)}}>
            <NavbarElement name={props.name} style={{backgroundColor: "Unset"}}/>
            <div className="navbar-container">
                {props.children}
            </div>
        </div>
    )
}

export default NavbarSection;