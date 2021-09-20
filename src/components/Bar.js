import React from 'react'
import "../cloudcss/bar.css";
const Bar = () => {
    return (
        <div className="bar r">
            <div className="splitter"></div>

            <ul className="navigation f jc-sb">
                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                            <img className="" src="../path/icons/pictures.svg"/>
                        </span>
                        <span className="navitemtext"><p>photo</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                            <img className="" src="../path/icons/call.svg"/>
                        </span>
                        <span className="navitemtext"><p>calls</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                            <img className="" src="../path/icons/chat.svg"/>
                        </span>
                        <span className="navitemtext"><p>chats</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                            <img className="" src="../path/icons/contacts.svg"/>
                        </span>
                        <span className="navitemtext"><p>contacts</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                            <img className="" src="../path/icons/menu.svg"/>
                        </span>
                        <span className="navitemtext"><p>more</p></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Bar
