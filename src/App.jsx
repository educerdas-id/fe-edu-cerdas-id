import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/home";
import About from "./views/About";
import Games from "./views/Games";
import VideoLesson from "./views/VideoLesson";
import Worksheets from "./views/Worksheets";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomeLogin from "./views/homeLogin";
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/u" element={<HomeLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/video-lesson" element={<VideoLesson />} />
        <Route path="/worksheets" element={<Worksheets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
