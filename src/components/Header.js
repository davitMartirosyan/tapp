import React from "react";
function Header(props){
    const path = props.paths;
    return (
        <header className="f jc-sb ai-c r">
            <div className="logo f ai-c">
                <img style={{ width:"40px", height:"40px"}}src={path.imgs+"tap.svg"} alt="logo"/>
                <h5>DEM</h5>
            </div>
            <button className="prm crcl search"> <i class="fas fa-search"></i></button>
            <div className="splitter"></div>
        </header>
    )
}
export default Header;