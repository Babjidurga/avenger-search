import React from 'react'
import './App.css'

const UserProfile = (props) => {
  const {userDetails,onDeleteUser} = props
  const {name,role,url,Id} = userDetails
  const onDelete = () => {
    onDeleteUser(Id)
  }
  return (
    <div className='user-profile'>
        <img src = {url} alt = "avatar" className='avatar-pic'/>
        <div className='user-details'>
          <h2 className='av-name'>{name}</h2>
          <p className='av-role'>{role}</p>
        </div>
        <button className='butoon-icon' onClick={onDelete}>
        <img src = "https://media.istockphoto.com/id/1039939018/vector/wrong-mark-line-icon-one-of-set-web-icons.jpg?s=612x612&w=0&k=20&c=p5zCbRQaUQHkFi6yBPWLYoeQMEQ4u8cnMyu0xqktQbE=" alt='cross' className='icon'/>
        </button>
    </div>
  )
}

export default UserProfile