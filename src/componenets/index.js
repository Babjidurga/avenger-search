import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {status:false}
    changeData = () => {
        this.setState((prevState) => ({status: !prevState.status}))
    }
    render(){
        const {status} = this.state
        const headText = status ? "Welcome User":"Please Login"
        const buttonText = status ? "Logout":"Login"
        return(
        
           <div className="container">
                <h1>{headText}</h1>
                <button onClick={this.changeData}>{buttonText}</button>
           </div>
        )
    }
}

export default Counter