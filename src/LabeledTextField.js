import { Component } from "react";

function LabeledTextField(NormalTextField,labeltext){

    class finalTextField extends Component{

        render(){

            return(
                <>
                <div>{labeltext}</div>
                <NormalTextField/>
                </>
            )
        }
    }

    return finalTextField;
}

export default LabeledTextField;