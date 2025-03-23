import { useState } from "react"

const AdvanceButton = (WrapperButton)=>{
    const FinalButton = (props)=>{
        const [count,setCount] = useState(0);

        const clickTrigger = ()=>{
            setCount(count+1);
        }

        const hoverTrigger = ()=>{
            setCount(count+1);
        }

        

        return(
            <WrapperButton />
        )
    }
}