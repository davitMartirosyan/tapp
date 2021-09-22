import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Tags from "./components/Tags";
import ChatMessages from "./components/ChatMessages";
import Bar from "./components/Bar";
function App() {
  const paths = {
    imgs:"./path/icons/",
    upic:"./path/upic/"
  }
  const[mode, setMode] = useState("light");

  function themeChange(e){
    e.target.checked ? setMode("dark") : setMode("light")
  }
  return (
    <div className={"tap r "+mode}>
      <Router>
        <Header paths={paths} themeChange={themeChange}/>
        
          <Stories paths={paths}/>
          <Tags/>
          <ChatMessages paths={paths}/>

        <Bar/>
      </Router>
    </div>
  );
}

export default App;
///route