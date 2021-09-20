import React from 'react'
import "../cloudcss/tags.css";
const tags = ["Ընկերներ", "Կոլեգաներ", "Ընտանիք","Առողջոպահություն","Stories","feel"];
const Tags = () => {
    return (
        <div className="tags r f">
            {
                tags.map(tag => {
                    return(
                        <button className="tag prm "><p>{tag}</p></button>
                    )
                })
            }
        </div>
    )
}

export default Tags
