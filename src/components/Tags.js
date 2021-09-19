import React from 'react'
import "../cloudcss/tags.css";
const tags = ["Ընկերներ", "Կոլեգաներ", "Ընտանիք","Առողջոպահություն"];
const Tags = () => {
    return (
        <div className="tags r f">
            {
                tags.map(tag => {
                    return(
                        <button className="tag prm f ai-c jc-c">{tag}</button>
                    )
                })
            }
        </div>
    )
}

export default Tags
