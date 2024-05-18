
import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/SideBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn); 
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          {isLoggedIn ? <Sidebar /> : <LoginForm onLogin={handleLogin} />}
        </div>
      </div>
    </div>
  );
}

export default App;
