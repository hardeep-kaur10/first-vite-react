import './title.css'
 const Title = (props)=>{


      return (
        <div> 
        {/* <h1 style={styleobject }>{props.heading}</h1> */}
        <h1 
         className="title" >{props.heading}</h1>
        </div>
    
      );
    }

    export default Title;