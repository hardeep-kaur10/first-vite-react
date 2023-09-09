
import Mybutton from "./components/mybutton"
import Title from "./components/title"
import Decbutton from "./components/dec"


function App() {


  return (
  <div>
  <Title heading="MY first react app"/>

 {/* <h1 style={{
  color:"red",
  padding: "0px 30px" ,
 }}>number is-{count[0]}</h1> */}

    <Mybutton text="click to increase"/>
    <Decbutton text="click to decrease"/>

  </div>
  )
}


export default App
