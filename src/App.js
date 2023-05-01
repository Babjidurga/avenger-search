import {Component} from 'react'
import UserProfile from './UserProfile'


const initialUsersList = [
    {
        name:"Hulk ",
        role:"Mutational",
        Id:"1",
        url:"https://wallpaperaccess.com/full/146393.jpg"    },
    {
        name:"Iron man",
        role:"Technological",
        Id:"2",
        url:"https://images.hdqwalls.com/wallpapers/bthumb/i-am-iron-man-4k-ky.jpg"
    },
    {
        name:"Ant Man",
        role:"Quantum field",
        Id:"3",
        url:"https://www.rollingstone.com/wp-content/uploads/2018/07/ant-man-and-the-wasp-review-f5832958-5683-48a3-aeb1-2f2dfdf14f47.jpg?w=1581&h=1054&crop=1"
    },
    {
        name:"Spider Man",
        role:"Mutational",
        Id:"4",
        url:"https://static.toiimg.com/thumb/msid-88293744,width-1280,resizemode-4/88293744.jpg"
    },
    {
        name:"Thor",
        role:"Asgardian",
        Id:"5",
        url:"https://wallpaper.dog/large/20491953.jpg"
    },
    {
        name:"Loki",
        role:"Asgardian",
        Id:"6",
        url:"https://freepngimg.com/thumb/loki/20685-4-loki.png"
    },{
        name:"Captain America",
        role:"Captain",
        Id:"7",
        url:"https://static.toiimg.com/photo/msid-92954243/92954243.jpg"    
    },{
        name:"Dr.Strange",
        role:"Time Travel",
        Id:"8",
        url:"https://static.toiimg.com/photo/89571264.jpeg"
    },{
        name:"Black widow",
        role:"Protection",
        Id:"9",
        url:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-52173375/52173375.jpg"
    }
    

]

class App extends Component{
  state = {text:"",usersList:initialUsersList}
  getData = (event) => {
    const {text} = this.state
    this.setState({text: event.target.value})
  }
  onDeleteUser = (Id) => {
    const {usersList} = this.state
    const filteredList = usersList.filter( 
        each => each.Id !== Id
    )
    this.setState({usersList: filteredList})

}
  render(){
    const {text,usersList} = this.state

    const serachResults = usersList.filter(eachItem => 
        eachItem.name.toLowerCase().includes(text.toLocaleLowerCase())
    )
  return (
    <div className='list-container'>
        <h1 className='list-name'>Avengers Heros list</h1>
        <input type='search' onChange={this.getData} value = {text}/>
        <ul>
            {serachResults.map((eachUser) => (
                <UserProfile userDetails = {eachUser} key = {eachUser.Id} onDeleteUser = {this.onDeleteUser}/>
            ))}
        </ul>
    </div>
  )
}
}

export default App