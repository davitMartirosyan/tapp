import React from "react";
import Header from "./components/Header";
function App() {
  const paths = {
    imgs:"./path/icons/"
  }
  return (
    <div className="tap">
        <Header paths={paths}/>
      
    </div>
  );
}

export default App;
