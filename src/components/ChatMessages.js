import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../cloudcss/chatmessages.css";

function ChatMessages(props){
    const path = props.paths;
    const [friendsChat, setFriendChat] = useState([
        {
            frid:614,
            uid:5,
            chid:15245123844645312,
            pic:"5.png",
            fname:"Adam",
            message:"Բարև ձեզ",
            time:"15:40AM",
            messageCount:"5",
            new:true
        },
        {
            frid:875,
            uid:5,
            chid:464654641545464,
            pic:"6.png",
            fname:"Elen",
            message:"Ում հետ ես խոսում",
            time:"20:25PM",
            messageCount:"15",
            new:true
        },
        {
            frid:974,
            uid:5,
            chid:44564112154454545,
            pic:"7.png",
            fname:"Meggi",
            message:"Hi",
            time:"15:40AM",
            messageCount:"5",
            new:false
        }
    ])

    return(
    <div className="friendsChats r">
        <div className="chat">
         {
             friendsChat.map(frChat => {
                return (
                    <Link to={"/chat?"+frChat.chid}>
                    <div className="fchat prm g g-col-3" data-target="id" key="id">
                       <div className="fpic primary crcl">
                           <img src={path.upic+frChat.pic}  alt={frChat.fname}/>
                        </div>
                       <div className="fstaff f f-cl jc-sb">
                                <h4>{frChat.fname}</h4>
                                <p>{frChat.message}</p>
                            </div>
                       <div className="fchatinfo f f-cl jc-sb ai-c">
                                <p className={frChat.new === true ? "gr" : ""}>{frChat.time}</p>
                                {
                                    frChat.new === true ? <p className="gr-count">{frChat.messageCount}</p> : ""
                                }
                            </div>
                    </div>
                    </Link>
                )
             })
         }
        </div>
        
    </div>
    )

}

export default ChatMessages;