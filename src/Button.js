import { useState } from "react";

const Button = ({text,clickTrigger,count})=>{

    

    const mouseClick=(e)=>{
        if(clickTrigger){
            clickTrigger(count);
        }
    }

    const mouseHover = ()=>{
        // setCount(count+1);
    }
    return(
        <div>
            <button onClick={mouseClick} onMouseOver={mouseHover}>{text}</button>
            

            
        </div>
    )
}

export default Button;