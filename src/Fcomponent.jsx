import React from "react"
function Fcomponent(props){
  return (<h1>This is {props.name} from functional component in component file</h1>)
};

let Mytfunc = (props) => <h1>This is {props.name} from arrow function component in com file</h1>;

export default Fcomponent;
export {Mytfunc};