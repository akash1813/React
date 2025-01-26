
import Chai from "./chai";
import React from "react";


const reactElement  = React.createElement(

    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit Google'

);


function App() {
  
  return (
    
    reactElement
  )
}

export default App;
