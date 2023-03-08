import React from 'react';
import './App.css';
import Welcome from './Welcome';
//import { render } from '@testing-library/react';

const styling ={
  textAlign: "center"
}

class Myapp extends React.Component{
  render (){
    return (
      <React.Fragment>
        <h1>Hello My name is {this.props.name} from Class Component</h1>
        {this.props.children}
      </React.Fragment> 
    
    )
  }
}

function Mysapp(props){
  return (<h1>This is {props.name} from functional component</h1>)
}

let Mytfunc = (props) => <h1>This is {props.name} from arrow function component</h1>

function App() {
  return (
    <div style={styling}>
    <Myapp name = "Bilal Qureshi">
      <p>This is class component child paragraph</p>
    </Myapp>
    <Mysapp name = "Bilal"/>
    <Mytfunc name = "Bilal Ahmad"/>
    <Welcome name = "Bilal"
      contact = "0000"
    />
    <Welcome name = "Ahmad"
      contact = "1111"
    />
    <Welcome name = "Qureshi"
      contact = "2222"
    />
    <Welcome name = "Umer Shah"
      contact = "3333"
    />
    </div>
  );
}

export default App;
