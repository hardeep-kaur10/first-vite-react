import './dec.css'
import { useState } from "react";

const Decbutton = (parameters)=>{
  

const[count, setCount]=useState(14)

const handleclick=()=>{
setCount(count -1)
};


      return (
        <div> 
        <h1 style={{
  color:"",
  padding: "0px 30px" ,
 }}>number:{count}</h1>

        <h5>{parameters.title}</h5>
        <button className='decbutton' onClick={handleclick
        } >{parameters.text}</button>
        </div>
    
      );
    }


    export default Decbutton;