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
import NotfoundLogin from "./components/NotfoundLogin";
import AboutLogin from "./views/AboutLogin";
import GamesLogin from "./views/GamesLogin";
import VideoLessonLogin from "./views/VideoLessonLogin";
import WorksheetsLogin from "./views/WorksheetsLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/u" element={<HomeLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/u/about" element={<AboutLogin />} />
        <Route path="/games" element={<Games />} />
        <Route path="/u/games" element={<GamesLogin />} />
        <Route path="/video-lesson" element={<VideoLesson />} />
        <Route path="/u/video-lesson" element={<VideoLessonLogin />} />
        <Route path="/worksheets" element={<Worksheets />} />
        <Route path="/u/worksheets" element={<WorksheetsLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/u/*" element={<NotfoundLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
