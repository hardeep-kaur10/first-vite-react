// const Mybutton = (props)=>{
//   console.log(props.title);
//   return (
//     <div> 
//     <h2>{props.title}</h2>
//     <button>hello</button>
//     </div>

//   );
// }
// function App() {

//   return ( 
//   <div>
//     <Mybutton title = "send" />
//   </div>
//   )
// }

const Mybutton = (parameters)=>{
console.log(parameters.title);
  return (
    <div> 
    <h5>{parameters.title}</h5>
    <button>{parameters.text}</button>
    </div>

  );
}
function App() {

  return ( 
  <div>
    <Mybutton title="1" text="use me"/>
    <Mybutton title="2" text="use"/>
  </div>
  )
}


export default App


// export default App
