import './App.css';
import Header from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import Main from './components/OurDoctors/Main';
import Appointment from './components/appointment';
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About mode={"light"}/>}></Route>
          <Route exact path="/doctors" element={<Main/>}></Route>
          <Route exact path="/contact" element={<Contactus/>}></Route>
          <Route exact path="/appointment" element={<Appointment/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
