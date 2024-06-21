import React from "react";

function Button({onclick,value}){
    return(
        <>
        <button onClick={onclick}>{value}</button>
        </>
    )
}
export default Button;