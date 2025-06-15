import { useState,useEffect } from 'react'

// import './App.css'

function HooksExample(){
  const [count, setCount] = useState(0)
  const counter=()=>{
    return setCount(count+1)
  }
  
  return(
    <>
       <p>{count}</p>
       <button onClick={counter}>Click Here</button>
    </>
  
  )
}

export default HooksExample
