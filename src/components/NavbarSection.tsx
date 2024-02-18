interface NavbarButtonProps {
    items: [{}]
}

const NavbarButton: React.FC<NavbarButtonProps> = (props: NavbarButtonProps) => {
    return (
        <div className="navbar-section">
            {props.items.map(x => 
            <div className="navbar-item">
                
            </div>
            )}
        </div>
    )
}