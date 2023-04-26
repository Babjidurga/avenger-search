import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {text:true,content:"Subscribe"}
    changeText = () => {
        const {text,content} =  this.state
        if (text){
            this.setState({text:false,content:"Subscribed"})
        }else{
            this.setState({text:true,content:"Subscribe"})
        }
    }
    render(){
        const {content} =  this.state
        return(
            <div className="container">
                    <h1>Welcome</h1>
                    <p>Thank you Happy Learning</p> 
                    <button onClick={this.changeText}> {content}</button>
            </div>
        )
    }
}

export default Counter