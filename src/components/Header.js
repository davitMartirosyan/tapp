import React from "react";
function Header(props){
    const path = props.paths;
    return (
        <header className="f jc-sb ai-c r">
            <div className="logo f ai-c">
                <img style={{ width:"40px", height:"40px"}}src={path.imgs+"icon-72x72.png"} alt="logo"/>
                <h5>DEM</h5>
            </div>
                <label class="togg-flat-checkbox">
                    <input type="checkbox" onChange={props.themeChange}/>
					<span class="togg-flat-checkbox-slider round"></span>
				</label>
            
            <button className="prm crcl search"> <i class="fas fa-search"></i></button>
        </header>
    )
}
export default Header;