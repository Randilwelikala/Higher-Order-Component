import { useState } from "react";

const HoverButton = (WrapperButton)=>{

    const FinalButton = (props)=>{
        const [count,setCount] = useState(0);

        const hoverTrigger = (count)=>{
            setCount(count+1);

        }
        return(
        <>
            <WrapperButton hoverTrigger = {hoverTrigger} {...props}/>
            <h6>{count}</h6>
            </>
        )
    };

    return FinalButton;

}

export default HoverButton;