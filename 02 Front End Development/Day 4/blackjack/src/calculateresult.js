function calculateresult(props){
    let result = 0;

    if (props.number === "A"){
        result+=1
    }
    else if(props.number === "J" || props.number === "K" || props.number === "Q"){
        result += 10
    }
    else{
        result += parseInt(props.number);
    }

    return result;
}

export default calculateresult;