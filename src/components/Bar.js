import React from 'react'
import { Link } from 'react-router-dom'
import "../cloudcss/bar.css";
import Iconic from './icopack/Iconic';
const Bar = () => {

    return (
        <div className="bar r">
            <div className="splitter"></div>

            <ul className="navigation f jc-sb">
                <li className="navitem f f-cl ai-c">
                    <Link to="/photo" className="f f-cl ai-c jc-c">
                        <span className="navitemico f jc-c ai-c">                      
                        <Iconic iconame="photo"/>
                        </span>
                        <span className="navitemtext"><p>photo</p></span>
                    </Link>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                        <Iconic iconame="call"/>
                        </span>
                        <span className="navitemtext"><p>calls</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                        <Iconic iconame="chat"/>
                        </span>
                        <span className="navitemtext"><p>chats</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                        <Iconic iconame="contact"/>
                        </span>
                        <span className="navitemtext"><p>contacts</p></span>
                    </a>
                </li>

                <li className="navitem f f-cl ai-c">
                    <a href="#" className="f f-cl ai-c">
                        <span className="navitemico f jc-c ai-c">
                        <Iconic iconame="more"/>
                        </span>
                        <span className="navitemtext"><p>more</p></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Bar
