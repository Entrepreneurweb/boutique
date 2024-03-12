import React, { useContext, useState } from 'react';
import NavBar from './Navbar';
import ProductsList from './Afficherprod';
import { Contexttri } from './TriContext';


export const Ui = () => {
  const[select, setselect]=useState("");
  const{argument, update}=useContext(Contexttri);
  

  
  return (
    <div style={{ fontFamily: "fantasy"}} >
        <NavBar/>
        <label style={{ display:"flex", alignItems:"left", height:"25px" , margin:"10px" }} >
          AFFICHER:
      <select value={select} onChange={(e)=>{
        setselect(e.target.value);
        update(e.target.value);
      }}  style={{ height:"20px", borderStyle:"none"}} >
        <option value=""> TOUT</option>
        <option value="electronique"> ELECTRONIQUE</option>
        <option value="vetements"> VETEMENTS</option>
        <option value="chaussures"> CHAUSSURES</option>
      </select>


        </label>
        <ProductsList/>
    </div>
  )
}
