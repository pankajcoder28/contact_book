import { useState } from "react"
import React from 'react'

const App = () => {
  const [user, setuser] = useState('')
  const [userprof, setuserprof] = useState('')
  const [userrole, setuserrole] = useState('')
  const [userdes, setuserdes] = useState('')

  const localdata = JSON.parse(localStorage.getItem('all-user')) 
  const [allusers, setallusers] = useState(localdata)
  let submitted = (e)=>{
    e.preventDefault()
   
    allusers.push({user,userprof,userrole,userdes})
    setallusers(allusers)
    localStorage.setItem('all-user',JSON.stringify(allusers))

    setuser('')
    setuserprof('')
    setuserrole('')
    setuserdes('')
  }
  
  return (
    
      <div className="forms">
         <form onSubmit={(e)=>{
        submitted(e)
      }}>
        <div className="div1">
          <input className="input" type="text" placeholder='Enter your name' required
        value={user}
        onChange={(e)=>{
          setuser(e.target.value)
        }} />
        <input className="input" type="text" placeholder="Profile picture url" required value={userprof} 
        onChange={(e)=>{
          setuserprof(e.target.value)
        }} />
        <input className="input" type="text" placeholder="Enter role " required value={userrole} 
        onChange={(e)=>{
          setuserrole(e.target.value)
        }}/>
        <input className="input" type="text" placeholder="Description" required value={userdes}
        onChange={(e)=>{
          setuserdes(e.target.value)
        }} />
        </div>
        
        <div className="but">
          <button className="button" >create user</button>
        </div>
        
      </form>
      <div className='cards'>
        {
          allusers.map(function(elem,idx){
            return <div key={idx} className="card">
            <img src={elem.userprof} alt="" />
            <h1>{elem.user}</h1>
            <h2>{elem.userrole}</h2>
            <p>{elem.userdes}</p>
            <button onClick={(idx)=>{
              let copyuser = [...allusers]
              copyuser.splice(idx,1)
              setallusers(copyuser)
              localStorage.setItem('all-user',JSON.stringify(copyuser))
            }}>Remove</button>
            
          </div>
          })
        }
      </div>
      </div>
     
  )
}

export default App
