import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
  const navigate=useNavigate()
  /// show added data to UI from server
  const handleAddUser=event=>{
    event.preventDefault()
    const name= event.target.name.value
    const email= event.target.email.value 
    const user={name, email}
    /// for post a data
    const url= `http://localhost:5000/user`
    fetch(url,{
      method: "POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    
    navigate('/')
  }
    
  return (
    <div>
      <h2> Please Added a user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <button> Add this user</button>
      </form>
    </div>
  );
};

export default Adduser;