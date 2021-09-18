import React from "react";
function Header(props){
    const path = props.paths;
    return (
        <header className="f jc-sb ai-c">
            <div className="logo f ai-c b">
                <img style={{ width:"40px", height:"40px"}}src={path.imgs+"tap.svg"}/>
                <h5>Tapp</h5>
            </div>
            <button className="prm crcl search g c"> <img src={path.imgs+"search.svg"}/></button>
        </header>
    )
}
export default Header;