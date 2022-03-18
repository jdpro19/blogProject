import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import CreatePost from "./pages/CreatePost";
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {

  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
     window.location.pathname = "/login";
    });
  }

  return (
    <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/createpost">CreatePost</Link>
      {!isAuth ? ( <Link to="/login">Login</Link> 
      ) : (
         <button onClick={signUserOut}> Sign Out</button> 
      )}
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
    </Routes>
  </Router>
  );
}

export default App;
