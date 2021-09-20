import React from "react";
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
  return (
    <div className="tap r">
        <Header paths={paths}/>
        <Stories paths={paths}/>
        <Tags/>
        <ChatMessages paths={paths}/>
        <Bar/>
    </div>
  );
}

export default App;
