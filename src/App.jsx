import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home.jsx"; // Ensure file name matches case and extension
import Navbar from "./components/Navbar"; // Ensure file name matches case and extension

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
