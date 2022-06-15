import React,{useState} from "react";
import { Main } from "./components/Main";
import {Navbar} from "./components/Navbar";

export const App = () => {
  const[darkMode, setDarkMode] = useState(false)
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return(
    <div className="card-container">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}