import { useState } from "react";

const ClickButton = (WrapperButton)=>{

    const FinalButton = (props)=>{
        const [count,setCount] = useState(0);

        const clickTrigger = (count)=>{
            setCount(count+1);

        }
        return(
        <>
            <WrapperButton clickTrigger = {clickTrigger} {...props} count={count}/>
            <h6>{count}</h6>
            </>
        )
    };

    return FinalButton;

}

export default ClickButton;