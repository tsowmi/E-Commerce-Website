import React from "react";
import App from "../App.css"

function List(props)
{
    const listItem=props.value;
    if(listItem==="Frequently Asked Questions"){    
    return(
        <a href="https://www.fastrack.in/faq" target="_blank" className="listColor linkColor">Frequently Asked Questions</a> 
        
    );}
    else{
        return(
            <li style={{listStyleType:"none"}}>{props.value}</li>
        )
    }
}

export default List;