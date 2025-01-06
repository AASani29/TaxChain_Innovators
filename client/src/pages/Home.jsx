import React from "react";
import { Link } from "react-router-dom"
import Header from "../components/Header";


export default function Home() {
  return (
    <div className="bg-cream min-h-screen px-4" style={{ backgroundColor: "#f8f1d1" }}>
         <Header/>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-4">
       <h1>Home Page</h1>      
              
    </div>
    </div>
  );
}
