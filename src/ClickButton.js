const ClickButton = (WrapperButton)=>{

    const FinalButton = (props)=>{
        return(
            <WrapperButton {...props}/>
        )
    };

    return FinalButton;

}

export default ClickButton;