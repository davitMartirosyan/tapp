import React from 'react'

const Story = (props) => {
    const path = props.path;
    const story = props.story;
    return (
        
            <div className="story friend-story">
                <a href="#" className="f f-cl ai-c">
                    <div className="friend-image">
                         <img src={path.upic+story.pic} alt={story.fname}/>
                    </div>
                    <p>{story.fname}</p>
                </a>
            </div>
        
    )
}

export default Story
