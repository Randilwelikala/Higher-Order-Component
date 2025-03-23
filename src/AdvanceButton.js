import { useState } from "react"

const AdvanceButton = (WrapperButton, hover=false,click=false)=>{
    const FinalButton = (props)=>{
        const [count,setCount] = useState(0);

        const clickTrigger = ()=>{
            setCount(count+1);
        }

        const hoverTrigger = ()=>{
            setCount(count+1);
        }

        

        return(
            <>
            <WrapperButton clickTrigger={click?clickTrigger:null} hoverTrigger={hover?hoverTrigger:null} {...props} />
            <h6>{count}</h6>
            

            </>
        )
    }

    return FinalButton;
}

export default AdvanceButton;