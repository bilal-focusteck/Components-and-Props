import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Fcomponent from './Fcomponent';
import { Mytfunc } from './Fcomponent';
import States from './States';
import Mycomponent from './Components/Mycomponent';

const styling ={
  textAlign: "center"
}
class Myapp extends React.Component{
  render (){
    return (
      <React.Fragment>
        <Mycomponent
        name="Bilal"
        message="Hello World One"
      />
        
        <h1>Hello My name is {this.props.name} from Class Component</h1>
        {this.props.children}
      </React.Fragment> 
    
    )
  }
}

function App() {
  return (
    <div style={styling}>
    <Myapp name = "Bilal Qureshi">
      <p>This is class component child paragraph</p>
    </Myapp>
    <States/>
    <Fcomponent name = "Bilal"/>
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
