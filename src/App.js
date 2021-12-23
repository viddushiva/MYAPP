// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Clas from './components/Clas';
import Functi from './components/Functi'
// import {Functi,Sum,Sub,Mul} from './Components/Functi';
// import Second from './Components/Second';
class App extends Component{
state={
  displayFunction:false,
  displayClass:false
}
render(){
  return (
    <div className="App">
        <h1 className='one'> Styling using functional and class component</h1>

   
     <button className="first" onClick={()=>this.setState({displayFunction:!this.state.displayFunction})}>to see styling in functional component</button>
     <button className="biu" onClick={()=>this.setState({displayClass:!this.state.displayClass})} >to see styling in class component</button>
     {this.state.displayFunction?<Functi/>:null}
     {this.state.displayClass?<Clas/>:null}



    </div>
  )
}
}

export default App;
