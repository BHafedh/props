//import logo from "./logo.svg"
import React from "react"
import './App.css' ;

import Profile from "./Profile/profile" 
 function App() {
  const fullName="hafedh", bio ="coding", profession ="web", location="tunis"  ;
 
  const f = () => {
    alert(fullName)
  
  } 

    return (
      <div>
      <Profile fullName = {fullName} bio ={bio}  profession ={profession} f={f}   >
        <img src="./Profile/download.jpg" alt="gomy" />
      </Profile>
      </div>
  
        
    )
}


export default App ;
