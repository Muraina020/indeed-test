import React from "react"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import IndividualBusiness from "./components/IndividualBusiness";
import EaziWork from "./components/EaziWork";
import Man from "./Man";
import Demo from "./Demo";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="px-20 mb-20">
     <Navbar/>
    <div className="mt-20">
     <Header/>
     </div>
     <div className="mt-20 bg-green-100">
     <IndividualBusiness/>
     </div>
     <div className="mt-20">
     <EaziWork/>
     </div>
     <div className="mt-20 bg-red-100">
     <Man/>
     </div>
     <div className="mt-20">
     <Demo/>
     </div>
     <div className="mt-20">
     <Dashboard/>
     </div>
     <div className="mt-20 px-12">
     <Footer/>
     </div>
  
     </div>

  );
}

export default App;
