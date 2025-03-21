import { useState } from "react";

const ClickButton = (WrapperButton)=>{

    const FinalButton = (props)=>{
        const [count,setCount] = useState(0);

        const clickTrigger = (current_count)=>{
            setCount(current_count+1);

        }
        return(
            <WrapperButton clickTrigger = {clickTrigger} {...props}/>
        )
    };

    return FinalButton;

}

export default ClickButton;