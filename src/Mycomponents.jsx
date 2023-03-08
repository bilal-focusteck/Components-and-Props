import React from "react";

function Mycomponent(props){
  return (
    <>
    <h1>{props.message} from {props.name}</h1>
    </>
  )
}
export default Mycomponent;