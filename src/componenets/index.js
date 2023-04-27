import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {count:0}

    onIncrease = () => {
        const number = Math.ceil(Math.random() * 100)
        this.setState((prevState) => ({count: prevState.count + number}))
    }
    
    
    render(){
        const {count} =  this.state
        const text = count % 2 === 0 ? "Even":"Odd";
        return(
        
            <div className= "container" >
                <h1>Count {count}</h1>
                <h3>Count is {text}</h3>
                <button onClick = {this.onIncrease}>Increment</button>
                <p>* Increase by random number between 0 and 100</p>
                
            </div>
        )
    }
}

export default Counter