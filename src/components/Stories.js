import React, { useState } from 'react'
import "../cloudcss/stories.css";
import Story from "./Story";

function Stories(props){
    const path = props.paths;
    const [friendStory, setFriendStory] = useState([
    {
        id:1,
        fname:"Julia",
        pic:"1.png",
        seen:false
    },
    {
        id:2,
        fname:"Frank",
        pic:"2.png",
        seen:false
    },
    {
        id:3,
        fname:"Jenifer",
        pic:"3.png",
        seen:false
    },
    {
        id:4,
        fname:"Yen",
        pic:"4.png",
        seen:true
    }
])
    return (
        <div className="stories r">
        <div className="friend_stories ">
            <div className="storiesScrollBar f wp">
                    <div className="story f f-cl ai-c" data-target="me">
                        <button className="prm crcl"><i class="fas fa-plus"></i></button>
                        <p>Davit</p>
                    </div>
                   {
                       friendStory.map(story => {
                           return(
                            <Story key={story.id} path={path} story={story}/>
                           )
                       })
                   }
            </div>
        </div>
            <div className="splitter"></div>
        </div>
    );
}

export default Stories
