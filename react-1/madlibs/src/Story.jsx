import React, {useState} from "react";

function Story({madlibParts, restart}) {

    const { noun, noun2, adjective, color } = madlibParts;
    
    const generateStory = () => {
        return `${adjective} ${color} ${noun} jumped over the ${noun2}.`;
   };

    return (
        <div>
            <p>{generateStory()}</p>
            <button onClick={restart}>Restart</button>
        </div>
    )
}


export default Story;