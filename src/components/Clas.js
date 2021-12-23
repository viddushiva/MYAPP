import React, { Component } from 'react'
import './style.css'
const mal={
    color:"orange"
}

 class Clas extends Component {
    render() {
        return (
     
        
            <div className='dummyc'>
            <h2>this is created by using class component</h2>
            <p>this is done by external css</p>
            <p style={mal}>this is done by internal css</p>
            </div>

           

            
     
            
        )
    }
}
export default Clas