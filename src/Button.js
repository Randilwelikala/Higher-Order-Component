import { useState } from "react";

const Button = ({text})=>{

    const [count,setCount] = useState(0);

    const mouseClick=(e)=>{
        console.log("Clicked");
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={mouseClick}>{text}</button>
            

            <h6>{count}</h6>
        </div>
    )
}

export default Button;