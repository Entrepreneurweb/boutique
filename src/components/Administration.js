import React, { useContext, useState } from 'react'
import AddProductForm from './Addprod';
import Supprimer from './deleteprod';
import { Banner } from './Banner';


export const Administration = () => {

const[variable, setvariable]=useState(0);
const[changingtext, setchangingtext]=useState("Ajout de produit");


  return (
    
    <div style={{height:"100%"}}  >
        <span style={{ justifyContent:"center", alignItems:"center"}} > <h1>Espace d'Administration</h1>   </span>
        <Banner/>

<span> <button style={{ backgroundColor: '#306EFF', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={()=>{

   if(variable==1){
    setvariable(0)
   }else{
    setvariable(1);
   } 
   if(changingtext==="Suppression des produit"){
    setchangingtext("Ajout de produit");
   }else if(changingtext==="Ajout de produit") {
    setchangingtext("Suppression des produit");

   }
}} > Basculer vers la page de {changingtext} </button> </span>



{variable ? <div><AddProductForm/> </div> : <div><Supprimer/></div>}
    </div>
  )
}
