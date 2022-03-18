import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/createpost">CreatePost</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
    </Routes>
  </Router>
  );
}

export default App;
