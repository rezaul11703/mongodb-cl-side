import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users,setUsers]= useState([])
  ///for delete a user
  
    const handleDelete= id=>{
      const process = window.confirm('Are you sure to delete')
      if(process){
        const url=`http://localhost:5000/user/${id}`
      fetch(url,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          console.log("deleted", id)
          const remainUsers= users.filter(user=> user._id!== id)
          setUsers(remainUsers)
        }
      })
      }
      
     }
  
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h2> The Total Users are:{users.length}</h2>
      {
        users.map(user=><li key={user._id}>
          Name:{user.name} Email: {user.email}
          <button onClick={()=> handleDelete(user._id)}> X</button>
        </li>)
      }
      <Link to='/user/add'><button> Added a New User</button> </Link>
    </div>
  );
};

export default Home;