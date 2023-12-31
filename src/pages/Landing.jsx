import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import IndividualBusiness from "../components/IndividualBusiness";
import EaziWork from "../components/EaziWork";
import Man from "../components/Man";
import Demo from "../components/Demo";
import Footer from "../components/Footer";


const Landing = () => {
  return (
    <div className="px-4 md:px-20 mb-20">
    <Navbar/>
   <div className="mt-20">
    <Header/>
    </div>
    <div className="mt-[10%] bg-green-100">
    <IndividualBusiness/>
    </div>
    <div className="mt-20">
    <EaziWork/>
    </div>
    <div className="mt-20 bg-red-100">
    <Man/>
    </div>
    <div className=" mt-20">
    <Demo/>
    </div>
    <div className="mt-20 px-12">
    <Footer/>cd
    </div>
 
    </div>
  )
}

export default Landing