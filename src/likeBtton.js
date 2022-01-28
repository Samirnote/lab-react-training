import React from 'react';
import {useState} from 'react';

const colors = ['purple','blue','green','yellow','orange','red'];
let curColor = "";

function LikeButton(){
    const [count, setCount] = useState(0);

    
    const handleclick = () => {
        setCount((prevCount) => prevCount +1)
        curColor = colors[Math.floor(Math.random()*colors.length)]
    };
    return(
        <div className="LikeButton">
            <button onClick={()=>handleclick()} style = {{backgroundColor:curColor}}>
                {count} {count === 1 || count === 0 ? `Like` : `Likes`}
            </button>
        </div>
    );
};

export default LikeButton;