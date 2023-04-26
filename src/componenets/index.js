import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {text:true,firstOne:"hide",lastOne:"hide"}
    first = () => {
        const {text,firstOne} =  this.state
        if (text){
            this.setState({text:false,firstOne:"show"})
        }else{
            this.setState({text:true,firstOne:"hide"})
        }
    }
    last = () => {
        const {text,lastOne} =  this.state
        if (text){
            this.setState({text:false,lastOne:"hide"})
        }else{
            this.setState({text:true,lastOne:"show"})
        }
    }
    render(){
        const {firstOne,lastOne} =  this.state
        return(
        
            <div className= "container" >
                <h2>SHOW / HIDE</h2>
                <div className="data">
                    <div className="name-container">
                        <button onClick={this.first}> Show / Hide First name</button>
                        <h1 className={` ${firstOne}`}>John</h1>
                    </div>
                    <div className="name-container">
                        <button onClick={this.last}> Show / Hide Last name</button>
                        <h1 className={` ${lastOne}`}>Snow</h1>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Counter