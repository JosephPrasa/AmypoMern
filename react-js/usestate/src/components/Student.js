import React, { useState } from 'react'

function Student() {
    const [message,setMessage]=useState(false);
    const [name,setName]=useState("");
  return (

    <div>
        <button onClick={()=>setMessage(!message)}>
            {message ? "Hide Me!!" :"Click Me!!" }
        </button>
        {message && <p>Naa tha da Leo, LeoDas!!</p>}
        <input type='text' placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)} />
        <h1>Hello, {name}</h1>
    </div>
    
  )
}

export default Student