import { ReactElement, ReactNode } from "react"
import { NavbarElementProps } from "./NavbarElement"

interface NavbarButtonProps {
    items: [{}]
    children: ReactElement<NavbarElementProps>[]
}

const NavbarButton: React.FC<NavbarButtonProps> = (props: NavbarButtonProps) => {
    return (
        <div className="navbar-section">
            {props.items.map(x => 
            <div className="navbar-item">
                {props.children}
            </div>
            )}
        </div>
    )
}