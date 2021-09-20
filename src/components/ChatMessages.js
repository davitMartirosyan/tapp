import React, { useState } from 'react'
import "../cloudcss/chatmessages.css";

function ChatMessages(props){
    const path = props.paths;
    const [friendsChat, setFriendChat] = useState([
        {
            id:1,
            pic:"5.png",
            fname:"Adam",
            message:"Բարև ձեզ",
            time:"15:40AM",
            messageCount:"5",
            new:true
        },
        {
            id:2,
            pic:"6.png",
            fname:"Elen",
            message:"Ում հետ ես խոսում",
            time:"20:25PM",
            messageCount:"15",
            new:true
        },
        {
            id:3,
            pic:"7.png",
            fname:"Meggi",
            message:"Hi",
            time:"15:40AM",
            messageCount:"5",
            new:false
        },
        {
            id:4,
            pic:"8.png",
            fname:"Gev",
            message:"Barev vonc es axpers",
            time:"Yesterday",
            messageCount:"2",
            new:true
        },
        {
            id:5,
            pic:"9.png",
            fname:"Evelina",
            message:"Barev",
            time:"Tuesday",
            messageCount:"1",
            new:false
        },
        {
            id:5,
            pic:"9.png",
            fname:"Evelina",
            message:"Barev",
            time:"Tuesday",
            messageCount:"1",
            new:false
        },
        {
            id:5,
            pic:"9.png",
            fname:"Evelina",
            message:"Barev",
            time:"Tuesday",
            messageCount:"1",
            new:false
        }
    ])

    return(
    <div className="friendsChats r">
        <div className="chat">
         {
             friendsChat.map(frChat => {
                return (
                    <div className="fchat prm g g-col-3" data-target="id" key="id">
                       <div className="fpic primary crcl">
                           <img src={path.upic+frChat.pic} />
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
                )
             })
         }
        </div>
        
    </div>
    )

}

export default ChatMessages;