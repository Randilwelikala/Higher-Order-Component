import { useState } from "react";

const Button = ({text,clickTrigger,count,hoverTrigger})=>{

    

    const mouseClick=(e)=>{
        if(clickTrigger){
            clickTrigger(count);
        }
    }

    const mouseHover = ()=>{
        // setCount(count+1);
        if(hoverTrigger){
            hoverTrigger();
        }
    }
    return(
        <div>
            <button onClick={mouseClick} onMouseOver={mouseHover}>{text}</button>            
        </div>
    )
}

export default Button;