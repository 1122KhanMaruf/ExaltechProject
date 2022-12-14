
import './App.css';
import { useState } from 'react';
import Courses from "./reducer/Courses";
import Navigation from "./reducer/Navigation.";
import CustomCarousel from "./reducer/CustomCarousel";
import Dashboard from "./reducer/Dashboard";
import Footer from "./reducer/Footer";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show && <Dashboard />}
      <hr></hr>
      <Navigation />
      <hr></hr>
      <CustomCarousel />
      <hr />
      <Courses />
      <hr></hr>
      <Footer/>
    </div>
  );
}

export default App;
