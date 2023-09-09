import './mybutton.css'
import { useState } from "react";

const Mybutton = (parameters)=>{
  
// let countstate=useState(0)
// const[count, setCount]=countstate
const[count, setCount]=useState(0)

const handleclick=()=>{
setCount(count +1)
};


      return (
        <div> 
        <h1 style={{
  color:"red",
  padding: "0px 30px" ,
 }}>number-{count}</h1>

        <h5>{parameters.title}</h5>
        <button className='button' onClick={handleclick
        } >{parameters.text}</button>
        </div>
    
      );
    }


    export default Mybutton;