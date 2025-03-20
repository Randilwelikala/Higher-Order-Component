import { Component } from "react"

class TextField extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <input type="text" placeholder="type yourtext..."/>
        )
    }
}

export default TextField;