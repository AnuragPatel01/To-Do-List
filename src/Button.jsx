import React, {useState} from "react";

export function Click(props){
    return(
        <>
        <button style={{
             backgroundColor:"yellow",
             marginTop: "20px",
             marginBottom: "20px",
             padding: "9px 15px",
             borderRadius: "8px",
             border: "none",
             fontWeight: "550",
             fontSize: "15px",
             color: "black",
             cursor: 'pointer',
            
        }}
       
        onClick={props.onClick}
        >
            {props.buttoname}

        </button>
        </>
    )
}