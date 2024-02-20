const creativeMap: React.FC = () => {
    return (
        <div style={{height: "100vh", width: "100%"}}>
            <iframe src="https://creative.nebulacraft.net/" style={{height: "100vh", width: "100%", border: "none"}}/>
            <div onClick={()=>{window.open("https://creative.nebulacraft.net/")}} style={{backgroundColor: "var(--nav-background)", position: "fixed", bottom: 10, right: 10, padding: 10, cursor: "pointer"}}><p>Open in new tab</p></div>
        </div>
    )
}

export default creativeMap;