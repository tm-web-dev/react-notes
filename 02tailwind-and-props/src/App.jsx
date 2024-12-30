import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  // const brands  = ["Nike", "Adidas", "Reebok"];
  // const details = {
  //   brand: "Nike",
  //   color: "red",
  //   size: "large",
  //   price: 1000
  // }
  
  return (
    <>
      <h1 className="bg-green-700 rounded-2xl p-4 mb-5">Tailwind test and Props</h1>
      <div className="flex justify-center gap-3">

{/* 
We can pass valus directly in the component but cannot pass the array/obj directly - 

<Card brand={"Nike"} /> 

we can pass array/obj through varibales 

const brands  = ["Nike", "Adidas", "Reebok"];
  const details = {
    color: "red",
    size: "large",
    price: 1000
  }
 <Card brand= {brands} detail={details} /> 

*/}
      <Card brand="Nike" /> 
      <Card brand="Adidas"/>
      </div>
    </>
  );
}

export default App;
