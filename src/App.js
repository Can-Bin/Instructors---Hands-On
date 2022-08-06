import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Fullstack from "./pages/Fullstack";
import Home from "./pages/Home";
import DataScience from "./pages/DataScience";
import Devops from "./pages/Devops";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Instructors from "./pages/Instructors";
import InstructorDetail from "./pages/InstructorDetail";  

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/developing" element={<Fullstack/>}/>
          <Route path="/data-science" element={<DataScience/>}/>
          <Route path="/devops" element={<Devops/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/instructors" element={<Instructors/>}/>
          <Route path="/instructors/:login" element={<InstructorDetail/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
export default App;
