import { ReactElement, ReactNode } from "react"
import { NavbarElementProps } from "./NavbarElement"

interface NavbarSection {
    name: string
    children: ReactElement<NavbarElementProps>[] | ReactElement<NavbarElementProps>
}

const NavbarSection: React.FC<NavbarSection> = (props: NavbarSection) => {
    return (
        <div className="navbar-section">
            {props.children}
        </div>
    )
}

export default NavbarSection;