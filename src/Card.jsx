// import { useState } from "react";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export function Taskcard(props) {
  return (
    <>
      <div
        style={{
          border: "2px solid white",
          height: "60px",
          width: "300px",
          margin: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "600",
          fontSize: "17px",
          borderRadius: "15px",
          backdropFilter: "blur(5px)",
        }}
      >
        {props.name} <RiDeleteBin6Line />
            
           
      </div>
    </>
  );
}
