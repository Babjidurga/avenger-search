import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {text:true,content:"LightMode"}
    changeText = () => {
        const {text,content} =  this.state
        if (text){
            this.setState({text:false,content:"DarkMode"})
        }else{
            this.setState({text:true,content:"LightMode"})
        }
    }
    render(){
        const {content} =  this.state
        return(
            <div className= {`container ${content}`} >
                    <h1>Click to change the mode</h1>
                    <button onClick={this.changeText}> {content}</button>
            </div>
        )
    }
}

export default Counter